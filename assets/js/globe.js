(()=>{var Ll=0,Qa=1,Dl=2;var ns=1,Nl=2,Ei=3,Vn=0,Pe=1,hn=2,Qn=0,wi=1,is=2,ja=3,to=4,Ul=5;var jn=100,Fl=101,Ol=102,Bl=103,zl=104,Gl=200,kl=201,Vl=202,Hl=203,eo=204,no=205,Wl=206,Xl=207,ql=208,Yl=209,Zl=210,Jl=211,$l=212,Kl=213,Ql=214,Ws=0,Xs=1,qs=2,xi=3,Ys=4,Zs=5,Js=6,$s=7,io=0,jl=1,tc=2,un=0,so=1,ro=2,ao=3,oo=4,lo=5,co=6,ho=7;var uo=300,ti=301,Ri=302,Rr=303,Cr=304,Ks=1e3,an=1001,Qs=1002,ve=1003,ec=1004;var ss=1005;var Ie=1006,Ir=1007;var An=1008;var He=1009,fo=1010,po=1011,Ci=1012,Pr=1013,tn=1014,en=1015,nn=1016,Lr=1017,Dr=1018,ei=1020,mo=35902,go=35899,_o=1021,xo=1022,sn=1023,Sn=1026,En=1027,vo=1028,Nr=1029,Hn=1030,Ur=1031;var Fr=1033,rs=33776,as=33777,os=33778,ls=33779,Or=35840,Br=35841,zr=35842,Gr=35843,kr=36196,Vr=37492,Hr=37496,Wr=37488,Xr=37489,cs=37490,qr=37491,Yr=37808,Zr=37809,Jr=37810,$r=37811,Kr=37812,Qr=37813,jr=37814,ta=37815,ea=37816,na=37817,ia=37818,sa=37819,ra=37820,aa=37821,oa=36492,la=36494,ca=36495,ha=36283,ua=36284,hs=36285,da=36286;var zi=2300,js=2301,Vs=2302,Xa=2303,qa=2400,Ya=2401,Za=2402;var nc=3200;var yo=0,ic=1,wn="",Ge="srgb",Gi="srgb-linear",ki="linear",$t="srgb";var Hs=7680;var sc=519,rc=512,ac=513,oc=514,Mo=515,lc=516,cc=517,So=518,bo=519,hc=35044;var To="300 es",Ze=2e3,Vi=2001;function sh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Hi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uc(){let i=Hi("canvas");return i.style.display="block",i}var rl={},vi=null;function Ao(...i){let t="THREE."+i.shift();vi?vi("log",t,...i):console.log(t,...i)}function dc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ct(...i){i=dc(i);let t="THREE."+i.shift();if(vi)vi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Pt(...i){i=dc(i);let t="THREE."+i.shift();if(vi)vi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Bi(...i){let t=i.join(" ");t in rl||(rl[t]=!0,Ct(...i))}function fc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var pc={[Ws]:Ws,[qs]:Js,[Ys]:Ys,[xi]:Zs,[Xs]:Xs,[Js]:qs,[$s]:$s,[Zs]:xi},on=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ba=Math.PI/180,tr=180/Math.PI;function us(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ht(i,t,e){return Math.max(t,Math.min(e,i))}function ah(i,t){return(i%t+t)%t}function Ta(i,t,e){return(1-e)*i+e*t}function mc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Eo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function oh(i,t){if(t.constructor===Float32Array)return i;let e=Eo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function lh(i,t){if(t.constructor===Float32Array)return i;let e=Eo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Po=class Po{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Po.prototype.isVector2=!0;var Zt=Po,ln=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],m=n[s+3],u=r[a+0],p=r[a+1],x=r[a+2],y=r[a+3];if(m!==y||c!==u||l!==p||h!==x){let f=c*u+l*p+h*x+m*y;f<0&&(u=-u,p=-p,x=-x,y=-y,f=-f);let d=1-o;if(f<.9995){let b=Math.acos(f),R=Math.sin(b);d=Math.sin(d*b)/R,o=Math.sin(o*b)/R,c=c*d+u*o,l=l*d+p*o,h=h*d+x*o,m=m*d+y*o}else{c=c*d+u*o,l=l*d+p*o,h=h*d+x*o,m=m*d+y*o;let b=1/Math.sqrt(c*c+l*l+h*h+m*m);c*=b,l*=b,h*=b,m*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],m=r[a],u=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+h*m+c*p-l*u,t[e+1]=c*x+h*u+l*m-o*p,t[e+2]=l*x+h*p+o*u-c*m,t[e+3]=h*x-o*m-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),m=o(r/2),u=c(n/2),p=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=u*h*m+l*p*x,this._y=l*p*m-u*h*x,this._z=l*h*x+u*p*m,this._w=l*h*m-u*p*x;break;case"YXZ":this._x=u*h*m+l*p*x,this._y=l*p*m-u*h*x,this._z=l*h*x-u*p*m,this._w=l*h*m+u*p*x;break;case"ZXY":this._x=u*h*m-l*p*x,this._y=l*p*m+u*h*x,this._z=l*h*x+u*p*m,this._w=l*h*m-u*p*x;break;case"ZYX":this._x=u*h*m-l*p*x,this._y=l*p*m+u*h*x,this._z=l*h*x-u*p*m,this._w=l*h*m+u*p*x;break;case"YZX":this._x=u*h*m+l*p*x,this._y=l*p*m+u*h*x,this._z=l*h*x-u*p*m,this._w=l*h*m-u*p*x;break;case"XZY":this._x=u*h*m-l*p*x,this._y=l*p*m-u*h*x,this._z=l*h*x+u*p*m,this._w=l*h*m+u*p*x;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],m=e[10],u=n+o+m;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>m){let p=2*Math.sqrt(1+n-o-m);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>m){let p=2*Math.sqrt(1+o-n-m);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+m-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Lo=class Lo{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(al.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+c*l+a*m-o*h,this.y=n+c*h+o*l-r*m,this.z=s+c*m+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lo.prototype.isVector3=!0;var B=Lo,Aa=new B,al=new ln,Do=class Do{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],m=n[7],u=n[2],p=n[5],x=n[8],y=s[0],f=s[3],d=s[6],b=s[1],R=s[4],T=s[7],w=s[2],A=s[5],g=s[8];return r[0]=a*y+o*b+c*w,r[3]=a*f+o*R+c*A,r[6]=a*d+o*T+c*g,r[1]=l*y+h*b+m*w,r[4]=l*f+h*R+m*A,r[7]=l*d+h*T+m*g,r[2]=u*y+p*b+x*w,r[5]=u*f+p*R+x*A,r[8]=u*d+p*T+x*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],m=h*a-o*l,u=o*c-h*r,p=l*r-a*c,x=e*m+n*u+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=m*y,t[1]=(s*l-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ea.makeScale(t,e)),this}rotate(t){return Bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ea.makeRotation(-t)),this}translate(t,e){return Bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Do.prototype.isMatrix3=!0;var Lt=Do,Ea=new Lt,ol=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ll=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ch(){let i={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===$t&&(s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$t&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wn?ki:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gi]:{primaries:t,whitePoint:n,transfer:ki,toXYZ:ol,fromXYZ:ll,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:$t,toXYZ:ol,fromXYZ:ll,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),i}var Vt=ch();function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var si,er=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{si===void 0&&(si=Hi("canvas")),si.width=t.width,si.height=t.height;let s=si.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=si}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Hi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mn(e[n]/255)*255):e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hh=0,yi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wa(s[a].image)):r.push(wa(s[a]))}else r=wa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function wa(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?er.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}var uh=0,Ra=new B,Ne=class i extends on{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=an,s=an,r=Ie,a=An,o=sn,c=He,l=i.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=us(),this.name="",this.source=new yi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ra).x}get height(){return this.source.getSize(Ra).y}get depth(){return this.source.getSize(Ra).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ks:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case Qs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ks:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case Qs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=uo;Ne.DEFAULT_ANISOTROPY=1;var No=class No{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],m=c[8],u=c[1],p=c[5],x=c[9],y=c[2],f=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(m-y)<.01&&Math.abs(x-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(m+y)<.1&&Math.abs(x+f)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(l+1)/2,T=(p+1)/2,w=(d+1)/2,A=(h+u)/4,g=(m+y)/4,S=(x+f)/4;return R>T&&R>w?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=A/n,r=g/n):T>w?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=A/s,r=S/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=g/r,s=S/r),this.set(n,s,r,e),this}let b=Math.sqrt((f-x)*(f-x)+(m-y)*(m-y)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(f-x)/b,this.y=(m-y)/b,this.z=(u-h)/b,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};No.prototype.isVector4=!0;var oe=No,nr=class extends on{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ne({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ie,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new yi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ke=class extends nr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Wi=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ir=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var wr=class wr{constructor(t,e,n,s,r,a,o,c,l,h,m,u,p,x,y,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,m,u,p,x,y,f)}set(t,e,n,s,r,a,o,c,l,h,m,u,p,x,y,f){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=m,d[14]=u,d[3]=p,d[7]=x,d[11]=y,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wr().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ri.setFromMatrixColumn(t,0).length(),r=1/ri.setFromMatrixColumn(t,1).length(),a=1/ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*m,x=o*h,y=o*m;e[0]=c*h,e[4]=-c*m,e[8]=l,e[1]=p+x*l,e[5]=u-y*l,e[9]=-o*c,e[2]=y-u*l,e[6]=x+p*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,p=c*m,x=l*h,y=l*m;e[0]=u+y*o,e[4]=x*o-p,e[8]=a*l,e[1]=a*m,e[5]=a*h,e[9]=-o,e[2]=p*o-x,e[6]=y+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,p=c*m,x=l*h,y=l*m;e[0]=u-y*o,e[4]=-a*m,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,p=a*m,x=o*h,y=o*m;e[0]=c*h,e[4]=x*l-p,e[8]=u*l+y,e[1]=c*m,e[5]=y*l+u,e[9]=p*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,p=a*l,x=o*c,y=o*l;e[0]=c*h,e[4]=y-u*m,e[8]=x*m+p,e[1]=m,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*m+x,e[10]=u-y*m}else if(t.order==="XZY"){let u=a*c,p=a*l,x=o*c,y=o*l;e[0]=c*h,e[4]=-m,e[8]=l*h,e[1]=u*m+y,e[5]=a*h,e[9]=p*m-x,e[2]=x*m-p,e[6]=o*h,e[10]=y*m+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dh,t,fh)}lookAt(t,e,n){let s=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),In.crossVectors(n,Be),In.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),In.crossVectors(n,Be)),In.normalize(),xs.crossVectors(Be,In),s[0]=In.x,s[4]=xs.x,s[8]=Be.x,s[1]=In.y,s[5]=xs.y,s[9]=Be.y,s[2]=In.z,s[6]=xs.z,s[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],m=n[5],u=n[9],p=n[13],x=n[2],y=n[6],f=n[10],d=n[14],b=n[3],R=n[7],T=n[11],w=n[15],A=s[0],g=s[4],S=s[8],O=s[12],P=s[1],D=s[5],G=s[9],X=s[13],I=s[2],V=s[6],Y=s[10],k=s[14],tt=s[3],H=s[7],Q=s[11],j=s[15];return r[0]=a*A+o*P+c*I+l*tt,r[4]=a*g+o*D+c*V+l*H,r[8]=a*S+o*G+c*Y+l*Q,r[12]=a*O+o*X+c*k+l*j,r[1]=h*A+m*P+u*I+p*tt,r[5]=h*g+m*D+u*V+p*H,r[9]=h*S+m*G+u*Y+p*Q,r[13]=h*O+m*X+u*k+p*j,r[2]=x*A+y*P+f*I+d*tt,r[6]=x*g+y*D+f*V+d*H,r[10]=x*S+y*G+f*Y+d*Q,r[14]=x*O+y*X+f*k+d*j,r[3]=b*A+R*P+T*I+w*tt,r[7]=b*g+R*D+T*V+w*H,r[11]=b*S+R*G+T*Y+w*Q,r[15]=b*O+R*X+T*k+w*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],m=t[6],u=t[10],p=t[14],x=t[3],y=t[7],f=t[11],d=t[15],b=c*p-l*u,R=o*p-l*m,T=o*u-c*m,w=a*p-l*h,A=a*u-c*h,g=a*m-o*h;return e*(y*b-f*R+d*T)-n*(x*b-f*w+d*A)+s*(x*R-y*w+d*g)-r*(x*T-y*A+f*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],m=t[9],u=t[10],p=t[11],x=t[12],y=t[13],f=t[14],d=t[15],b=e*o-n*a,R=e*c-s*a,T=e*l-r*a,w=n*c-s*o,A=n*l-r*o,g=s*l-r*c,S=h*y-m*x,O=h*f-u*x,P=h*d-p*x,D=m*f-u*y,G=m*d-p*y,X=u*d-p*f,I=b*X-R*G+T*D+w*P-A*O+g*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/I;return t[0]=(o*X-c*G+l*D)*V,t[1]=(s*G-n*X-r*D)*V,t[2]=(y*g-f*A+d*w)*V,t[3]=(u*A-m*g-p*w)*V,t[4]=(c*P-a*X-l*O)*V,t[5]=(e*X-s*P+r*O)*V,t[6]=(f*T-x*g-d*R)*V,t[7]=(h*g-u*T+p*R)*V,t[8]=(a*G-o*P+l*S)*V,t[9]=(n*P-e*G-r*S)*V,t[10]=(x*A-y*T+d*b)*V,t[11]=(m*T-h*A-p*b)*V,t[12]=(o*O-a*D-c*S)*V,t[13]=(e*D-n*O+s*S)*V,t[14]=(y*R-x*w-f*b)*V,t[15]=(h*w-m*R+u*b)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,m=o+o,u=r*l,p=r*h,x=r*m,y=a*h,f=a*m,d=o*m,b=c*l,R=c*h,T=c*m,w=n.x,A=n.y,g=n.z;return s[0]=(1-(y+d))*w,s[1]=(p+T)*w,s[2]=(x-R)*w,s[3]=0,s[4]=(p-T)*A,s[5]=(1-(u+d))*A,s[6]=(f+b)*A,s[7]=0,s[8]=(x+R)*g,s[9]=(f-b)*g,s[10]=(1-(u+y))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ri.set(s[0],s[1],s[2]).length(),o=ri.set(s[4],s[5],s[6]).length(),c=ri.set(s[8],s[9],s[10]).length();r<0&&(a=-a),$e.copy(this);let l=1/a,h=1/o,m=1/c;return $e.elements[0]*=l,$e.elements[1]*=l,$e.elements[2]*=l,$e.elements[4]*=h,$e.elements[5]*=h,$e.elements[6]*=h,$e.elements[8]*=m,$e.elements[9]*=m,$e.elements[10]*=m,e.setFromRotationMatrix($e),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Ze,c=!1){let l=this.elements,h=2*r/(e-t),m=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),x,y;if(c)x=r/(a-r),y=a*r/(a-r);else if(o===Ze)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Vi)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=m,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ze,c=!1){let l=this.elements,h=2/(e-t),m=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),x,y;if(c)x=1/(a-r),y=a/(a-r);else if(o===Ze)x=-2/(a-r),y=-(a+r)/(a-r);else if(o===Vi)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=m,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};wr.prototype.isMatrix4=!0;var se=wr,ri=new B,$e=new se,dh=new B(0,0,0),fh=new B(1,1,1),In=new B,xs=new B,Be=new B,cl=new se,hl=new ln,Fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],m=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ht(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hl.setFromEuler(this),this.setFromQuaternion(hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var Xi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ph=0,ul=new B,ai=new ln,mn=new se,vs=new B,Di=new B,mh=new B,gh=new ln,dl=new B(1,0,0),fl=new B(0,1,0),pl=new B(0,0,1),ml={type:"added"},_h={type:"removed"},oi={type:"childadded",child:null},Ca={type:"childremoved",child:null},Ue=class i extends on{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new Fn,n=new ln,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Lt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.multiply(ai),this}rotateOnWorldAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.premultiply(ai),this}rotateX(t){return this.rotateOnAxis(dl,t)}rotateY(t){return this.rotateOnAxis(fl,t)}rotateZ(t){return this.rotateOnAxis(pl,t)}translateOnAxis(t,e){return ul.copy(t).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dl,t)}translateY(t){return this.translateOnAxis(fl,t)}translateZ(t){return this.translateOnAxis(pl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vs.copy(t):vs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Di,vs,this.up):mn.lookAt(vs,Di,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),ai.setFromRotationMatrix(mn),this.quaternion.premultiply(ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ml),oi.child=t,this.dispatchEvent(oi),oi.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_h),Ca.child=t,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ml),oi.child=t,this.dispatchEvent(oi),oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,t,mh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,gh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let m=c[l];r(t.shapes,m)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),m=a(t.shapes),u=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ue.DEFAULT_UP=new B(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},xh={type:"move"},Mi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let f=e.getJointPose(y,n),d=this._getHandJoint(l,y);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],u=h.position.distanceTo(m.position),p=.02,x=.005;l.inputState.pinching&&u>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new yn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Ia(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Vt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Vt.workingColorSpace){if(t=ah(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ia(a,r,t+1/3),this.g=Ia(a,r,t),this.b=Ia(a,r,t-1/3)}return Vt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let n=gc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return Vt.workingToColorSpace(Ae.copy(this),t),Math.round(Ht(Ae.r*255,0,255))*65536+Math.round(Ht(Ae.g*255,0,255))*256+Math.round(Ht(Ae.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.workingToColorSpace(Ae.copy(this),e);let n=Ae.r,s=Ae.g,r=Ae.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let m=a-o;switch(l=h<=.5?m/(a+o):m/(2-a-o),a){case n:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-n)/m+2;break;case r:c=(n-s)/m+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Vt.workingColorSpace){return Vt.workingToColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Ge){Vt.workingToColorSpace(Ae.copy(this),t);let e=Ae.r,n=Ae.g,s=Ae.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(ys);let n=Ta(Pn.h,ys.h,e),s=Ta(Pn.s,ys.s,e),r=Ta(Pn.l,ys.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ae=new Wt;Wt.NAMES=gc;var qi=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ke=new B,gn=new B,Pa=new B,_n=new B,li=new B,ci=new B,gl=new B,La=new B,Da=new B,Na=new B,Ua=new oe,Fa=new oe,Oa=new oe,Un=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),gn.subVectors(n,e),Pa.subVectors(t,e);let a=Ke.dot(Ke),o=Ke.dot(gn),c=Ke.dot(Pa),l=gn.dot(gn),h=gn.dot(Pa),m=a*l-o*o;if(m===0)return r.set(0,0,0),null;let u=1/m,p=(l*c-o*h)*u,x=(a*h-o*c)*u;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,_n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_n.x),c.addScaledVector(a,_n.y),c.addScaledVector(o,_n.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ua.setScalar(0),Fa.setScalar(0),Oa.setScalar(0),Ua.fromBufferAttribute(t,e),Fa.fromBufferAttribute(t,n),Oa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ua,r.x),a.addScaledVector(Fa,r.y),a.addScaledVector(Oa,r.z),a}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),gn.subVectors(t,e),Ke.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Ke.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;li.subVectors(s,n),ci.subVectors(r,n),La.subVectors(t,n);let c=li.dot(La),l=ci.dot(La);if(c<=0&&l<=0)return e.copy(n);Da.subVectors(t,s);let h=li.dot(Da),m=ci.dot(Da);if(h>=0&&m<=h)return e.copy(s);let u=c*m-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(li,a);Na.subVectors(t,r);let p=li.dot(Na),x=ci.dot(Na);if(x>=0&&p<=x)return e.copy(r);let y=p*l-c*x;if(y<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(n).addScaledVector(ci,o);let f=h*x-p*m;if(f<=0&&m-h>=0&&p-x>=0)return gl.subVectors(r,s),o=(m-h)/(m-h+(p-x)),e.copy(s).addScaledVector(gl,o);let d=1/(f+y+u);return a=y*d,o=u*d,e.copy(n).addScaledVector(li,a).addScaledVector(ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},On=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(r,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ni),Ss.subVectors(this.max,Ni),hi.subVectors(t.a,Ni),ui.subVectors(t.b,Ni),di.subVectors(t.c,Ni),Ln.subVectors(ui,hi),Dn.subVectors(di,ui),Yn.subVectors(hi,di);let e=[0,-Ln.z,Ln.y,0,-Dn.z,Dn.y,0,-Yn.z,Yn.y,Ln.z,0,-Ln.x,Dn.z,0,-Dn.x,Yn.z,0,-Yn.x,-Ln.y,Ln.x,0,-Dn.y,Dn.x,0,-Yn.y,Yn.x,0];return!Ba(e,hi,ui,di,Ss)||(e=[1,0,0,0,1,0,0,0,1],!Ba(e,hi,ui,di,Ss))?!1:(bs.crossVectors(Ln,Dn),e=[bs.x,bs.y,bs.z],Ba(e,hi,ui,di,Ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xn=[new B,new B,new B,new B,new B,new B,new B,new B],Qe=new B,Ms=new On,hi=new B,ui=new B,di=new B,Ln=new B,Dn=new B,Yn=new B,Ni=new B,Ss=new B,bs=new B,Zn=new B;function Ba(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zn.fromArray(i,r);let o=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),c=t.dot(Zn),l=e.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var de=new B,Ts=new Zt,vh=0,Me=class extends on{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=en,this.version=0,this._normalizationScale=t!==void 0?Eo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ts.fromBufferAttribute(this,e),Ts.applyMatrix3(t),this.setXY(e,Ts.x,Ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):oh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):lh(t,this.array)}};var Yi=class extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Zi=class extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var De=class extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}},yh=new On,Ui=new B,za=new B,Bn=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):yh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ui.subVectors(t,this.center);let e=Ui.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ui,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ui.copy(t.center).add(za)),this.expandByPoint(Ui.copy(t.center).sub(za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mh=0,Ye=new se,Ga=new Ue,fi=new B,ze=new On,Fi=new On,xe=new B,Fe=class i extends on{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sh(t)?Zi:Yi)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Ga.lookAt(t),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new De(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Fi.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(ze.min,Fi.min),ze.expandByPoint(xe),xe.addVectors(ze.max,Fi.max),ze.expandByPoint(xe)):(ze.expandByPoint(Fi.min),ze.expandByPoint(Fi.max))}ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)xe.fromBufferAttribute(o,l),c&&(fi.fromBufferAttribute(t,l),xe.add(fi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Me(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let O=0;O<n.count;O++)o[O]=new B,c[O]=new B;let h=new B,m=new B,u=new B,p=new Zt,x=new Zt,y=new Zt,f=new B,d=new B;function b(O,P,D){l[O]=l[P]=l[D]=1,h.fromBufferAttribute(n,O),m.fromBufferAttribute(n,P),u.fromBufferAttribute(n,D),p.fromBufferAttribute(r,O),x.fromBufferAttribute(r,P),y.fromBufferAttribute(r,D),m.sub(h),u.sub(h),x.sub(p),y.sub(p);let G=1/(x.x*y.y-y.x*x.y);isFinite(G)&&(f.copy(m).multiplyScalar(y.y).addScaledVector(u,-x.y).multiplyScalar(G),d.copy(u).multiplyScalar(x.x).addScaledVector(m,-y.x).multiplyScalar(G),o[O].add(f),o[P].add(f),o[D].add(f),c[O].add(d),c[P].add(d),c[D].add(d))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let O=0,P=R.length;O<P;++O){let D=R[O],G=D.start,X=D.count;for(let I=G,V=G+X;I<V;I+=3)b(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let T=new B,w=new B,A=new B,g=new B;function S(O){A.fromBufferAttribute(s,O),g.copy(A);let P=o[O];T.copy(P),T.sub(A.multiplyScalar(A.dot(P))).normalize(),w.crossVectors(g,P);let G=w.dot(c[O])<0?-1:1;a.setXYZW(O,T.x,T.y,T.z,G)}for(let O=0,P=n.count;O<P;++O)l[O]&&S(O);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new B,r=new B,a=new B,o=new B,c=new B,l=new B,h=new B,m=new B;if(t)for(let u=0,p=t.count;u<p;u+=3){let x=t.getX(u+0),y=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,f),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,m=o.normalized,u=new l.constructor(c.length*h),p=0,x=0;for(let y=0,f=c.length;y<f;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*h;for(let d=0;d<h;d++)u[x++]=l[p++]}return new Me(u,h,m)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,m=l.length;h<m;h++){let u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let m=0,u=l.length;m<u;m++){let p=l[m];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],m=r[l];for(let u=0,p=m.length;u<p;u++)h.push(m[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ka=new B,Sh=new B,bh=new Lt,je=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ka.subVectors(n,e).cross(Sh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ka),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bh.getNormalMatrix(t),s=this.coplanarPoint(ka).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Th=0,bn=class extends on{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=us(),this.name="",this.type="Material",this.blending=wi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=no,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new je().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Zt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vn=new B,Va=new B,As=new B,Es=new B,Si=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Va.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),Es.copy(this.origin).sub(Va);let r=t.distanceTo(e)*.5,a=-this.direction.dot(As),o=Es.dot(this.direction),c=-Es.dot(As),l=Es.lengthSq(),h=Math.abs(1-a*a),m,u,p,x;if(h>0)if(m=a*c-o,u=a*o-c,x=r*h,m>=0)if(u>=-x)if(u<=x){let y=1/h;m*=y,u*=y,p=m*(m+a*u+2*o)+u*(a*m+u+2*c)+l}else u=r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*c)+l;else u=-r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*c)+l;else u<=-x?(m=Math.max(0,-(-a*r+o)),u=m>0?-r:Math.min(Math.max(-r,-c),r),p=-m*m+u*(u+2*c)+l):u<=x?(m=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(m=Math.max(0,-(a*r+o)),u=m>0?r:Math.min(Math.max(-r,-c),r),p=-m*m+u*(u+2*c)+l);else u=a>0?-r:r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Va).addScaledVector(As,u),p}intersectSphere(t,e){if(t.radius<0)return null;vn.subVectors(t.center,this.origin);let n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-u.z)*m,c=(t.max.z-u.z)*m):(o=(t.max.z-u.z)*m,c=(t.min.z-u.z)*m),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,m=t.x-a.x,u=t.y-a.y,p=t.z-a.z,x=e.x-a.x,y=e.y-a.y,f=e.z-a.z,d=n.x-a.x,b=n.y-a.y,R=n.z-a.z,T=Math.abs(c),w=Math.abs(l),A=Math.abs(h),g,S,O,P,D,G,X,I,V,Y,k,tt;if(T>=w&&T>=A?(O=c,G=m,V=x,tt=d,c>=0?(g=l,S=h,P=u,D=p,X=y,I=f,Y=b,k=R):(g=h,S=l,P=p,D=u,X=f,I=y,Y=R,k=b)):w>=A?(O=l,G=u,V=y,tt=b,l>=0?(g=h,S=c,P=p,D=m,X=f,I=x,Y=R,k=d):(g=c,S=h,P=m,D=p,X=x,I=f,Y=d,k=R)):(O=h,G=p,V=f,tt=R,h>=0?(g=c,S=l,P=m,D=u,X=x,I=y,Y=d,k=b):(g=l,S=c,P=u,D=m,X=y,I=x,Y=b,k=d)),O===0)return null;let H=g/O,Q=S/O,j=1/O,vt=P-H*G,It=D-Q*G,Z=X-H*V,dt=I-Q*V,xt=Y-H*tt,Et=k-Q*tt,ft=xt*dt-Et*Z,gt=vt*Et-It*xt,Ut=Z*It-dt*vt;if(s){if(ft<0||gt<0||Ut<0)return null}else if((ft<0||gt<0||Ut<0)&&(ft>0||gt>0||Ut>0))return null;let Mt=ft+gt+Ut;if(Mt===0)return null;let qt=j*(ft*G+gt*V+Ut*tt);return(Mt>0?qt<0:qt>0)?null:this.at(qt/Mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sr=class extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},_l=new se,Jn=new Si,ws=new Bn,xl=new B,Rs=new B,Cs=new B,Is=new B,Ha=new B,Ps=new B,vl=new B,Ls=new B,cn=class extends Ue{constructor(t=new Fe,e=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ps.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],m=r[c];h!==0&&(Ha.fromBufferAttribute(m,t),a?Ps.addScaledVector(Ha,h):Ps.addScaledVector(Ha.sub(e),h))}e.add(Ps)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(ws.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(ws,xl)===null||Jn.origin.distanceToSquared(xl)>(t.far-t.near)**2))&&(_l.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(_l),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=u.length;x<y;x++){let f=u[x],d=a[f.materialIndex],b=Math.max(f.start,p.start),R=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let T=b,w=R;T<w;T+=3){let A=o.getX(T),g=o.getX(T+1),S=o.getX(T+2);s=Ds(this,d,t,n,l,h,m,A,g,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let f=x,d=y;f<d;f+=3){let b=o.getX(f),R=o.getX(f+1),T=o.getX(f+2);s=Ds(this,a,t,n,l,h,m,b,R,T),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=u.length;x<y;x++){let f=u[x],d=a[f.materialIndex],b=Math.max(f.start,p.start),R=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let T=b,w=R;T<w;T+=3){let A=T,g=T+1,S=T+2;s=Ds(this,d,t,n,l,h,m,A,g,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let f=x,d=y;f<d;f+=3){let b=f,R=f+1,T=f+2;s=Ds(this,a,t,n,l,h,m,b,R,T),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function Ah(i,t,e,n,s,r,a,o){let c;if(t.side===Pe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Vn,o),c===null)return null;Ls.copy(o),Ls.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ls);return l<e.near||l>e.far?null:{distance:l,point:Ls.clone(),object:i}}function Ds(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Rs),i.getVertexPosition(c,Cs),i.getVertexPosition(l,Is);let h=Ah(i,t,e,n,Rs,Cs,Is,vl);if(h){let m=new B;Un.getBarycoord(vl,Rs,Cs,Is,m),s&&(h.uv=Un.getInterpolatedAttribute(s,o,c,l,m,new Zt)),r&&(h.uv1=Un.getInterpolatedAttribute(r,o,c,l,m,new Zt)),a&&(h.normal=Un.getInterpolatedAttribute(a,o,c,l,m,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new B,materialIndex:0};Un.getNormal(Rs,Cs,Is,u.normal),h.face=u,h.barycoord=m}return h}var rr=class extends Ne{constructor(t=null,e=1,n=1,s,r,a,o,c,l=ve,h=ve,m,u){super(null,a,o,c,l,h,s,r,m,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=new Bn,Eh=new Zt(.5,.5),Ns=new B,Kn=class{constructor(t=new je,e=new je,n=new je,s=new je,r=new je,a=new je){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ze,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],m=r[5],u=r[6],p=r[7],x=r[8],y=r[9],f=r[10],d=r[11],b=r[12],R=r[13],T=r[14],w=r[15];if(s[0].setComponents(l-a,p-h,d-x,w-b).normalize(),s[1].setComponents(l+a,p+h,d+x,w+b).normalize(),s[2].setComponents(l+o,p+m,d+y,w+R).normalize(),s[3].setComponents(l-o,p-m,d-y,w-R).normalize(),n)s[4].setComponents(c,u,f,T).normalize(),s[5].setComponents(l-c,p-u,d-f,w-T).normalize();else if(s[4].setComponents(l-c,p-u,d-f,w-T).normalize(),e===Ze)s[5].setComponents(l+c,p+u,d+f,w+T).normalize();else if(e===Vi)s[5].setComponents(c,u,f,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){$n.center.set(0,0,0);let e=Eh.distanceTo(t.center);return $n.radius=.7071067811865476+e,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ns.x=s.normal.x>0?t.max.x:t.min.x,Ns.y=s.normal.y>0?t.max.y:t.min.y,Ns.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yl=new se,ar=class i{constructor(){this.coordinateSystem=Ze,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];yl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Kn),n[s].setFromProjectionMatrix(yl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Kn),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var or=class extends bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},lr=new B,cr=new B,Ml=new se,Oi=new Si,Us=new Bn,Wa=new B,Sl=new B,hr=class extends Ue{constructor(t=new Fe,e=new or){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)lr.fromBufferAttribute(e,s-1),cr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=lr.distanceTo(cr);t.setAttribute("lineDistance",new De(n,1))}else Ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(s),Us.radius+=r,t.ray.intersectsSphere(Us)===!1)return;Ml.copy(s).invert(),Oi.copy(t.ray).applyMatrix4(Ml);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let y=p,f=x-1;y<f;y+=l){let d=h.getX(y),b=h.getX(y+1),R=Fs(this,t,Oi,c,d,b,y);R&&e.push(R)}if(this.isLineLoop){let y=h.getX(x-1),f=h.getX(p),d=Fs(this,t,Oi,c,y,f,x-1);d&&e.push(d)}}else{let p=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let y=p,f=x-1;y<f;y+=l){let d=Fs(this,t,Oi,c,y,y+1,y);d&&e.push(d)}if(this.isLineLoop){let y=Fs(this,t,Oi,c,x-1,p,x-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Fs(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(lr.fromBufferAttribute(o,s),cr.fromBufferAttribute(o,r),e.distanceSqToSegment(lr,cr,Wa,Sl)>n)return;Wa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Wa);if(!(l<t.near||l>t.far))return{distance:l,point:Sl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var bl=new B,Tl=new B,Ji=class extends hr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)bl.fromBufferAttribute(e,s),Tl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bl.distanceTo(Tl);t.setAttribute("lineDistance",new De(n,1))}else Ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ur=class extends bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Al=new se,Ja=new Si,Os=new Bn,Bs=new B,bi=class extends Ue{constructor(t=new Fe,e=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(s),Os.radius+=r,t.ray.intersectsSphere(Os)===!1)return;Al.copy(s).invert(),Ja.copy(t.ray).applyMatrix4(Al);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,m=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let x=u,y=p;x<y;x++){let f=l.getX(x);Bs.fromBufferAttribute(m,f),El(Bs,f,c,s,t,e,this)}}else{let u=Math.max(0,a.start),p=Math.min(m.count,a.start+a.count);for(let x=u,y=p;x<y;x++)Bs.fromBufferAttribute(m,x),El(Bs,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function El(i,t,e,n,s,r,a){let o=Ja.distanceSqToPoint(i);if(o<e){let c=new B;Ja.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var $i=class extends Ne{constructor(t=[],e=ti,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Tn=class extends Ne{constructor(t,e,n=tn,s,r,a,o=ve,c=ve,l,h=Sn,m=1){if(h!==Sn&&h!==En)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:m};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ki=class extends Tn{constructor(t,e=tn,n=ti,s,r,a=ve,o=ve,c,l=Sn){let h={width:t,height:t,depth:1},m=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Qi=class extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ti=class i extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],m=[],u=0,p=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(m,2));function x(y,f,d,b,R,T,w,A,g,S,O){let P=T/g,D=w/S,G=T/2,X=w/2,I=A/2,V=g+1,Y=S+1,k=0,tt=0,H=new B;for(let Q=0;Q<Y;Q++){let j=Q*D-X;for(let vt=0;vt<V;vt++){let It=vt*P-G;H[y]=It*b,H[f]=j*R,H[d]=I,l.push(H.x,H.y,H.z),H[y]=0,H[f]=0,H[d]=A>0?1:-1,h.push(H.x,H.y,H.z),m.push(vt/g),m.push(1-Q/S),k+=1}}for(let Q=0;Q<S;Q++)for(let j=0;j<g;j++){let vt=u+j+V*Q,It=u+j+V*(Q+1),Z=u+(j+1)+V*(Q+1),dt=u+(j+1)+V*Q;c.push(vt,It,dt),c.push(It,Z,dt),tt+=6}o.addGroup(p,tt,O),p+=tt,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ji=class i extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,m=t/o,u=e/c,p=[],x=[],y=[],f=[];for(let d=0;d<h;d++){let b=d*u-a;for(let R=0;R<l;R++){let T=R*m-r;x.push(T,-b,0),y.push(0,0,1),f.push(R/o),f.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<o;b++){let R=b+l*d,T=b+l*(d+1),w=b+1+l*(d+1),A=b+1+l*d;p.push(R,T,A),p.push(T,w,A)}this.setIndex(p),this.setAttribute("position",new De(x,3)),this.setAttribute("normal",new De(y,3)),this.setAttribute("uv",new De(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function ni(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(wl(s))s.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(wl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ee(i){let t={};for(let e=0;e<i.length;e++){let n=ni(i[e]);for(let s in n)t[s]=n[s]}return t}function wl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wo(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}var _c={clone:ni,merge:Ee},Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oe=class extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ni(t.uniforms),this.uniformsGroups=wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Wt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Zt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new oe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new se().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},dr=class extends Oe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var fr=class extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pr=class extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function pi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function zs(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var zn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},mr=class extends zn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qa,endingEnd:qa}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ya:r=t,o=2*e-n;break;case Za:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ya:a=t,c=2*n-e;break;case Za:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,m=this._offsetNext,u=this._weightPrev,p=this._weightNext,x=(n-e)/(s-e),y=x*x,f=y*x,d=-u*f+2*u*y-u*x,b=(1+u)*f+(-1.5-2*u)*y+(-.5+u)*x+1,R=(-1-p)*f+(1.5+p)*y+.5*x,T=p*f-p*y;for(let w=0;w!==o;++w)r[w]=d*a[h+w]+b*a[l+w]+R*a[c+w]+T*a[m+w];return r}},gr=class extends zn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),m=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*m+a[c+u]*h;return r}},_r=class extends zn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xr=class extends zn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,m=this.outTangents;if(!h||!m){let x=(n-e)/(s-e),y=1-x;for(let f=0;f!==o;++f)r[f]=a[l+f]*y+a[c+f]*x;return r}let u=o*2,p=t-1;for(let x=0;x!==o;++x){let y=a[l+x],f=a[c+x],d=p*u+x*2,b=m[d],R=m[d+1],T=t*u+x*2,w=h[T],A=h[T+1],g=Ph(n,e,b,w,s);r[x]=xc(g,y,R,A,f)}return r}};function xc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Ih(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ph(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=xc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Ih(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Ve=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pi(e,this.TimeBufferType),this.values=pi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:pi(t.times,Array),values:pi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),zs(t.settings)&&(n.settings={inTangents:pi(t.settings.inTangents,Array),outTangents:pi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _r(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new mr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case zi:e=this.InterpolantFactoryMethodDiscrete;break;case js:e=this.InterpolantFactoryMethodLinear;break;case Vs:e=this.InterpolantFactoryMethodSmooth;break;case Xa:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ct("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zi;case this.InterpolantFactoryMethodLinear:return js;case this.InterpolantFactoryMethodSmooth:return Vs;case this.InterpolantFactoryMethodBezier:return Xa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;zs(this.settings)&&(Rl(this.settings.inTangents,t),Rl(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;zs(this.settings)&&(Cl(this.settings.inTangents,t),Cl(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Pt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Pt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&rh(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Pt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vs,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let m=o*n,u=m-n,p=m+n;for(let x=0;x!==n;++x){let y=e[m+x];if(y!==e[u+x]||y!==e[p+x]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let m=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[m+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,zs(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Cl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ve.prototype.ValueTypeName="";Ve.prototype.TimeBufferType=Float32Array;Ve.prototype.ValueBufferType=Float32Array;Ve.prototype.DefaultInterpolation=js;var Gn=class extends Ve{constructor(t,e,n){super(t,e,n)}};Gn.prototype.ValueTypeName="bool";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=zi;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var vr=class extends Ve{constructor(t,e,n,s){super(t,e,n,s)}};vr.prototype.ValueTypeName="color";var yr=class extends Ve{constructor(t,e,n,s){super(t,e,n,s)}};yr.prototype.ValueTypeName="number";var Mr=class extends zn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)ln.slerpFlat(r,0,a,l-o,a,l,c);return r}},ts=class extends Ve{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Mr(this.times,this.values,this.getValueSize(),t)}};ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;var kn=class extends Ve{constructor(t,e,n){super(t,e,n)}};kn.prototype.ValueTypeName="string";kn.prototype.ValueBufferType=Array;kn.prototype.DefaultInterpolation=zi;kn.prototype.InterpolantFactoryMethodLinear=void 0;kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Sr=class extends Ve{constructor(t,e,n,s){super(t,e,n,s)}};Sr.prototype.ValueTypeName="vector";var br=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,m){return l.push(h,m),this},this.removeHandler=function(h){let m=l.indexOf(h);return m!==-1&&l.splice(m,2),this},this.getHandler=function(h){for(let m=0,u=l.length;m<u;m+=2){let p=l[m],x=l[m+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vc=new br,Tr=class{constructor(t){this.manager=t!==void 0?t:vc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Tr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gs=new B,ks=new ln,rn=new B,es=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Ze,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Gs,ks,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gs,ks,rn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Gs,ks,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gs,ks,rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Nn=new B,Il=new Zt,Pl=new Zt,Ce=class extends es{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Il,Pl),e.subVectors(Pl,Il)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ba*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ar=class extends es{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var mi=-90,gi=1,Ai=class extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ce(mi,gi,t,e);s.layers=this.layers,this.add(s);let r=new Ce(mi,gi,t,e);r.layers=this.layers,this.add(r);let a=new Ce(mi,gi,t,e);a.layers=this.layers,this.add(a);let o=new Ce(mi,gi,t,e);o.layers=this.layers,this.add(o);let c=new Ce(mi,gi,t,e);c.layers=this.layers,this.add(c);let l=new Ce(mi,gi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Ze)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Vi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,m=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=y,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(m,u,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Er=class extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Ro="\\[\\]\\.:\\/",Lh=new RegExp("["+Ro+"]","g"),Co="[^"+Ro+"]",Dh="[^"+Ro.replace("\\.","")+"]",Nh=/((?:WC+[\/:])*)/.source.replace("WC",Co),Uh=/(WCOD+)?/.source.replace("WCOD",Dh),Fh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Co),Oh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Co),Bh=new RegExp("^"+Nh+Uh+Fh+Oh+"$"),zh=["material","materials","bones","map"],$a=class{constructor(t,e,n){let s=n||ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lh,"")}static parseTrackName(t){let e=Bh.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);zh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ee.Composite=$a;ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ee.prototype.GetterByBindingType=[ee.prototype._getValue_direct,ee.prototype._getValue_array,ee.prototype._getValue_arrayElement,ee.prototype._getValue_toArray];ee.prototype.SetterByBindingTypeAndVersioning=[[ee.prototype._setValue_direct,ee.prototype._setValue_direct_setNeedsUpdate,ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_array,ee.prototype._setValue_array_setNeedsUpdate,ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_arrayElement,ee.prototype._setValue_arrayElement_setNeedsUpdate,ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_fromArray,ee.prototype._setValue_fromArray_setNeedsUpdate,ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var D1=new Float32Array(1);var Uo=class Uo{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Uo.prototype.isMatrix2=!0;var Ka=Uo;function Io(i,t,e,n){let s=Gh(n);switch(e){case _o:return i*t;case vo:return i*t/s.components*s.byteLength;case Nr:return i*t/s.components*s.byteLength;case Hn:return i*t*2/s.components*s.byteLength;case Ur:return i*t*2/s.components*s.byteLength;case xo:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case Fr:return i*t*4/s.components*s.byteLength;case rs:case as:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case os:case ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Br:case Gr:return Math.max(i,16)*Math.max(t,8)/4;case Or:case zr:return Math.max(i,8)*Math.max(t,8)/2;case kr:case Vr:case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:case cs:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $r:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case jr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oa:case la:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ha:case ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case hs:case da:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gh(i){switch(i){case He:case fo:return{byteLength:1,components:1};case Ci:case po:case nn:return{byteLength:2,components:1};case Lr:case Dr:return{byteLength:2,components:4};case tn:case Pr:case en:return{byteLength:4,components:1};case mo:case go:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function kc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vh(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,m=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,c,l){let h=c.array,m=c.updateRanges;if(i.bindBuffer(l,o),m.length===0)i.bufferSubData(l,0,h);else{m.sort((p,x)=>p.start-x.start);let u=0;for(let p=1;p<m.length;p++){let x=m[u],y=m[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++u,m[u]=y)}m.length=u+1;for(let p=0,x=m.length;p<x;p++){let y=m[p];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Hh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wh=`#ifdef USE_ALPHAHASH
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
#endif`,Xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jh=`#ifdef USE_AOMAP
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
#endif`,$h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kh=`#ifdef USE_BATCHING
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
#endif`,Qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nu=`#ifdef USE_IRIDESCENCE
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
#endif`,iu=`#ifdef USE_BUMPMAP
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
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,du=`#define PI 3.141592653589793
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
} // validated`,fu=`vec3 transformedNormal = objectNormal;
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
#endif`,pu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",vu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yu=`#ifdef USE_ENVMAP
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
#endif`,Mu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Su=`#ifdef USE_ENVMAP
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
#endif`,bu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
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
#endif`,Au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cu=`#ifdef USE_GRADIENTMAP
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
}`,Iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Du=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Nu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
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
				#ifdef ENVMAP_TYPE_PMREM
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
#endif`,Uu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
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
#endif`,Gu=`uniform sampler2D dfgLUT;
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,ku=`
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
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
#endif`,Hu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wu=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,Xu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ju=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$u=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qu=`#if defined( USE_POINTS_UV )
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
#endif`,ju=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nd=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sd=`#ifdef USE_MORPHTARGETS
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
#endif`,rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,od=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ud=`#ifdef USE_NORMALMAP
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
#endif`,dd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_d=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ed=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wd=`float getShadowMask() {
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
}`,Rd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cd=`#ifdef USE_SKINNING
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
#endif`,Id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pd=`#ifdef USE_SKINNING
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
#endif`,Ld=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ud=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fd=`#ifdef USE_TRANSMISSION
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
#endif`,Od=`#ifdef USE_TRANSMISSION
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
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hd=`uniform sampler2D t2D;
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
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`#include <common>
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
}`,Jd=`#if DEPTH_PACKING == 3200
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
}`,$d=`#define DISTANCE
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
}`,Kd=`#define DISTANCE
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
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tf=`uniform float scale;
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
}`,ef=`uniform vec3 diffuse;
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
}`,nf=`#include <common>
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
}`,sf=`uniform vec3 diffuse;
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
}`,rf=`#define LAMBERT
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
}`,af=`#define LAMBERT
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
}`,of=`#define MATCAP
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
}`,lf=`#define MATCAP
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
}`,cf=`#define NORMAL
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
}`,hf=`#define NORMAL
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
}`,uf=`#define PHONG
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
}`,df=`#define PHONG
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
}`,ff=`#define STANDARD
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
}`,pf=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
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
}`,mf=`#define TOON
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
}`,gf=`#define TOON
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
}`,_f=`uniform float size;
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
}`,xf=`uniform vec3 diffuse;
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
}`,vf=`#include <common>
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
}`,yf=`uniform vec3 color;
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
}`,Mf=`uniform float rotation;
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
}`,Sf=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Hh,alphahash_pars_fragment:Wh,alphamap_fragment:Xh,alphamap_pars_fragment:qh,alphatest_fragment:Yh,alphatest_pars_fragment:Zh,aomap_fragment:Jh,aomap_pars_fragment:$h,batching_pars_vertex:Kh,batching_vertex:Qh,begin_vertex:jh,beginnormal_vertex:tu,bsdfs:eu,iridescence_fragment:nu,bumpmap_pars_fragment:iu,clipping_planes_fragment:su,clipping_planes_pars_fragment:ru,clipping_planes_pars_vertex:au,clipping_planes_vertex:ou,color_fragment:lu,color_pars_fragment:cu,color_pars_vertex:hu,color_vertex:uu,common:du,defaultnormal_vertex:fu,displacementmap_pars_vertex:pu,displacementmap_vertex:mu,emissivemap_fragment:gu,emissivemap_pars_fragment:_u,colorspace_fragment:xu,colorspace_pars_fragment:vu,envmap_fragment:yu,envmap_common_pars_fragment:Mu,envmap_pars_fragment:Su,envmap_pars_vertex:bu,envmap_physical_pars_fragment:Nu,envmap_vertex:Tu,fog_vertex:Au,fog_pars_vertex:Eu,fog_fragment:wu,fog_pars_fragment:Ru,gradientmap_pars_fragment:Cu,lightmap_pars_fragment:Iu,lights_lambert_fragment:Pu,lights_lambert_pars_fragment:Lu,lights_pars_begin:Du,lights_toon_fragment:Uu,lights_toon_pars_fragment:Fu,lights_phong_fragment:Ou,lights_phong_pars_fragment:Bu,lights_physical_fragment:zu,lights_physical_pars_fragment:Gu,lights_fragment_begin:ku,lights_fragment_maps:Vu,lights_fragment_end:Hu,lightprobes_pars_fragment:Wu,logdepthbuf_fragment:Xu,logdepthbuf_pars_fragment:qu,logdepthbuf_pars_vertex:Yu,logdepthbuf_vertex:Zu,map_fragment:Ju,map_pars_fragment:$u,map_particle_fragment:Ku,map_particle_pars_fragment:Qu,metalnessmap_fragment:ju,metalnessmap_pars_fragment:td,morphinstance_vertex:ed,morphcolor_vertex:nd,morphnormal_vertex:id,morphtarget_pars_vertex:sd,morphtarget_vertex:rd,normal_fragment_begin:ad,normal_fragment_maps:od,normal_pars_fragment:ld,normal_pars_vertex:cd,normal_vertex:hd,normalmap_pars_fragment:ud,clearcoat_normal_fragment_begin:dd,clearcoat_normal_fragment_maps:fd,clearcoat_pars_fragment:pd,iridescence_pars_fragment:md,opaque_fragment:gd,packing:_d,premultiplied_alpha_fragment:xd,project_vertex:vd,dithering_fragment:yd,dithering_pars_fragment:Md,roughnessmap_fragment:Sd,roughnessmap_pars_fragment:bd,shadowmap_pars_fragment:Td,shadowmap_pars_vertex:Ad,shadowmap_vertex:Ed,shadowmask_pars_fragment:wd,skinbase_vertex:Rd,skinning_pars_vertex:Cd,skinning_vertex:Id,skinnormal_vertex:Pd,specularmap_fragment:Ld,specularmap_pars_fragment:Dd,tonemapping_fragment:Nd,tonemapping_pars_fragment:Ud,transmission_fragment:Fd,transmission_pars_fragment:Od,uv_pars_fragment:Bd,uv_pars_vertex:zd,uv_vertex:Gd,worldpos_vertex:kd,background_vert:Vd,background_frag:Hd,backgroundCube_vert:Wd,backgroundCube_frag:Xd,cube_vert:qd,cube_frag:Yd,depth_vert:Zd,depth_frag:Jd,distance_vert:$d,distance_frag:Kd,equirect_vert:Qd,equirect_frag:jd,linedashed_vert:tf,linedashed_frag:ef,meshbasic_vert:nf,meshbasic_frag:sf,meshlambert_vert:rf,meshlambert_frag:af,meshmatcap_vert:of,meshmatcap_frag:lf,meshnormal_vert:cf,meshnormal_frag:hf,meshphong_vert:uf,meshphong_frag:df,meshphysical_vert:ff,meshphysical_frag:pf,meshtoon_vert:mf,meshtoon_frag:gf,points_vert:_f,points_frag:xf,shadow_vert:vf,shadow_frag:yf,sprite_vert:Mf,sprite_frag:Sf},mt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},fn={basic:{uniforms:Ee([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ee([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ee([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ee([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ee([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ee([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ee([mt.points,mt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ee([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ee([mt.common,mt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ee([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ee([mt.sprite,mt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:Ee([mt.common,mt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:Ee([mt.lights,mt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};fn.physical={uniforms:Ee([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var fa={r:0,b:0,g:0},bf=new se,Vc=new Lt;Vc.set(-1,0,0,0,1,0,0,0,1);function Tf(i,t,e,n,s,r){let a=new Wt(0),o=s===!0?0:1,c,l,h=null,m=0,u=null;function p(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){let T=b.backgroundBlurriness>0;R=t.get(R,T)}return R}function x(b){let R=!1,T=p(b);T===null?f(a,o):T&&T.isColor&&(f(T,1),R=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(b,R){let T=p(R);T&&T.isCubeTexture?(l===void 0&&(l=new cn(new Ti(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:ni(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,A,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=T,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(bf.makeRotationFromEuler(R.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Vc),l.material.toneMapped=Vt.getTransfer(T.colorSpace)!==$t,(h!==T||m!==T.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=T,m=T.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new cn(new ji(2,2),new Oe({name:"BackgroundMaterial",uniforms:ni(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(T.colorSpace)!==$t,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||m!==T.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,m=T.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,R){b.getRGB(fa,wo(i)),e.buffers.color.setClear(fa.r,fa.g,fa.b,R,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,R=1){a.set(b),o=R,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,f(a,o)},render:x,addToRenderList:y,dispose:d}}function Af(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(D,G,X,I,V){let Y=!1,k=m(D,I,X,G);r!==k&&(r=k,l(r.object)),Y=p(D,I,X,V),Y&&x(D,I,X,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,T(D,G,X,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function m(D,G,X,I){let V=I.wireframe===!0,Y=n[G.id];Y===void 0&&(Y={},n[G.id]=Y);let k=D.isInstancedMesh===!0?D.id:0,tt=Y[k];tt===void 0&&(tt={},Y[k]=tt);let H=tt[X.id];H===void 0&&(H={},tt[X.id]=H);let Q=H[V];return Q===void 0&&(Q=u(c()),H[V]=Q),Q}function u(D){let G=[],X=[],I=[];for(let V=0;V<e;V++)G[V]=0,X[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:X,attributeDivisors:I,object:D,attributes:{},index:null}}function p(D,G,X,I){let V=r.attributes,Y=G.attributes,k=0,tt=X.getAttributes();for(let H in tt)if(tt[H].location>=0){let j=V[H],vt=Y[H];if(vt===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(vt=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(vt=D.instanceColor)),j===void 0||j.attribute!==vt||vt&&j.data!==vt.data)return!0;k++}return r.attributesNum!==k||r.index!==I}function x(D,G,X,I){let V={},Y=G.attributes,k=0,tt=X.getAttributes();for(let H in tt)if(tt[H].location>=0){let j=Y[H];j===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let vt={};vt.attribute=j,j&&j.data&&(vt.data=j.data),V[H]=vt,k++}r.attributes=V,r.attributesNum=k,r.index=I}function y(){let D=r.newAttributes;for(let G=0,X=D.length;G<X;G++)D[G]=0}function f(D){d(D,0)}function d(D,G){let X=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;X[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),V[D]!==G&&(i.vertexAttribDivisor(D,G),V[D]=G)}function b(){let D=r.newAttributes,G=r.enabledAttributes;for(let X=0,I=G.length;X<I;X++)G[X]!==D[X]&&(i.disableVertexAttribArray(X),G[X]=0)}function R(D,G,X,I,V,Y,k){k===!0?i.vertexAttribIPointer(D,G,X,V,Y):i.vertexAttribPointer(D,G,X,I,V,Y)}function T(D,G,X,I){y();let V=I.attributes,Y=X.getAttributes(),k=G.defaultAttributeValues;for(let tt in Y){let H=Y[tt];if(H.location>=0){let Q=V[tt];if(Q===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){let j=Q.normalized,vt=Q.itemSize,It=t.get(Q);if(It===void 0)continue;let Z=It.buffer,dt=It.type,xt=It.bytesPerElement,Et=dt===i.INT||dt===i.UNSIGNED_INT||Q.gpuType===Pr;if(Q.isInterleavedBufferAttribute){let ft=Q.data,gt=ft.isInterleavedBuffer===!0?ft.stride:ft.itemSize,Ut=Q.offset;if(ft.isInstancedInterleavedBuffer||ft.isInstancedBufferAttribute){for(let Mt=0;Mt<H.locationSize;Mt++)d(H.location+Mt,ft.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Mt=0;Mt<H.locationSize;Mt++)f(H.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Mt=0;Mt<H.locationSize;Mt++)R(H.location+Mt,vt/H.locationSize,dt,j,gt*xt,(Ut+vt/H.locationSize*Mt)*xt,Et)}else{if(Q.isInstancedBufferAttribute){for(let ft=0;ft<H.locationSize;ft++)d(H.location+ft,Q.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ft=0;ft<H.locationSize;ft++)f(H.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let ft=0;ft<H.locationSize;ft++)R(H.location+ft,vt/H.locationSize,dt,j,vt*xt,vt/H.locationSize*ft*xt,Et)}}else if(k!==void 0){let j=k[tt];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(H.location,j);break;case 3:i.vertexAttrib3fv(H.location,j);break;case 4:i.vertexAttrib4fv(H.location,j);break;default:i.vertexAttrib1fv(H.location,j)}}}}b()}function w(){O();for(let D in n){let G=n[D];for(let X in G){let I=G[X];for(let V in I){let Y=I[V];for(let k in Y)h(Y[k].object),delete Y[k];delete I[V]}}delete n[D]}}function A(D){if(n[D.id]===void 0)return;let G=n[D.id];for(let X in G){let I=G[X];for(let V in I){let Y=I[V];for(let k in Y)h(Y[k].object),delete Y[k];delete I[V]}}delete n[D.id]}function g(D){for(let G in n){let X=n[G];for(let I in X){let V=X[I];if(V[D.id]===void 0)continue;let Y=V[D.id];for(let k in Y)h(Y[k].object),delete Y[k];delete V[D.id]}}}function S(D){for(let G in n){let X=n[G],I=D.isInstancedMesh===!0?D.id:0,V=X[I];if(V!==void 0){for(let Y in V){let k=V[Y];for(let tt in k)h(k[tt].object),delete k[tt];delete V[Y]}delete X[I],Object.keys(X).length===0&&delete n[G]}}}function O(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:f,disableUnusedAttributes:b}}function Ef(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function wf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==sn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let S=g===nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==He&&g!==en&&!S&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Ct("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&m===!1;e.reversedDepthBuffer===!0&&m===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&m===!0&&Ct("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:T,maxSamples:w,samples:A}}function Rf(i){let t=this,e=null,n=0,s=!1,r=!1,a=new je,o=new Lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){let p=m.length!==0||u||n!==0||s;return s=u,n=m.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){e=h(m,u,0)},this.setState=function(m,u,p){let x=m.clippingPlanes,y=m.clipIntersection,f=m.clipShadows,d=i.get(m);if(!s||x===null||x.length===0||r&&!f)r?h(null):l();else{let b=r?0:n,R=b*4,T=d.clippingState||null;c.value=T,T=h(x,u,R,p);for(let w=0;w!==R;++w)T[w]=e[w];d.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(m,u,p,x){let y=m!==null?m.length:0,f=null;if(y!==0){if(f=c.value,x!==!0||f===null){let d=p+y*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<d)&&(f=new Float32Array(d));for(let R=0,T=p;R!==y;++R,T+=4)a.copy(m[R]).applyMatrix4(b,o),a.normal.toArray(f,T),f[T+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,f}}var ps=class extends ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $i(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ti(5,5,5),r=new Oe({name:"CubemapFromEquirect",uniforms:ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Qn});r.uniforms.tEquirect.value=e;let a=new cn(s,r),o=e.minFilter;return e.minFilter===An&&(e.minFilter=Ie),new Ai(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},yc=256,Cf=3,If=20,Hc=256,Wc=16,Pf=3,Lf=new B,Df=new Wt,ma=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ai(1,10,null),this._boxMesh=new cn(new Ti(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Lf}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let m=c.autoClear,u=c.autoClearColor,p=c.autoClearDepth,x=c.autoClearStencil,y=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(t.background=c.getClearColor(Df));let f=new Ai(n,s,h);return f.position.copy(o),f.update(c,t),c.autoClear=m,c.autoClearColor=u,c.autoClearDepth=p,c.autoClearStencil=x,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(yc,mc(t))}_fromTexture(t,e){t.mapping===ti||t.mapping===Ri?this._setSize(t.image.length===0?yc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Mc(t,!1,!1),n=Math.log2(t)-Cf;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Mc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ti||t.mapping===Ri?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Sc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Nf(),this._integrationMaterial=Uf());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Wc);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Pf)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(Hc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Ff());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Mc(i,t,e){return new ps(i,{minFilter:An,generateMipmaps:t,type:nn,colorSpace:Gi,depthBuffer:e})}function ms(i,t,e){return new Oe({name:i,uniforms:t,vertexShader:Bt.cube_vert,fragmentShader:e,side:Pe,blending:Qn,depthTest:!1,depthWrite:!1})}function Nf(){return ms("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Uf(){return ms("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Wc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ff(){return ms("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${If}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

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

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Sc(){return ms("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function bc(){return ms("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Of(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Rr||p===Cr)if(t.has(u)){let x=t.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let y=new ps(x.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,x=p===Rr||p===Cr,y=p===ti||p===Ri;if(x||y){let f=e.get(u),d=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new ma(i)),f=x?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{let b=u.image;return x&&b&&b.height>0||y&&b&&c(b)?(n===null&&(n=new ma(i)),f=x?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,p){return p===Rr?u.mapping=ti:p===Cr&&(u.mapping=Ri),u}function c(u){let p=0,x=6;for(let y=0;y<x;y++)u[y]!==void 0&&p++;return p===x}function l(u){let p=u.target;p.removeEventListener("dispose",l);let x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function Bf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Bi("WebGLRenderer: "+n+" extension not supported."),s}}}function zf(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){c(x.target)}function c(x){x.index!==null&&t.remove(x.index);for(let f in x.attributes)t.remove(x.attributes[f]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let y=r.get(x);y&&(t.remove(y),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function l(x,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(x){let y=x.attributes;for(let f in y)t.update(y[f],i.ARRAY_BUFFER)}function m(x){let y=x.index,f=x.attributes.position,d=0;if(f===void 0)return;let b=y!==null?y.array.length:f.array.length/3-1,R=f.count>=65535?Zi:Yi,T=new R(Math.ceil(b/3)*6,1),w=T.array;if(y!==null){let g=y.array;d=y.version;for(let S=0,O=0;S<b;S+=3){let P=g[S+0],D=g[S+1],G=g[S+2];w[O++]=P,w[O++]=D,w[O++]=D,w[O++]=G,w[O++]=G,w[O++]=P}}else{d=f.version;for(let g=0,S=0;g<b;g+=3){let O=g+0,P=g+1,D=g+2;w[S++]=O,w[S++]=P,w[S++]=P,w[S++]=D,w[S++]=D,w[S++]=O}}T.version=d;let A=r.get(x);A&&t.remove(A),r.set(x,T)}function u(x){let y=r.get(x);if(y){let f=x.index;f!==null&&y.version<f.version&&m(x)}else m(x);return r.get(x)}function p(){for(let x in s){let y=s[x].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:u,dispose:p}}function Gf(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function c(m,u){i.drawElements(n,u,r,m*a),e.update(u,n,1)}function l(m,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,m*a,p),e.update(u,n,p))}function h(m,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,p);let y=0;for(let f=0;f<p;f++)y+=u[f];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function kf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vf(i,t,e){let n=new WeakMap,s=new oe;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==m){let O=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],R=0;p===!0&&(R=1),x===!0&&(R=2),y===!0&&(R=3);let T=o.attributes.position.count*R,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let A=new Float32Array(T*w*4*m),g=new Wi(A,T,w,m);g.type=en,g.needsUpdate=!0;let S=R*4;for(let P=0;P<m;P++){let D=f[P],G=d[P],X=b[P],I=T*w*4*P;for(let V=0;V<D.count;V++){let Y=V*S;p===!0&&(s.fromBufferAttribute(D,V),A[I+Y+0]=s.x,A[I+Y+1]=s.y,A[I+Y+2]=s.z,A[I+Y+3]=0),x===!0&&(s.fromBufferAttribute(G,V),A[I+Y+4]=s.x,A[I+Y+5]=s.y,A[I+Y+6]=s.z,A[I+Y+7]=0),y===!0&&(s.fromBufferAttribute(X,V),A[I+Y+8]=s.x,A[I+Y+9]=s.y,A[I+Y+10]=s.z,A[I+Y+11]=X.itemSize===4?s.w:1)}}u={count:m,texture:g,size:new Zt(T,w)},n.set(o,u),o.addEventListener("dispose",O)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Hf(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,m=l.geometry,u=t.get(l,m);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Wf={[so]:"LINEAR_TONE_MAPPING",[ro]:"REINHARD_TONE_MAPPING",[ao]:"CINEON_TONE_MAPPING",[oo]:"ACES_FILMIC_TONE_MAPPING",[co]:"AGX_TONE_MAPPING",[ho]:"NEUTRAL_TONE_MAPPING",[lo]:"CUSTOM_TONE_MAPPING"};function Xf(i,t,e,n,s,r){let a=new ke(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Fe;h.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new De([0,2,0,0,2,0],2));let m=new dr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new cn(h,m),p=new Ar(-1,1,1,-1,0,1),x=null,y=null,f=!1,d,b=null,R=[],T=!1;this.setSize=function(w,A){a.setSize(w,A),o!==null&&o.setSize(w,A),c!==null&&c.setSize(w,A);for(let g=0;g<R.length;g++){let S=R[g];S.setSize&&S.setSize(w,A)}},this.setEffects=function(w){R=w,T=R.length>0&&R[0].isRenderPass===!0;let A=a.width,g=a.height;R.length>0&&o===null&&(o=new ke(A,g,{type:nn,depthBuffer:!1,stencilBuffer:!1}),c=new ke(A,g,{type:nn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&R.some(O=>O.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new Tn(A,g),r===!0&&(l.format=En,l.type=ei)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let O=0;O<R.length;O++){let P=R[O];P.setSize&&P.setSize(A,g),S&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(l)}},this.begin=function(w,A){if(f||w.toneMapping===un&&R.length===0)return!1;if(b=A,A!==null){let g=A.width,S=A.height;(a.width!==g||a.height!==S)&&this.setSize(g,S)}return T===!1&&w.setRenderTarget(a),d=w.toneMapping,w.toneMapping=un,!0},this.hasRenderPass=function(){return T},this.end=function(w,A){w.toneMapping=d,f=!0;let g=a,S=o;for(let O=0;O<R.length;O++){let P=R[O];P.enabled!==!1&&(P.render(w,S,g,A),P.needsSwap!==!1&&(g=S,S=S===o?c:o))}if(x!==w.outputColorSpace||y!==w.toneMapping){x=w.outputColorSpace,y=w.toneMapping,m.defines={},Vt.getTransfer(x)===$t&&(m.defines.SRGB_TRANSFER="");let O=Wf[y];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(b),w.render(u,p),b=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),m.dispose()}}var Xc=new Ne,qc=new Tn(1,1),Yc=new Ki(1),Zc=new Wi,Jc=new ir,$c=new $i,Tc=[],Ac=[],Ec=new Float32Array(16),wc=new Float32Array(9),Rc=new Float32Array(4);function Pi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Tc[s];if(r===void 0&&(r=new Float32Array(s),Tc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _a(i,t){let e=Ac[t];e===void 0&&(e=new Int32Array(t),Ac[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function Zf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Jf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function $f(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Rc.set(n),i.uniformMatrix2fv(this.addr,!1,Rc),me(e,n)}}function Kf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;wc.set(n),i.uniformMatrix3fv(this.addr,!1,wc),me(e,n)}}function Qf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Ec.set(n),i.uniformMatrix4fv(this.addr,!1,Ec),me(e,n)}}function jf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function ep(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function ip(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function rp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function xa(i){return i.version===0&&(i.compareFunction=bo,i.needsUpdate=!0),i}function op(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=xa(qc):r=Xc,e.setTexture2D(t||r,s)}function lp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jc,s)}function cp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=xa(Yc):r=$c,e.setTextureCube(t||r,s)}function hp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zc,s)}function up(i){switch(i){case 5126:return qf;case 35664:return Yf;case 35665:return Zf;case 35666:return Jf;case 35674:return $f;case 35675:return Kf;case 35676:return Qf;case 5124:case 35670:return jf;case 35667:case 35671:return tp;case 35668:case 35672:return ep;case 35669:case 35673:return np;case 5125:return ip;case 36294:return sp;case 36295:return rp;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return op;case 35679:case 36299:case 36307:return lp;case 35680:case 36300:case 36308:case 36293:return cp;case 36289:case 36303:case 36311:case 36292:return hp}}function dp(i,t){i.uniform1fv(this.addr,t)}function fp(i,t){let e=Pi(t,this.size,2);i.uniform2fv(this.addr,e)}function pp(i,t){let e=Pi(t,this.size,3);i.uniform3fv(this.addr,e)}function mp(i,t){let e=Pi(t,this.size,4);i.uniform4fv(this.addr,e)}function gp(i,t){let e=Pi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _p(i,t){let e=Pi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xp(i,t){let e=Pi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vp(i,t){i.uniform1iv(this.addr,t)}function yp(i,t){i.uniform2iv(this.addr,t)}function Mp(i,t){i.uniform3iv(this.addr,t)}function Sp(i,t){i.uniform4iv(this.addr,t)}function bp(i,t){i.uniform1uiv(this.addr,t)}function Tp(i,t){i.uniform2uiv(this.addr,t)}function Ap(i,t){i.uniform3uiv(this.addr,t)}function Ep(i,t){i.uniform4uiv(this.addr,t)}function wp(i,t,e){let n=this.cache,s=t.length,r=_a(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=xa(qc):a=Xc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Rp(i,t,e){let n=this.cache,s=t.length,r=_a(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jc,r[a])}function Cp(i,t,e){let n=this.cache,s=t.length,r=_a(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=xa(Yc):a=$c;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Ip(i,t,e){let n=this.cache,s=t.length,r=_a(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Zc,r[a])}function Pp(i){switch(i){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return _p;case 35676:return xp;case 5124:case 35670:return vp;case 35667:case 35671:return yp;case 35668:case 35672:return Mp;case 35669:case 35673:return Sp;case 5125:return bp;case 36294:return Tp;case 36295:return Ap;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Ip}}var Bo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=up(e.type)}},zo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pp(e.type)}},Go=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Fo=/(\w+)(\])?(\[|\.)?/g;function Cc(i,t){i.seq.push(t),i.map[t.id]=t}function Lp(i,t,e){let n=i.name,s=n.length;for(Fo.lastIndex=0;;){let r=Fo.exec(n),a=Fo.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Cc(e,l===void 0?new Bo(o,i,t):new zo(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new Go(o),Cc(e,m)),e=m}}}var Ii=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Lp(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ic(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Dp=37297,Np=0;function Up(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Pc=new Lt;function Fp(i){Vt._getMatrix(Pc,Vt.workingColorSpace,i);let t=`mat3( ${Pc.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(i)){case ki:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Up(i.getShaderSource(t),o)}else return r}function Op(i,t){let e=Fp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Bp={[so]:"Linear",[ro]:"Reinhard",[ao]:"Cineon",[oo]:"ACESFilmic",[co]:"AgX",[ho]:"Neutral",[lo]:"Custom"};function zp(i,t){let e=Bp[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pa=new B;function Gp(){Vt.getLuminanceCoefficients(pa);let i=pa.x.toFixed(4),t=pa.y.toFixed(4),e=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function Vp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function fs(i){return i!==""}function Dc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Nc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(i){return i.replace(Wp,Xp)}function Xp(i,t){let e=Bt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ko(e)}var qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(i){return i.replace(qp,Yp)}function Yp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Zp={[ns]:"SHADOWMAP_TYPE_PCF",[Ei]:"SHADOWMAP_TYPE_VSM"};function Jp(i){return Zp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $p={[Ri]:"ENVMAP_MODE_REFRACTION"};function Kp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$p[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qp={[io]:"ENVMAP_BLENDING_MULTIPLY",[jl]:"ENVMAP_BLENDING_MIX",[tc]:"ENVMAP_BLENDING_ADD"};function jp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qp[i.combine]||"ENVMAP_BLENDING_NONE"}function t1(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Jp(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Kp(e),m=jp(e),u=kp(e),p=Vp(r),x=s.createProgram(),y,f,d=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(fs).join(`
`),y.length>0&&(y+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(fs).join(`
`),f.length>0&&(f+=`
`)):(y=[Fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),f=[Fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==un?"#define TONE_MAPPING":"",e.toneMapping!==un?Bt.tonemapping_pars_fragment:"",e.toneMapping!==un?zp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Op("linearToOutputTexel",e.outputColorSpace),Gp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),a=ko(a),a=Dc(a,e),a=Nc(a,e),o=ko(o),o=Dc(o,e),o=Nc(o,e),a=Uc(a),o=Uc(o),e.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,f=["#define varying in",e.glslVersion===To?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===To?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=d+y+a,R=d+f+o,T=Ic(s,s.VERTEX_SHADER,b),w=Ic(s,s.FRAGMENT_SHADER,R);s.attachShader(x,T),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(T)||"",X=s.getShaderInfoLog(w)||"",I=D.trim(),V=G.trim(),Y=X.trim(),k=!0,tt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,w);else{let H=Lc(s,T,"vertex"),Q=Lc(s,w,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+H+`
`+Q)}else I!==""?Ct("WebGLProgram: Program Info Log:",I):(V===""||Y==="")&&(tt=!1);tt&&(P.diagnostics={runnable:k,programLog:I,vertexShader:{log:V,prefix:y},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(T),s.deleteShader(w),g=new Ii(s,x),S=Hp(s,x)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(x,Dp)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Np++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}var e1=0,Vo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ho(t),e.set(t,n)),n}},Ho=class{constructor(t){this.id=e1++,this.code=t,this.usedTimes=0}};function n1(i){return i===Hn||i===cs||i===hs}function i1(i,t,e,n,s,r){let a=new Xi,o=new Vo,c=new Set,l=[],h=new Map,m=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function x(g,S,O,P,D,G){let X=P.fog,I=D.geometry,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,k=t.get(g.envMap||V,Y),tt=u[g.type],H=n.precision;g.precision!==null&&(H=n.getMaxPrecision(g.precision),H!==g.precision&&Ct("WebGLProgram.getParameters:",g.precision,"not supported, using",H,"instead."));let Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,j=Q!==void 0?Q.length:0,vt=0;I.morphAttributes.position!==void 0&&(vt=1),I.morphAttributes.normal!==void 0&&(vt=2),I.morphAttributes.color!==void 0&&(vt=3);let It,Z,dt,xt;if(tt){let pt=fn[tt];It=pt.vertexShader,Z=pt.fragmentShader}else{It=g.vertexShader,Z=g.fragmentShader;let pt=o.getVertexShaderStage(g),Kt=o.getFragmentShaderStage(g);o.update(g,pt,Kt),dt=pt.id,xt=Kt.id}let Et=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),gt=D.isInstancedMesh===!0,Ut=D.isBatchedMesh===!0,Mt=!!g.map,qt=!!g.matcap,Xt=!!k,zt=Xt&&k.isPMREMTexture===!0,le=!!g.aoMap,re=!!g.lightMap,he=!!g.bumpMap&&g.wireframe===!1,Qt=!!g.normalMap,Le=!!g.displacementMap,ce=!!g.emissiveMap,we=!!g.metalnessMap,We=!!g.roughnessMap,Xe=g.anisotropy>0,L=g.clearcoat>0,qe=g.diffuseRoughness>0,ne=g.dispersion>0,ie=g.retroreflectivity>0,ut=g.iridescence>0,fe=g.sheen>0,Rt=g.transmission>0,Dt=Xe&&!!g.anisotropyMap,M=L&&!!g.clearcoatMap,_=L&&!!g.clearcoatNormalMap,U=L&&!!g.clearcoatRoughnessMap,et=qe&&!!g.diffuseRoughnessMap,K=ut&&!!g.iridescenceMap,st=ut&&!!g.iridescenceThicknessMap,ct=fe&&!!g.sheenColorMap,q=fe&&!!g.sheenRoughnessMap,J=!!g.specularMap,at=!!g.specularColorMap,E=!!g.specularIntensityMap,$=Rt&&!!g.transmissionMap,W=Rt&&!!g.thicknessMap,ot=!!g.gradientMap,it=!!g.alphaMap,rt=g.alphaTest>0,At=!!g.alphaHash,Ot=!!g.extensions,nt=un;g.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(nt=i.toneMapping);let wt=zt?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Ft={shaderID:tt,shaderType:g.type,shaderName:g.name,vertexShader:It,fragmentShader:Z,defines:g.defines,customVertexShaderID:dt,customFragmentShaderID:xt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:H,batching:Ut,batchingColor:Ut&&D._colorsTexture!==null,instancing:gt,instancingColor:gt&&D.instanceColor!==null,instancingMorph:gt&&D.morphTexture!==null,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Vt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Mt,matcap:qt,envMap:Xt,envMapMode:Xt&&k.mapping,envMapPMREM:zt,envMapMaxLod:zt?wt.length-1:null,envMapSize:zt?wt[0].width:null,aoMap:le,lightMap:re,bumpMap:he,normalMap:Qt,displacementMap:Le,emissiveMap:ce,normalMapObjectSpace:Qt&&g.normalMapType===ic,normalMapTangentSpace:Qt&&g.normalMapType===yo,packedNormalMap:Qt&&g.normalMapType===yo&&n1(g.normalMap.format),metalnessMap:we,roughnessMap:We,anisotropy:Xe,anisotropyMap:Dt,clearcoat:L,clearcoatMap:M,clearcoatNormalMap:_,clearcoatRoughnessMap:U,diffuseRoughness:qe,diffuseRoughnessMap:et,dispersion:ne,retroreflection:ie,iridescence:ut,iridescenceMap:K,iridescenceThicknessMap:st,sheen:fe,sheenColorMap:ct,sheenRoughnessMap:q,specularMap:J,specularColorMap:at,specularIntensityMap:E,transmission:Rt,transmissionMap:$,thicknessMap:W,gradientMap:ot,opaque:g.transparent===!1&&g.blending===wi&&g.alphaToCoverage===!1,alphaMap:it,alphaTest:rt,alphaHash:At,combine:g.combine,mapUv:Mt&&p(g.map.channel),aoMapUv:le&&p(g.aoMap.channel),lightMapUv:re&&p(g.lightMap.channel),bumpMapUv:he&&p(g.bumpMap.channel),normalMapUv:Qt&&p(g.normalMap.channel),displacementMapUv:Le&&p(g.displacementMap.channel),emissiveMapUv:ce&&p(g.emissiveMap.channel),metalnessMapUv:we&&p(g.metalnessMap.channel),roughnessMapUv:We&&p(g.roughnessMap.channel),anisotropyMapUv:Dt&&p(g.anisotropyMap.channel),clearcoatMapUv:M&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:_&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:K&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:st&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:q&&p(g.sheenRoughnessMap.channel),specularMapUv:J&&p(g.specularMap.channel),specularColorMapUv:at&&p(g.specularColorMap.channel),specularIntensityMapUv:E&&p(g.specularIntensityMap.channel),transmissionMapUv:$&&p(g.transmissionMap.channel),thicknessMapUv:W&&p(g.thicknessMap.channel),alphaMapUv:it&&p(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Qt||Xe),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Mt||it),fog:!!X,useFog:g.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&Qt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ft,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:vt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:G.filter(pt=>pt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:Mt&&g.map.isVideoTexture===!0&&Vt.getTransfer(g.map.colorSpace)===$t,decodeVideoTextureEmissive:ce&&g.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(g.emissiveMap.colorSpace)===$t,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===hn,flipSided:g.side===Pe,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ot&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&g.extensions.multiDraw===!0||Ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function y(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let O in g.defines)S.push(O),S.push(g.defines[O]);return g.isRawShaderMaterial===!1&&(f(S,g),d(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function f(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function d(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function b(g){let S=u[g.type],O;if(S){let P=fn[S];O=_c.clone(P.uniforms)}else O=g.uniforms;return O}function R(g,S){let O=h.get(S);return O!==void 0?++O.usedTimes:(O=new t1(i,S,g,s),l.push(O),h.set(S,O)),O}function T(g){if(--g.usedTimes===0){let S=l.indexOf(g);l[S]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:b,acquireProgram:R,releaseProgram:T,releaseShaderCache:w,programs:l,dispose:A}}function s1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function r1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Oc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,x,y,f,d){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:p,material:x,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:f,group:d},i[t]=b):(b.id=u.id,b.object=u,b.geometry=p,b.material=x,b.materialVariant=a(u),b.groupOrder=y,b.renderOrder=u.renderOrder,b.z=f,b.group=d),t++,b}function c(u,p,x,y,f,d,b){b.reversedDepth===!0&&(f=-f);let R=o(u,p,x,y,f,d);x.transmission>0?n.push(R):x.transparent===!0?s.push(R):e.push(R)}function l(u,p,x,y,f,d){let b=o(u,p,x,y,f,d);x.transmission>0?n.unshift(b):x.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,p){e.length>1&&e.sort(u||r1),n.length>1&&n.sort(p||Oc),s.length>1&&s.sort(p||Oc)}function m(){for(let u=t,p=i.length;u<p;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:m,sort:h}}function a1(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Bc,i.set(n,[a])):s>=r.length?(a=new Bc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function o1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Wt};break;case"SpotLight":e={position:new B,direction:new B,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function l1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var c1=0;function h1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function u1(i){let t=new o1,e=l1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);let s=new B,r=new se,a=new se;function o(l){let h=0,m=0,u=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let p=0,x=0,y=0,f=0,d=0,b=0,R=0,T=0,w=0,A=0,g=0,S=0,O=0,P=0;l.sort(h1);for(let G=0,X=l.length;G<X;G++){let I=l[G],V=I.color,Y=I.intensity,k=I.distance,tt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Hn?tt=I.shadow.map.texture:tt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*Y,m+=V.g*Y,u+=V.b*Y;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],Y);P++}else if(I.isSunLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,j=e.get(I);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[x]=j,n.sunShadowMap[x]=tt;let vt=Q.getViewportCount();for(let It=0;It<vt;It++)n.sunShadowMatrix[y+It]=Q.getMatrix(It),n.sunShadowCascade[y+It]=Q._cascadeData[It];y+=vt,x++}n.sun[p]=H,p++}else if(I.isDirectionalLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,j=e.get(I);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=tt,n.directionalShadowMatrix[f]=I.shadow.matrix,w++}n.directional[f]=H,f++}else if(I.isSpotLight){let H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(V).multiplyScalar(Y),H.distance=k,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[b]=H;let Q=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,Q.updateMatrices(I),I.castShadow&&O++),n.spotLightMatrix[b]=Q.matrix,I.castShadow){let j=e.get(I);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[b]=j,n.spotShadowMap[b]=tt,g++}b++}else if(I.isRectAreaLight){let H=t.get(I);H.color.copy(V).multiplyScalar(Y),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[R]=H,R++}else if(I.isPointLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let Q=I.shadow,j=e.get(I);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[d]=j,n.pointShadowMap[d]=tt,n.pointShadowMatrix[d]=I.shadow.matrix,A++}n.point[d]=H,d++}else if(I.isHemisphereLight){let H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(Y),H.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[T]=H,T++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=u;let D=n.hash;(D.sunLength!==p||D.directionalLength!==f||D.pointLength!==d||D.spotLength!==b||D.rectAreaLength!==R||D.hemiLength!==T||D.numSunShadows!==x||D.numDirectionalShadows!==w||D.numPointShadows!==A||D.numSpotShadows!==g||D.numSpotMaps!==S||D.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=f,n.spot.length=b,n.rectArea.length=R,n.point.length=d,n.hemi.length=T,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+S-O,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=P,D.sunLength=p,D.directionalLength=f,D.pointLength=d,D.spotLength=b,D.rectAreaLength=R,D.hemiLength=T,D.numSunShadows=x,D.numDirectionalShadows=w,D.numPointShadows=A,D.numSpotShadows=g,D.numSpotMaps=S,D.numLightProbes=P,n.version=c1++)}function c(l,h){let m=0,u=0,p=0,x=0,y=0,f=0,d=h.matrixWorldInverse;for(let b=0,R=l.length;b<R;b++){let T=l[b];if(T.isSunLight){let w=n.sun[m];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(d),m++}else if(T.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),u++}else if(T.isSpotLight){let w=n.spot[x];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),x++}else if(T.isRectAreaLight){let w=n.rectArea[y];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(d),a.identity(),r.copy(T.matrixWorld),r.premultiply(d),a.extractRotation(r),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(T.isPointLight){let w=n.point[p];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){let w=n.hemi[f];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(d),f++}}}return{setup:o,setupView:c,state:n}}function zc(i){let t=new u1(i),e=[],n=[],s=[];function r(m){h.camera=m,e.length=0,n.length=0,s.length=0}function a(m){m.isLightProbeGrid?s.push(m):e.push(m)}function o(m){n.push(m)}function c(){t.setup(e),s.sort((m,u)=>m.priority-u.priority||m.id-u.id)}function l(m){t.setupView(e,m)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function d1(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new zc(i),t.set(s,[o])):r>=a.length?(o=new zc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var f1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p1=`uniform sampler2D shadow_pass;
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
}`,m1=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],g1=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Gc=new se,ds=new B,Oo=new B;function _1(i,t,e){let n=new Kn,s=new Zt,r=new Zt,a=new oe,o=new fr,c=new pr,l={},h=e.maxTextureSize,m={[Vn]:Pe,[Pe]:Vn,[hn]:hn},u=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:f1,fragmentShader:p1}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let x=new Fe;x.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new cn(x,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ns;let d=this.type;this.render=function(A,g,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;this.type===Nl&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ns);let O=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Qn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let X=d!==this.type;X&&g.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=A.length;I<V;I++){let Y=A[I],k=Y.shadow;if(k===void 0){Ct("WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let tt=k.getFrameExtents();s.multiply(tt),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,k.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=H,k.map===null||X===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ei){if(Y.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ke(s.x,s.y,{format:Hn,type:nn,minFilter:Ie,magFilter:Ie,generateMipmaps:!1}),k.map.texture.name=Y.name+".shadowMap",k.map.depthTexture=new Tn(s.x,s.y,en),k.map.depthTexture.name=Y.name+".shadowMapDepth",k.map.depthTexture.format=Sn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ve,k.map.depthTexture.magFilter=ve}else Y.isPointLight?(k.map=new ps(s.x),k.map.depthTexture=new Ki(s.x,tn)):(k.map=new ke(s.x,s.y),k.map.depthTexture=new Tn(s.x,s.y,tn)),k.map.depthTexture.name=Y.name+".shadowMap",k.map.depthTexture.format=Sn,this.type===ns?(k.map.depthTexture.compareFunction=H?So:Mo,k.map.depthTexture.minFilter=Ie,k.map.depthTexture.magFilter=Ie):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ve,k.map.depthTexture.magFilter=ve);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let Q=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Y.isPointLight!==!0&&k.updateMatrices(Y,S);let j=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:S.layers;for(let vt=0;vt<Q;vt++){let It=k.getCamera(vt);if(Y.isPointLight){let Z=k.camera,dt=k.matrix,xt=Y.distance||Z.far;xt!==Z.far&&(Z.far=xt,Z.updateProjectionMatrix()),ds.setFromMatrixPosition(Y.matrixWorld),Z.position.copy(ds),Oo.copy(Z.position),Oo.add(m1[vt]),Z.up.copy(g1[vt]),Z.lookAt(Oo),Z.updateMatrixWorld(),dt.makeTranslation(-ds.x,-ds.y,-ds.z),Gc.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Gc,Z.coordinateSystem,Z.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,vt),i.clear();else{vt===0&&(i.setRenderTarget(k.map),i.clear());let Z=k.getViewport(vt);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),G.viewport(a)}n=k.getFrustum(vt),T(g,S,It,Y,j,this.type)}k.isPointLightShadow!==!0&&this.type===Ei&&b(k,S),k.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(O,P,D)};function b(A,g){let S=t.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new ke(s.x,s.y,{format:Hn,type:nn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(g,null,S,u,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(g,null,S,p,y,null)}function R(A,g,S,O){let P=null,D=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)P=D;else if(P=S.isPointLight===!0?c:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let G=P.uuid,X=g.uuid,I=l[G];I===void 0&&(I={},l[G]=I);let V=I[X];V===void 0&&(V=P.clone(),I[X]=V,g.addEventListener("dispose",w)),P=V}if(P.visible=g.visible,P.wireframe=g.wireframe,O===Ei?P.side=g.shadowSide!==null?g.shadowSide:g.side:P.side=g.shadowSide!==null?g.shadowSide:m[g.side],P.alphaMap=g.alphaMap,P.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,P.map=g.map,P.clipShadows=g.clipShadows,P.clippingPlanes=g.clippingPlanes,P.clipIntersection=g.clipIntersection,P.displacementMap=g.displacementMap,P.displacementScale=g.displacementScale,P.displacementBias=g.displacementBias,P.wireframeLinewidth=g.wireframeLinewidth,P.linewidth=g.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let G=i.properties.get(P);G.light=S}return P}function T(A,g,S,O,P,D){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===Ei)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);let I=t.update(A),V=A.material;if(Array.isArray(V)){let Y=I.groups;for(let k=0,tt=Y.length;k<tt;k++){let H=Y[k],Q=V[H.materialIndex];if(Q&&Q.visible){let j=R(A,Q,O,D);A.onBeforeShadow(i,A,g,S,I,j,H),i.renderBufferDirect(S,null,I,j,A,H),A.onAfterShadow(i,A,g,S,I,j,H)}}}else if(V.visible){let Y=R(A,V,O,D);A.onBeforeShadow(i,A,g,S,I,Y,null),i.renderBufferDirect(S,null,I,Y,A,null),A.onAfterShadow(i,A,g,S,I,Y,null)}}let X=A.children;for(let I=0,V=X.length;I<V;I++)T(X[I],g,S,O,P,D)}function w(A){A.target.removeEventListener("dispose",w);for(let S in l){let O=l[S],P=A.target.uuid;P in O&&(O[P].dispose(),delete O[P])}}}function x1(i,t){function e(){let E=!1,$=new oe,W=null,ot=new oe(0,0,0,0);return{setMask:function(it){W!==it&&!E&&(i.colorMask(it,it,it,it),W=it)},setLocked:function(it){E=it},setClear:function(it,rt,At,Ot,nt){nt===!0&&(it*=Ot,rt*=Ot,At*=Ot),$.set(it,rt,At,Ot),ot.equals($)===!1&&(i.clearColor(it,rt,At,Ot),ot.copy($))},reset:function(){E=!1,W=null,ot.set(-1,0,0,0)}}}function n(){let E=!1,$=!1,W=null,ot=null,it=null;return{setReversed:function(rt){if($!==rt){let At=t.get("EXT_clip_control");rt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),$=rt;let Ot=it;it=null,this.setClear(Ot)}},getReversed:function(){return $},setTest:function(rt){rt?ft(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(rt){W!==rt&&!E&&(i.depthMask(rt),W=rt)},setFunc:function(rt){if($&&(rt=pc[rt]),ot!==rt){switch(rt){case Ws:i.depthFunc(i.NEVER);break;case Xs:i.depthFunc(i.ALWAYS);break;case qs:i.depthFunc(i.LESS);break;case xi:i.depthFunc(i.LEQUAL);break;case Ys:i.depthFunc(i.EQUAL);break;case Zs:i.depthFunc(i.GEQUAL);break;case Js:i.depthFunc(i.GREATER);break;case $s:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=rt}},setLocked:function(rt){E=rt},setClear:function(rt){it!==rt&&(it=rt,$&&(rt=1-rt),i.clearDepth(rt))},reset:function(){E=!1,W=null,ot=null,it=null,$=!1}}}function s(){let E=!1,$=null,W=null,ot=null,it=null,rt=null,At=null,Ot=null,nt=null;return{setTest:function(wt){E||(wt?ft(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(wt){$!==wt&&!E&&(i.stencilMask(wt),$=wt)},setFunc:function(wt,Ft,pt){(W!==wt||ot!==Ft||it!==pt)&&(i.stencilFunc(wt,Ft,pt),W=wt,ot=Ft,it=pt)},setOp:function(wt,Ft,pt){(rt!==wt||At!==Ft||Ot!==pt)&&(i.stencilOp(wt,Ft,pt),rt=wt,At=Ft,Ot=pt)},setLocked:function(wt){E=wt},setClear:function(wt){nt!==wt&&(i.clearStencil(wt),nt=wt)},reset:function(){E=!1,$=null,W=null,ot=null,it=null,rt=null,At=null,Ot=null,nt=null}}}let r=new e,a=new n,o=new s,c={},l=new WeakMap,h={},m={},u={},p=new WeakMap,x=[],y=null,f=!1,d=null,b=null,R=null,T=null,w=null,A=null,g=null,S=new Wt(0,0,0),O=0,P=!1,D=null,G=null,X=null,I=null,V=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,tt=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=tt>=1):H.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=tt>=2);let Q=null,j={},vt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),Z=new oe().fromArray(vt),dt=new oe().fromArray(It);function xt(E,$,W,ot){let it=new Uint8Array(4),rt=i.createTexture();i.bindTexture(E,rt),i.texParameteri(E,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(E,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<W;At++)E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D($+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return rt}let Et={};Et[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ft(i.DEPTH_TEST),a.setFunc(xi),he(!1),Qt(Qa),ft(i.CULL_FACE),le(Qn);function ft(E){h[E]!==!0&&(i.enable(E),h[E]=!0)}function gt(E){h[E]!==!1&&(i.disable(E),h[E]=!1)}function Ut(E,$){return u[E]!==$?(i.bindFramebuffer(E,$),u[E]=$,E===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=$),E===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Mt(E,$){let W=x,ot=!1;if(E){W=p.get($),W===void 0&&(W=[],p.set($,W));let it=E.textures;if(W.length!==it.length||W[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,At=it.length;rt<At;rt++)W[rt]=i.COLOR_ATTACHMENT0+rt;W.length=it.length,ot=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,ot=!0);ot&&i.drawBuffers(W)}function qt(E){return y!==E?(i.useProgram(E),y=E,!0):!1}let Xt={[jn]:i.FUNC_ADD,[Fl]:i.FUNC_SUBTRACT,[Ol]:i.FUNC_REVERSE_SUBTRACT};Xt[Bl]=i.MIN,Xt[zl]=i.MAX;let zt={[Gl]:i.ZERO,[kl]:i.ONE,[Vl]:i.SRC_COLOR,[eo]:i.SRC_ALPHA,[Zl]:i.SRC_ALPHA_SATURATE,[ql]:i.DST_COLOR,[Wl]:i.DST_ALPHA,[Hl]:i.ONE_MINUS_SRC_COLOR,[no]:i.ONE_MINUS_SRC_ALPHA,[Yl]:i.ONE_MINUS_DST_COLOR,[Xl]:i.ONE_MINUS_DST_ALPHA,[Jl]:i.CONSTANT_COLOR,[$l]:i.ONE_MINUS_CONSTANT_COLOR,[Kl]:i.CONSTANT_ALPHA,[Ql]:i.ONE_MINUS_CONSTANT_ALPHA};function le(E,$,W,ot,it,rt,At,Ot,nt,wt){if(E===Qn){f===!0&&(gt(i.BLEND),f=!1);return}if(f===!1&&(ft(i.BLEND),f=!0),E!==Ul){if(E!==d||wt!==P){if((b!==jn||w!==jn)&&(i.blendEquation(i.FUNC_ADD),b=jn,w=jn),wt)switch(E){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case is:i.blendFunc(i.ONE,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case to:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",E);break}else switch(E){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ja:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case to:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",E);break}R=null,T=null,A=null,g=null,S.set(0,0,0),O=0,d=E,P=wt}return}it=it||$,rt=rt||W,At=At||ot,($!==b||it!==w)&&(i.blendEquationSeparate(Xt[$],Xt[it]),b=$,w=it),(W!==R||ot!==T||rt!==A||At!==g)&&(i.blendFuncSeparate(zt[W],zt[ot],zt[rt],zt[At]),R=W,T=ot,A=rt,g=At),(Ot.equals(S)===!1||nt!==O)&&(i.blendColor(Ot.r,Ot.g,Ot.b,nt),S.copy(Ot),O=nt),d=E,P=!1}function re(E,$){E.side===hn?gt(i.CULL_FACE):ft(i.CULL_FACE);let W=E.side===Pe;$&&(W=!W),he(W),E.blending===wi&&E.transparent===!1?le(Qn):le(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),a.setFunc(E.depthFunc),a.setTest(E.depthTest),a.setMask(E.depthWrite),r.setMask(E.colorWrite);let ot=E.stencilWrite;o.setTest(ot),ot&&(o.setMask(E.stencilWriteMask),o.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),o.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),ce(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(E){D!==E&&(E?i.frontFace(i.CW):i.frontFace(i.CCW),D=E)}function Qt(E){E!==Ll?(ft(i.CULL_FACE),E!==G&&(E===Qa?i.cullFace(i.BACK):E===Dl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),G=E}function Le(E){E!==X&&(k&&i.lineWidth(E),X=E)}function ce(E,$,W){E?(ft(i.POLYGON_OFFSET_FILL),(I!==$||V!==W)&&(I=$,V=W,a.getReversed()&&($=-$,W=-W),i.polygonOffset($,W))):gt(i.POLYGON_OFFSET_FILL)}function we(E){E?ft(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function We(E){E===void 0&&(E=i.TEXTURE0+Y-1),Q!==E&&(i.activeTexture(E),Q=E)}function Xe(E,$,W){W===void 0&&(Q===null?W=i.TEXTURE0+Y-1:W=Q);let ot=j[W];ot===void 0&&(ot={type:void 0,texture:void 0},j[W]=ot),(ot.type!==E||ot.texture!==$)&&(Q!==W&&(i.activeTexture(W),Q=W),i.bindTexture(E,$||Et[E]),ot.type=E,ot.texture=$)}function L(){let E=j[Q];E!==void 0&&E.type!==void 0&&(i.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function qe(){try{i.compressedTexImage2D(...arguments)}catch(E){Pt("WebGLState:",E)}}function ne(){try{i.compressedTexImage3D(...arguments)}catch(E){Pt("WebGLState:",E)}}function ie(){try{i.texSubImage2D(...arguments)}catch(E){Pt("WebGLState:",E)}}function ut(){try{i.texSubImage3D(...arguments)}catch(E){Pt("WebGLState:",E)}}function fe(){try{i.compressedTexSubImage2D(...arguments)}catch(E){Pt("WebGLState:",E)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(E){Pt("WebGLState:",E)}}function Dt(){try{i.texStorage2D(...arguments)}catch(E){Pt("WebGLState:",E)}}function M(){try{i.texStorage3D(...arguments)}catch(E){Pt("WebGLState:",E)}}function _(){try{i.texImage2D(...arguments)}catch(E){Pt("WebGLState:",E)}}function U(){try{i.texImage3D(...arguments)}catch(E){Pt("WebGLState:",E)}}function et(E){return m[E]!==void 0?m[E]:i.getParameter(E)}function K(E,$){m[E]!==$&&(i.pixelStorei(E,$),m[E]=$)}function st(E){Z.equals(E)===!1&&(i.scissor(E.x,E.y,E.z,E.w),Z.copy(E))}function ct(E){dt.equals(E)===!1&&(i.viewport(E.x,E.y,E.z,E.w),dt.copy(E))}function q(E,$){let W=l.get($);W===void 0&&(W=new WeakMap,l.set($,W));let ot=W.get(E);ot===void 0&&(ot=i.getUniformBlockIndex($,E.name),i.uniformBlockBinding($,ot,ot),W.set(E,ot))}function J(E,$,W){let it=l.get($).get(E);c[it]!==W&&(i.bindBufferBase(i.UNIFORM_BUFFER,it,W),c[it]=W)}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},m={},Q=null,j={},u={},c={},p=new WeakMap,x=[],y=null,f=!1,d=null,b=null,R=null,T=null,w=null,A=null,g=null,S=new Wt(0,0,0),O=0,P=!1,D=null,G=null,X=null,I=null,V=null,Z.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ft,disable:gt,bindFramebuffer:Ut,drawBuffers:Mt,useProgram:qt,setBlending:le,setMaterial:re,setFlipSided:he,setCullFace:Qt,setLineWidth:Le,setPolygonOffset:ce,setScissorTest:we,activeTexture:We,bindTexture:Xe,unbindTexture:L,compressedTexImage2D:qe,compressedTexImage3D:ne,texImage2D:_,texImage3D:U,pixelStorei:K,getParameter:et,updateUBOMapping:q,uniformBlockBinding:J,texStorage2D:Dt,texStorage3D:M,texSubImage2D:ie,texSubImage3D:ut,compressedTexSubImage2D:fe,compressedTexSubImage3D:Rt,scissor:st,viewport:ct,reset:at}}function v1(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Zt,h=new WeakMap,m=new Set,u,p=new WeakMap,x=new Set,y=new FinalizationRegistry(M=>x.delete(M)),f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(M,_){return f?new OffscreenCanvas(M,_):Hi("canvas")}function b(M,_,U){let et=1,K=Dt(M);if((K.width>U||K.height>U)&&(et=U/Math.max(K.width,K.height)),et<1)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap||typeof VideoFrame!="undefined"&&M instanceof VideoFrame){let st=Math.floor(et*K.width),ct=Math.floor(et*K.height);u===void 0&&(u=d(st,ct));let q=_?d(st,ct):u;return q.width=st,q.height=ct,q.getContext("2d").drawImage(M,0,0,st,ct),Ct("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+st+"x"+ct+")."),q}else return"data"in M&&Ct("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),M;return M}function R(M){return M.generateMipmaps}function T(M){i.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(M,_,U,et,K,st=!1){if(M!==null){if(i[M]!==void 0)return i[M];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ct;et&&(ct=t.get("EXT_texture_norm16"),ct||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=_;if(_===i.RED&&(U===i.FLOAT&&(q=i.R32F),U===i.HALF_FLOAT&&(q=i.R16F),U===i.UNSIGNED_BYTE&&(q=i.R8),U===i.UNSIGNED_SHORT&&ct&&(q=ct.R16_EXT),U===i.SHORT&&ct&&(q=ct.R16_SNORM_EXT)),_===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.R8UI),U===i.UNSIGNED_SHORT&&(q=i.R16UI),U===i.UNSIGNED_INT&&(q=i.R32UI),U===i.BYTE&&(q=i.R8I),U===i.SHORT&&(q=i.R16I),U===i.INT&&(q=i.R32I)),_===i.RG&&(U===i.FLOAT&&(q=i.RG32F),U===i.HALF_FLOAT&&(q=i.RG16F),U===i.UNSIGNED_BYTE&&(q=i.RG8),U===i.UNSIGNED_SHORT&&ct&&(q=ct.RG16_EXT),U===i.SHORT&&ct&&(q=ct.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RG8UI),U===i.UNSIGNED_SHORT&&(q=i.RG16UI),U===i.UNSIGNED_INT&&(q=i.RG32UI),U===i.BYTE&&(q=i.RG8I),U===i.SHORT&&(q=i.RG16I),U===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGB8UI),U===i.UNSIGNED_SHORT&&(q=i.RGB16UI),U===i.UNSIGNED_INT&&(q=i.RGB32UI),U===i.BYTE&&(q=i.RGB8I),U===i.SHORT&&(q=i.RGB16I),U===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),U===i.UNSIGNED_INT&&(q=i.RGBA32UI),U===i.BYTE&&(q=i.RGBA8I),U===i.SHORT&&(q=i.RGBA16I),U===i.INT&&(q=i.RGBA32I)),_===i.RGB&&(U===i.UNSIGNED_SHORT&&ct&&(q=ct.RGB16_EXT),U===i.SHORT&&ct&&(q=ct.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),_===i.RGBA){let J=st?ki:Vt.getTransfer(K);U===i.FLOAT&&(q=i.RGBA32F),U===i.HALF_FLOAT&&(q=i.RGBA16F),U===i.UNSIGNED_BYTE&&(q=J===$t?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&ct&&(q=ct.RGBA16_EXT),U===i.SHORT&&ct&&(q=ct.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function g(M,_){let U;return M?_===null||_===tn||_===ei?U=i.DEPTH24_STENCIL8:_===en?U=i.DEPTH32F_STENCIL8:_===Ci&&(U=i.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===tn||_===ei?U=i.DEPTH_COMPONENT24:_===en?U=i.DEPTH_COMPONENT32F:_===Ci&&(U=i.DEPTH_COMPONENT16),U}function S(M,_){return R(M)===!0||M.isFramebufferTexture&&M.minFilter!==ve&&M.minFilter!==Ie?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function O(M){let _=new WeakRef(M);n.get(M).__ref=_,x.add(_),y.register(M,_,_)}function P(M){let _=n.get(M).__ref;_!==void 0&&(x.delete(_),y.unregister(_))}function D(M){X(M.target)}function G(M){I(M.target)}function X(M){M.removeEventListener("dispose",D),P(M),Y(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&m.delete(M)}function I(M){M.removeEventListener("dispose",G),P(M),tt(M)}function V(){for(let M of x){let _=M.deref();_!==void 0&&(_.isRenderTarget===!0?I(_):X(_))}x.clear(),m.clear()}function Y(M){let _=n.get(M);if(_.__webglInit===void 0)return;let U=M.source,et=p.get(U);if(et){let K=et[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&k(M),Object.keys(et).length===0&&p.delete(U)}n.remove(M)}function k(M){let _=n.get(M);i.deleteTexture(_.__webglTexture);let U=M.source,et=p.get(U);delete et[_.__cacheKey],a.memory.textures--}function tt(M){let _=n.get(M);_.__depthDisposeCallback&&_.__depthDisposeCallback();let U=M.depthTexture;if(U&&U.renderTarget===M&&X(U),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let st=0;st<_.__webglFramebuffer[K].length;st++)i.deleteFramebuffer(_.__webglFramebuffer[K][st]);else i.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)i.deleteFramebuffer(_.__webglFramebuffer[K]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let et=M.textures;for(let K=0,st=et.length;K<st;K++){let ct=n.get(et[K]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(et[K])}n.remove(M)}let H=0;function Q(){H=0}function j(){return H}function vt(M){H=M}function It(){let M=H;return M>=s.maxTextures&&Ct("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,M}function Z(M){let _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.mipmapsAutoUpdate),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function dt(M,_){let U=n.get(M);if(M.isVideoTexture&&fe(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&U.__version!==M.version){let et=M.image;if(et===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{re(U,M,_);return}}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+_)}function xt(M,_){let U=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){re(U,M,_);return}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+_)}function Et(M,_){let U=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){re(U,M,_);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+_)}function ft(M,_){let U=n.get(M);if(M.version>0&&U.__version!==M.version){he(U,M,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+_)}let gt={[Ks]:i.REPEAT,[an]:i.CLAMP_TO_EDGE,[Qs]:i.MIRRORED_REPEAT},Ut={[ve]:i.NEAREST,[ec]:i.NEAREST_MIPMAP_NEAREST,[ss]:i.NEAREST_MIPMAP_LINEAR,[Ie]:i.LINEAR,[Ir]:i.LINEAR_MIPMAP_NEAREST,[An]:i.LINEAR_MIPMAP_LINEAR},Mt={[rc]:i.NEVER,[bo]:i.ALWAYS,[ac]:i.LESS,[Mo]:i.LEQUAL,[oc]:i.EQUAL,[So]:i.GEQUAL,[lc]:i.GREATER,[cc]:i.NOTEQUAL};function qt(M,_){if(_.type===en&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ie||_.magFilter===Ir||_.magFilter===ss||_.magFilter===An||_.minFilter===Ie||_.minFilter===Ir||_.minFilter===ss||_.minFilter===An)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,gt[_.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,gt[_.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,gt[_.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,Ut[_.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,Ut[_.minFilter]),_.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Mt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ve||_.minFilter!==ss&&_.minFilter!==An||_.type===en&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Xt(M,_){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",D),O(_));let et=_.source,K=p.get(et);K===void 0&&(K={},p.set(et,K));let st=Z(_);if(st!==M.__cacheKey){K[st]===void 0&&(K[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),K[st].usedTimes++;let ct=K[M.__cacheKey];ct!==void 0&&(K[M.__cacheKey].usedTimes--,ct.usedTimes===0&&k(_)),M.__cacheKey=st,M.__webglTexture=K[st].texture}return U}function zt(M,_,U){return Math.floor(Math.floor(M/U)/_)}function le(M,_,U,et){let st=M.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,U,et,_.data);else{st.sort((E,$)=>E.start-$.start);let ct=0;for(let E=1;E<st.length;E++){let $=st[ct],W=st[E],ot=$.start+$.count,it=zt(W.start,_.width,4),rt=zt($.start,_.width,4);W.start<=ot+1&&it===rt&&zt(W.start+W.count-1,_.width,4)===it?$.count=Math.max($.count,W.start+W.count-$.start):(++ct,st[ct]=W)}st.length=ct+1;let q=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),at=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let E=0,$=st.length;E<$;E++){let W=st[E],ot=Math.floor(W.start/4),it=Math.ceil(W.count/4),rt=ot%_.width,At=Math.floor(ot/_.width),Ot=it,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,At),e.texSubImage2D(i.TEXTURE_2D,0,rt,At,Ot,nt,U,et,_.data)}M.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,at)}}function re(M,_,U){let et=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(et=i.TEXTURE_3D);let K=Xt(M,_),st=_.source;e.bindTexture(et,M.__webglTexture,i.TEXTURE0+U);let ct=n.get(st);if(st.version!==ct.__version||K===!0){if(e.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap!="undefined"&&_.image instanceof ImageBitmap)===!1){let nt=Vt.getPrimaries(Vt.workingColorSpace),wt=_.colorSpace===wn?null:Vt.getPrimaries(_.colorSpace),Ft=_.colorSpace===wn||nt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let J=b(_.image,!1,s.maxTextureSize);J=Rt(_,J);let at=r.convert(_.format,_.colorSpace),E=r.convert(_.type),$=A(_.internalFormat,at,E,_.normalized,_.colorSpace,_.isVideoTexture);qt(et,_);let W,ot=_.mipmaps,it=_.isVideoTexture!==!0,rt=ct.__version===void 0||K===!0,At=st.dataReady,Ot=S(_,J);if(_.isDepthTexture)$=g(_.format===En,_.type),rt&&(it?e.texStorage2D(i.TEXTURE_2D,1,$,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,at,E,null));else if(_.isDataTexture)if(ot.length>0){it&&rt&&e.texStorage2D(i.TEXTURE_2D,Ot,$,ot[0].width,ot[0].height);for(let nt=0,wt=ot.length;nt<wt;nt++)W=ot[nt],it?At&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,W.width,W.height,at,E,W.data):e.texImage2D(i.TEXTURE_2D,nt,$,W.width,W.height,0,at,E,W.data);_.generateMipmaps=!1}else it?(rt&&e.texStorage2D(i.TEXTURE_2D,Ot,$,J.width,J.height),At&&le(_,J,at,E)):e.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,at,E,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){it&&rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,$,ot[0].width,ot[0].height,J.depth);for(let nt=0,wt=ot.length;nt<wt;nt++)if(W=ot[nt],_.format!==sn)if(at!==null)if(it){if(At)if(_.layerUpdates.size>0){let Ft=Io(W.width,W.height,_.format,_.type);for(let pt of _.layerUpdates){let Kt=W.data.subarray(pt*Ft/W.data.BYTES_PER_ELEMENT,(pt+1)*Ft/W.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,pt,W.width,W.height,1,at,Kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,W.width,W.height,J.depth,at,W.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,$,W.width,W.height,J.depth,0,W.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?At&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,W.width,W.height,J.depth,at,E,W.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,$,W.width,W.height,J.depth,0,at,E,W.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{it&&rt&&e.texStorage2D(i.TEXTURE_2D,Ot,$,ot[0].width,ot[0].height);for(let nt=0,wt=ot.length;nt<wt;nt++)W=ot[nt],_.format!==sn?at!==null?it?At&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,W.width,W.height,at,W.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,$,W.width,W.height,0,W.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?At&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,W.width,W.height,at,E,W.data):e.texImage2D(i.TEXTURE_2D,nt,$,W.width,W.height,0,at,E,W.data)}else if(_.isDataArrayTexture)if(it){if(rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,$,J.width,J.height,J.depth),At)if(_.layerUpdates.size>0){let nt=Io(J.width,J.height,_.format,_.type);for(let wt of _.layerUpdates){let Ft=J.data.subarray(wt*nt/J.data.BYTES_PER_ELEMENT,(wt+1)*nt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,J.width,J.height,1,at,E,Ft)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,at,E,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,J.width,J.height,J.depth,0,at,E,J.data);else if(_.isData3DTexture)it?(rt&&e.texStorage3D(i.TEXTURE_3D,Ot,$,J.width,J.height,J.depth),At&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,at,E,J.data)):e.texImage3D(i.TEXTURE_3D,0,$,J.width,J.height,J.depth,0,at,E,J.data);else if(_.isFramebufferTexture){if(rt)if(it)e.texStorage2D(i.TEXTURE_2D,Ot,$,J.width,J.height);else{let nt=J.width,wt=J.height;for(let Ft=0;Ft<Ot;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,$,nt,wt,0,at,E,null),nt>>=1,wt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),J.parentNode!==nt){nt.appendChild(J),m.add(_),nt.onpaint=wt=>{let Ft=wt.changedElements;for(let pt of m)Ft.includes(pt.image)&&(pt.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let Ft=i.RGBA,pt=i.RGBA,Kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ft,pt,Kt,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ot.length>0){if(it&&rt){let nt=Dt(ot[0]);e.texStorage2D(i.TEXTURE_2D,Ot,$,nt.width,nt.height)}for(let nt=0,wt=ot.length;nt<wt;nt++)W=ot[nt],it?At&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,at,E,W):e.texImage2D(i.TEXTURE_2D,nt,$,at,E,W);_.generateMipmaps=!1}else if(it){if(rt){let nt=Dt(J);e.texStorage2D(i.TEXTURE_2D,Ot,$,nt.width,nt.height)}At&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,E,J)}else e.texImage2D(i.TEXTURE_2D,0,$,at,E,J);R(_)&&_.mipmapsAutoUpdate===!0&&T(et),ct.__version=st.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function he(M,_,U){if(_.image.length!==6)return;let et=Xt(M,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+U);let st=n.get(K);if(K.version!==st.__version||et===!0){e.activeTexture(i.TEXTURE0+U);let ct=Vt.getPrimaries(Vt.workingColorSpace),q=_.colorSpace===wn?null:Vt.getPrimaries(_.colorSpace),J=_.colorSpace===wn||ct===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let at=_.isCompressedTexture||_.image[0].isCompressedTexture,E=_.image[0]&&_.image[0].isDataTexture,$=[];for(let pt=0;pt<6;pt++)!at&&!E?$[pt]=b(_.image[pt],!0,s.maxCubemapSize):$[pt]=E?_.image[pt].image:_.image[pt],$[pt]=Rt(_,$[pt]);let W=$[0],ot=r.convert(_.format,_.colorSpace),it=r.convert(_.type),rt=A(_.internalFormat,ot,it,_.normalized,_.colorSpace),At=_.isVideoTexture!==!0,Ot=st.__version===void 0||et===!0,nt=K.dataReady,wt=S(_,W);qt(i.TEXTURE_CUBE_MAP,_);let Ft;if(_.isDepthTexture){if(rt=g(_.format===En,_.type),Ot)if(At)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,rt,W.width,W.height);else for(let pt=0;pt<6;pt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,rt,W.width,W.height,0,ot,it,null)}else if(at){At&&Ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,rt,W.width,W.height);for(let pt=0;pt<6;pt++){Ft=$[pt].mipmaps;for(let Kt=0;Kt<Ft.length;Kt++){let ge=Ft[Kt];_.format!==sn?ot!==null?At?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Kt,0,0,ge.width,ge.height,ot,ge.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Kt,rt,ge.width,ge.height,0,ge.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Kt,0,0,ge.width,ge.height,ot,it,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Kt,rt,ge.width,ge.height,0,ot,it,ge.data)}}}else{if(Ft=_.mipmaps,At&&Ot){Ft.length>0&&wt++;let pt=Dt($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,rt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(E){At?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,$[pt].width,$[pt].height,ot,it,$[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,rt,$[pt].width,$[pt].height,0,ot,it,$[pt].data);for(let Kt=0;Kt<Ft.length;Kt++){let Rn=Ft[Kt].image[pt].image;At?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Kt+1,0,0,Rn.width,Rn.height,ot,it,Rn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Kt+1,rt,Rn.width,Rn.height,0,ot,it,Rn.data)}}else{At?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,ot,it,$[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,rt,ot,it,$[pt]);for(let Kt=0;Kt<Ft.length;Kt++){let ge=Ft[Kt];At?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Kt+1,0,0,ot,it,ge.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Kt+1,rt,ot,it,ge.image[pt])}}}R(_)&&_.mipmapsAutoUpdate===!0&&T(i.TEXTURE_CUBE_MAP),st.__version=K.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Qt(M,_,U,et,K,st){let ct=r.convert(U.format,U.colorSpace),q=r.convert(U.type),J=A(U.internalFormat,ct,q,U.normalized,U.colorSpace),at=n.get(_),E=n.get(U);if(E.__renderTarget=_,!at.__hasExternalTextures){let $=Math.max(1,_.width>>st),W=Math.max(1,_.height>>st);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,st,J,$,W,_.depth,0,ct,q,null):e.texImage2D(K,st,J,$,W,0,ct,q,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),ut(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,K,E.__webglTexture,0,ie(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,K,E.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(M,_,U){if(i.bindRenderbuffer(i.RENDERBUFFER,M),_.depthBuffer){let et=_.depthTexture,K=et&&et.isDepthTexture?et.type:null,st=g(_.stencilBuffer,K),ct=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(_),st,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(_),st,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,st,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,M)}else{let et=_.textures;for(let K=0;K<et.length;K++){let st=et[K],ct=r.convert(st.format,st.colorSpace),q=r.convert(st.type),J=A(st.internalFormat,ct,q,st.normalized,st.colorSpace);ut(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(_),J,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(_),J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(M,_,U){let et=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(_.depthTexture);K.__renderTarget=_;let st=et?_.depthTexture.image[0]:_.depthTexture.image;(!K.__webglTexture||st.width!==_.width||st.height!==_.height)&&(st.width=_.width,st.height=_.height,_.depthTexture.needsUpdate=!0),et?ft(_.depthTexture,0):dt(_.depthTexture,0);let ct=K.__webglTexture,q=ie(_),J=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,at=_.depthTexture.format===En?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Sn)ut(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,J,ct,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,at,J,ct,0);else if(_.depthTexture.format===En)ut(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,J,ct,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,at,J,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function we(M){let _=n.get(M),U=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){let et=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),et){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,et.removeEventListener("dispose",K)};et.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=et}if(M.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let et=0;et<6;et++)ce(_.__webglFramebuffer[et],M,et);else M.texture.mipmaps.length>0?ce(_.__webglFramebuffer[0],M,0):ce(_.__webglFramebuffer,M,0);else if(U){_.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[et]),_.__webglDepthbuffer[et]===void 0)_.__webglDepthbuffer[et]=i.createRenderbuffer(),Le(_.__webglDepthbuffer[et],M,!1);else{let K=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,st)}}else if(M.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Le(_.__webglDepthbuffer,M,!1);else{let K=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function We(M,_,U){let et=n.get(M);_!==void 0&&Qt(et.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&we(M)}function Xe(M){let _=M.texture,U=n.get(M),et=n.get(_);M.addEventListener("dispose",G),O(M);let K=M.textures,st=M.isWebGLCubeRenderTarget===!0,ct=K.length>1;if(ct||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=_.version,a.memory.textures++),st){U.__webglFramebuffer=[];for(let q=0;q<6;q++)if(_.mipmaps.length>0){U.__webglFramebuffer[q]=[];for(let J=0;J<_.mipmaps.length;J++)U.__webglFramebuffer[q][J]=i.createFramebuffer()}else U.__webglFramebuffer[q]=i.createFramebuffer()}else{if(_.mipmaps.length>0){U.__webglFramebuffer=[];for(let q=0;q<_.mipmaps.length;q++)U.__webglFramebuffer[q]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(ct)for(let q=0,J=K.length;q<J;q++){let at=n.get(K[q]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&ut(M)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let q=0;q<K.length;q++){let J=K[q];U.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[q]);let at=r.convert(J.format,J.colorSpace),E=r.convert(J.type),$=A(J.internalFormat,at,E,J.normalized,J.colorSpace,M.isXRRenderTarget===!0),W=ie(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,W,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,U.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(U.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),qt(i.TEXTURE_CUBE_MAP,_);for(let q=0;q<6;q++)if(_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Qt(U.__webglFramebuffer[q][J],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,J);else Qt(U.__webglFramebuffer[q],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);R(_)?T(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}else if(ct){for(let q=0,J=K.length;q<J;q++){let at=K[q],E=n.get(at),$=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&($=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,E.__webglTexture),qt($,at),Qt(U.__webglFramebuffer,M,at,i.COLOR_ATTACHMENT0+q,$,0),R(at)&&T($)}e.unbindTexture()}else{let q=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(q=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,et.__webglTexture),qt(q,_),_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Qt(U.__webglFramebuffer[J],M,_,i.COLOR_ATTACHMENT0,q,J);else Qt(U.__webglFramebuffer,M,_,i.COLOR_ATTACHMENT0,q,0);R(_)?T(q):_.mipmaps.length>0&&i.texParameteri(q,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}M.depthBuffer&&we(M)}function L(M){let _=M.textures;for(let U=0,et=_.length;U<et;U++){let K=_[U];if(R(K)&&K.mipmapsAutoUpdate===!0){let st=w(M),ct=n.get(K).__webglTexture;e.bindTexture(st,ct),T(st),e.unbindTexture()}}}let qe=[];function ne(M){if(M.samples>0){if(ut(M)===!1){let _=M.textures,U=M.width,et=M.height,K=i.COLOR_BUFFER_BIT,st=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(M),q=_.length>1;if(q)for(let at=0;at<_.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),M.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let at=0;at<_.length;at++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[at]);let E=n.get(_[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,E,0)}i.blitFramebuffer(0,0,U,et,0,0,U,et,K,i.NEAREST),c===!0&&(qe.length=0,qe.push(i.COLOR_ATTACHMENT0+at),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&qe.push(st),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let at=0;at<_.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,ct.__webglColorRenderbuffer[at]);let E=n.get(_[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,E,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&c){let _=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ie(M){return Math.min(s.maxSamples,M.samples)}function ut(M){let _=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function fe(M){let _=a.render.frame;h.get(M)!==_&&(h.set(M,_),M.update())}function Rt(M,_){let U=M.colorSpace,et=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||U!==Gi&&U!==wn&&(Vt.getTransfer(U)===$t?(et!==sn||K!==He)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",U)),_}function Dt(M){return typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame!="undefined"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=It,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=vt,this.setTexture2D=dt,this.setTexture2DArray=xt,this.setTexture3D=Et,this.setTextureCube=ft,this.rebindTextures=We,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=ut,this.dispose=V}function y1(i,t){function e(n,s=wn){let r,a=Vt.getTransfer(s);if(n===He)return i.UNSIGNED_BYTE;if(n===Lr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===go)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fo)return i.BYTE;if(n===po)return i.SHORT;if(n===Ci)return i.UNSIGNED_SHORT;if(n===Pr)return i.INT;if(n===tn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===_o)return i.ALPHA;if(n===xo)return i.RGB;if(n===sn)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===En)return i.DEPTH_STENCIL;if(n===vo)return i.RED;if(n===Nr)return i.RED_INTEGER;if(n===Hn)return i.RG;if(n===Ur)return i.RG_INTEGER;if(n===Fr)return i.RGBA_INTEGER;if(n===rs||n===as||n===os||n===ls)if(a===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===as)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===as)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===os)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ls)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Or||n===Br||n===zr||n===Gr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Br)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kr||n===Vr||n===Hr||n===Wr||n===Xr||n===cs||n===qr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kr||n===Vr)return a===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wr)return r.COMPRESSED_R11_EAC;if(n===Xr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===cs)return r.COMPRESSED_RG11_EAC;if(n===qr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yr||n===Zr||n===Jr||n===$r||n===Kr||n===Qr||n===jr||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$r)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ea)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===na)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ia)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ra)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===aa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===la||n===ca)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oa)return a===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ha||n===ua||n===hs||n===da)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ei?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var M1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S1=`
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

}`,Wo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Qi(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Oe({vertexShader:M1,fragmentShader:S1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new cn(new ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xo=class extends on{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,m=null,u=null,p=null,x=null,y=typeof XRWebGLBinding!="undefined",f=new Wo,d={},b=e.getContextAttributes(),R=null,T=null,w=[],A=[],g=new Zt,S=null,O=null,P=new Ce;P.viewport=new oe;let D=new Ce;D.viewport=new oe;let G=[P,D],X=new Er,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let dt=w[Z];return dt===void 0&&(dt=new Mi,w[Z]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Z){let dt=w[Z];return dt===void 0&&(dt=new Mi,w[Z]=dt),dt.getGripSpace()},this.getHand=function(Z){let dt=w[Z];return dt===void 0&&(dt=new Mi,w[Z]=dt),dt.getHandSpace()};function Y(Z){let dt=A.indexOf(Z.inputSource);if(dt===-1)return;let xt=w[dt];xt!==void 0&&(xt.update(Z.inputSource,Z.frame,l||a),xt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",tt);for(let Z=0;Z<w.length;Z++){let dt=A[Z];dt!==null&&(A[Z]=null,w[Z].disconnect(dt))}I=null,V=null,f.reset();for(let Z in d)delete d[Z];if(t.setRenderTarget(R),p=null,u=null,m=null,s=null,T=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(g.width,g.height,!1),O!==null){let Z=O.camera;Z.fov=O.fov,Z.zoom=O.zoom,Z.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return m===null&&y&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",k),s.addEventListener("inputsourceschange",tt),b.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(g),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Et=null,ft=null;b.depth&&(ft=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=b.stencil?En:Sn,Et=b.stencil?ei:tn);let gt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};m=this.getBinding(),u=m.createProjectionLayer(gt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),T=new ke(u.textureWidth,u.textureHeight,{format:sn,type:He,depthTexture:new Tn(u.textureWidth,u.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new ke(p.framebufferWidth,p.framebufferHeight,{format:sn,type:He,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),It.setContext(s),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function tt(Z){for(let dt=0;dt<Z.removed.length;dt++){let xt=Z.removed[dt],Et=A.indexOf(xt);Et>=0&&(A[Et]=null,w[Et].disconnect(xt))}for(let dt=0;dt<Z.added.length;dt++){let xt=Z.added[dt],Et=A.indexOf(xt);if(Et===-1){for(let gt=0;gt<w.length;gt++)if(gt>=A.length){A.push(xt),Et=gt;break}else if(A[gt]===null){A[gt]=xt,Et=gt;break}if(Et===-1)break}let ft=w[Et];ft&&ft.connect(xt)}}function H(Z,dt){dt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(dt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let dt=Z.near,xt=Z.far;f.texture!==null&&(f.depthNear>0&&(dt=f.depthNear),f.depthFar>0&&(xt=f.depthFar)),X.near=D.near=P.near=dt,X.far=D.far=P.far=xt,(I!==X.near||V!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),I=X.near,V=X.far),X.layers.mask=Z.layers.mask|6,P.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;let Et=Z.parent,ft=X.cameras;H(X,Et);for(let gt=0;gt<ft.length;gt++)H(ft[gt],Et);X.projectionMatrix.copy(P.projectionMatrix),X.projectionMatrixInverse.copy(P.projectionMatrixInverse),O===null&&Z.isPerspectiveCamera&&(O={camera:Z,fov:Z.fov,zoom:Z.zoom}),Q(Z,X,Et)};function Q(Z,dt,xt){xt===null?Z.matrix.copy(dt.matrixWorld):(Z.matrix.copy(xt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(dt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(dt.projectionMatrix),Z.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=tr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(X)},this.getCameraTexture=function(Z){return d[Z]};let j=null;function vt(Z,dt){if(h=dt.getViewerPose(l||a),x=dt,h!==null){let xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let Et=!1;xt.length!==X.cameras.length&&(X.cameras.length=0,Et=!0);for(let Mt=0;Mt<xt.length;Mt++){let qt=xt[Mt],Xt=null;if(p!==null)Xt=p.getViewport(qt);else{let le=m.getViewSubImage(u,qt);Xt=le.viewport,Mt===0&&(t.setRenderTargetTextures(T,le.colorTexture,le.depthStencilTexture),t.setRenderTarget(T))}let zt=G[Mt];zt===void 0&&(zt=new Ce,zt.layers.enable(Mt),zt.viewport=new oe,G[Mt]=zt),zt.matrix.fromArray(qt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(qt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Mt===0&&(X.matrix.copy(zt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Et===!0&&X.cameras.push(zt)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){m=n.getBinding();let Mt=m.getDepthInformation(xt[0]);Mt&&Mt.isValid&&Mt.texture&&f.init(Mt,s.renderState)}if(ft&&ft.includes("camera-access")&&y){t.state.unbindTexture(),m=n.getBinding();for(let Mt=0;Mt<xt.length;Mt++){let qt=xt[Mt].camera;if(qt){let Xt=d[qt];Xt||(Xt=new Qi,d[qt]=Xt);let zt=m.getCameraImage(qt);Xt.sourceTexture=zt}}}}for(let xt=0;xt<w.length;xt++){let Et=A[xt],ft=w[xt];Et!==null&&ft!==void 0&&ft.update(Et,dt,l||a)}j&&j(Z,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),x=null}let It=new kc;It.setAnimationLoop(vt),this.setAnimationLoop=function(Z){j=Z},this.dispose=function(){}}},b1=new se,Kc=new Lt;Kc.set(-1,0,0,0,1,0,0,0,1);function T1(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,wo(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,b,R,T){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),m(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),u(f,d),d.isMeshPhysicalMaterial&&p(f,d,T)):d.isMeshMatcapMaterial?(r(f,d),x(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),y(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?c(f,d,b,R):d.isSpriteMaterial?l(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Pe&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Pe&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let b=t.get(d),R=b.envMap,T=b.envMapRotation;R&&(f.envMap.value=R,f.envMapRotation.value.setFromMatrix4(b1.makeRotationFromEuler(T)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Kc),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function c(f,d,b,R){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*b,f.scale.value=R*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function l(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function m(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function p(f,d,b){f.ior.value=d.ior,d.diffuseRoughness>0&&(f.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=d.diffuseRoughnessMap,e(d.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pe&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.retroreflectivity>0&&(f.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,d){d.matcap&&(f.matcap.value=d.matcap)}function y(f,d){let b=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A1(i,t,e,n){let s={},r={};function a(b,R){let T=R.program;n.uniformBlockBinding(b,T,s[b.id])}function o(b,R){let T=s[b.id];T===void 0&&(x(b),T=c(b),s[b.id]=T,b.addEventListener("dispose",f));let w=R.program;n.updateUBOMapping(b,w);let A=t.render.frame;r[b.id]!==A&&(l(b),r[b.id]=A)}function c(b){let R=i.createBuffer(),T=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),R}function l(b){let R=s[b.id],T=b.uniforms,w=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let A=0,g=T.length;A<g;A++){let S=T[A];if(Array.isArray(S))for(let O=0,P=S.length;O<P;O++)h(S[O],A,O,w);else h(S,A,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,R,T,w){if(u(b,R,T,w)===!0){let A=b.__offset,g=b.value;if(Array.isArray(g)){let S=0;for(let O=0;O<g.length;O++){let P=g[O],D=y(P,!0);m(P,b.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else m(g,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,b.__data)}}function m(b,R,T){typeof b=="number"||typeof b=="boolean"?R[T]=b:b.isMatrix3?(R[T]=b.elements[0],R[T+1]=b.elements[1],R[T+2]=b.elements[2],R[T+3]=0,R[T+4]=b.elements[3],R[T+5]=b.elements[4],R[T+6]=b.elements[5],R[T+7]=0,R[T+8]=b.elements[6],R[T+9]=b.elements[7],R[T+10]=b.elements[8],R[T+11]=0):ArrayBuffer.isView(b)?R.set(b.subarray(0,R.length-T),T):b.toArray(R,T)}function u(b,R,T,w){let A=b.value,g=R+"_"+T;if(Array.isArray(A)){w[g]===void 0&&(w[g]=[]);let S=w[g],O=!1;for(let P=0;P<A.length;P++)p(A[P],S,P)===!0&&(O=!0);return O}return p(A,w,g)}function p(b,R,T){if(R[T]===void 0)return typeof b=="number"||typeof b=="boolean"?R[T]=b:ArrayBuffer.isView(b)?R[T]=b.slice():R[T]=b.clone(),!0;{let w=R[T];if(typeof b=="number"||typeof b=="boolean"){if(w!==b)return R[T]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(w.equals(b)===!1)return w.copy(b),!0}}return!1}function x(b){let R=b.uniforms,T=0,w=16;for(let g=0,S=R.length;g<S;g++){let O=Array.isArray(R[g])?R[g]:[R[g]];for(let P=0,D=O.length;P<D;P++){let G=O[P],X=Array.isArray(G.value)?G.value:[G.value],I=Array.isArray(R[g])||Array.isArray(G.value),V=T;for(let k=0,tt=X.length;k<tt;k++){let H=X[k],Q=y(H,I),j=T%w,vt=j%Q.boundary,It=j+vt;T+=vt,It!==0&&w-It<Q.storage&&(T+=w-It),k===0&&(V=T),T+=Q.storage}let Y=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new Y((T-V)/Float32Array.BYTES_PER_ELEMENT),G.__offset=V}}let A=T%w;return A>0&&(T+=w-A),b.__size=T,b.__cache={},this}function y(b,R){let T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=16,T.storage=48):b.isMatrix4?(T.boundary=16,T.storage=64):b.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(T.boundary=16,T.storage=b.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",b),R===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function f(b){let R=b.target;R.removeEventListener("dispose",f),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function d(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:d}}var E1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),dn=null;function w1(){return dn===null&&(dn=new rr(E1,16,16,Hn,nn),dn.name="DFG_LUT",dn.minFilter=Ie,dn.magFilter=Ie,dn.wrapS=an,dn.wrapT=an,dn.generateMipmaps=!1,dn.needsUpdate=!0),dn}var ga=class{constructor(t={}){let{canvas:e=uc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:p=He}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let y=p,f=new Set([Fr,Ur,Nr]),d=new Set([He,tn,Ci,ei,Lr,Dr]),b=new Uint32Array(4),R=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},w=null,A=null,g=[],S=[],O=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,G=null,X=null,I=null,V=null;this._outputColorSpace=Ge;let Y=0,k=0,tt=null,H=-1,Q=null,j=new oe,vt=new oe,It=null,Z=new Wt(0),dt=0,xt=e.width,Et=e.height,ft=1,gt=null,Ut=null,Mt=new oe(0,0,xt,Et),qt=new oe(0,0,xt,Et),Xt=!1,zt=new Kn,le=new ar,re=!1,he=!1,Qt=new se,Le=new B,ce=new oe,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Xe(){return tt===null?ft:1}let L=n;function qe(v,C){return e.getContext(v,C)}let ne,ie,ut,fe,Rt,Dt,M,_,U,et,K,st,ct,q,J,at,E,$,W,ot,it,rt,At;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",pt,!1),L===null){let C="webgl2";if(L=qe(C,v),L===null)throw qe(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(v){throw e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Pt("WebGLRenderer: "+v.message),v}function Ot(){ne=new Bf(L),ne.init(),it=new y1(L,ne),ie=new wf(L,ne,t,it),ut=new x1(L,ne),ie.reversedDepthBuffer&&u&&ut.buffers.depth.setReversed(!0),X=L.createFramebuffer(),I=L.createFramebuffer(),V=L.createFramebuffer(),fe=new kf(L),Rt=new s1,Dt=new v1(L,ne,ut,Rt,ie,it,fe),M=new Of(P),_=new Vh(L),rt=new Af(L,_),U=new zf(L,_,fe,rt),et=new Hf(L,U,_,rt,fe),$=new Vf(L,ie,Dt),J=new Rf(Rt),K=new i1(P,M,ne,ie,rt,J),st=new T1(P,Rt),ct=new a1,q=new d1(ne),E=new Tf(P,M,ut,et,x,c),at=new _1(P,et,ie),At=new A1(L,fe,ie,ut),W=new Ef(L,ne,fe),ot=new Gf(L,ne,fe),fe.programs=K.programs,P.capabilities=ie,P.extensions=ne,P.properties=Rt,P.renderLists=ct,P.shadowMap=at,P.state=ut,P.info=fe}y!==He&&(O=new Xf(y,e.width,e.height,o,s,r));let nt=new Xo(P,L);this.xr=nt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let v=ne.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ne.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(v){v!==void 0&&(ft=v,this.setSize(xt,Et,!1))},this.getSize=function(v){return v.set(xt,Et)},this.setSize=function(v,C,z=!0){if(nt.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=v,Et=C,e.width=Math.floor(v*ft),e.height=Math.floor(C*ft),z===!0&&(e.style.width=v+"px",e.style.height=C+"px"),O!==null&&O.setSize(e.width,e.height),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(xt*ft,Et*ft).floor()},this.setDrawingBufferSize=function(v,C,z){xt=v,Et=C,ft=z,e.width=Math.floor(v*z),e.height=Math.floor(C*z),this.setViewport(0,0,v,C)},this.setEffects=function(v){if(y===He){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let C=0;C<v.length;C++)if(v[C].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(j)},this.getViewport=function(v){return v.copy(Mt)},this.setViewport=function(v,C,z,N){v.isVector4?Mt.set(v.x,v.y,v.z,v.w):Mt.set(v,C,z,N),ut.viewport(j.copy(Mt).multiplyScalar(Xe()).round())},this.getScissor=function(v){return v.copy(qt)},this.setScissor=function(v,C,z,N){v.isVector4?qt.set(v.x,v.y,v.z,v.w):qt.set(v,C,z,N),ut.scissor(vt.copy(qt).multiplyScalar(Xe()).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(v){ut.setScissorTest(Xt=v)},this.setOpaqueSort=function(v){gt=v},this.setTransparentSort=function(v){Ut=v},this.getClearColor=function(v){return v.copy(E.getClearColor())},this.setClearColor=function(){E.setClearColor(...arguments)},this.getClearAlpha=function(){return E.getClearAlpha()},this.setClearAlpha=function(){E.setClearAlpha(...arguments)},this.clear=function(v=!0,C=!0,z=!0){let N=0;if(v){let F=!1;if(tt!==null){let ht=tt.texture.format;F=f.has(ht)}if(F){let ht=tt.texture.type,yt=d.has(ht),lt=E.getClearColor(),_t=E.getClearAlpha(),Tt=lt.r,Nt=lt.g,Gt=lt.b;yt?(b[0]=Tt,b[1]=Nt,b[2]=Gt,b[3]=_t,L.clearBufferuiv(L.COLOR,0,b)):(R[0]=Tt,R[1]=Nt,R[2]=Gt,R[3]=_t,L.clearBufferiv(L.COLOR,0,R))}else N|=L.COLOR_BUFFER_BIT}C&&(N|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(N|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N!==0&&L.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),G=v},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),E.dispose(),ct.dispose(),q.dispose(),Dt.dispose(),Rt.dispose(),M.dispose(),et.dispose(),U.dispose(),rt.dispose(),At.dispose(),K.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Jo),nt.removeEventListener("sessionend",$o),Wn.stop()};function wt(v){v.preventDefault(),Ao("WebGLRenderer: Context Lost."),D=!0}function Ft(){Ao("WebGLRenderer: Context Restored."),D=!1;let v=fe.autoReset,C=at.enabled,z=at.autoUpdate,N=at.needsUpdate,F=at.type;Ot(),fe.autoReset=v,at.enabled=C,at.autoUpdate=z,at.needsUpdate=N,at.type=F}function pt(v){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Kt(v){let C=v.target;C.removeEventListener("dispose",Kt),ge(C)}function ge(v){Rn(v),Rt.remove(v)}function Rn(v){let C=Rt.get(v).programs;C!==void 0&&(C.forEach(function(z){K.releaseProgram(z)}),v.isShaderMaterial&&K.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,z,N,F,ht){C===null&&(C=we);let yt=F.isMesh&&F.matrixWorld.determinantAffine()<0,lt=eh(v,C,z,N,F);ut.setMaterial(N,yt);let _t=z.index,Tt=1;if(N.wireframe===!0){if(_t=U.getWireframeAttribute(z),_t===void 0)return;Tt=2}let Nt=z.drawRange,Gt=z.attributes.position,St=Nt.start*Tt,kt=(Nt.start+Nt.count)*Tt;ht!==null&&(St=Math.max(St,ht.start*Tt),kt=Math.min(kt,(ht.start+ht.count)*Tt)),_t!==null?(St=Math.max(St,0),kt=Math.min(kt,_t.count)):Gt!=null&&(St=Math.max(St,0),kt=Math.min(kt,Gt.count));let ue=kt-St;if(ue<0||ue===1/0)return;rt.setup(F,N,lt,z,_t);let te,jt=W;if(_t!==null&&(te=_.get(_t),jt=ot,jt.setIndex(te)),F.isMesh)N.wireframe===!0?(ut.setLineWidth(N.wireframeLinewidth*Xe()),jt.setMode(L.LINES)):jt.setMode(L.TRIANGLES);else if(F.isLine){let Se=N.linewidth;Se===void 0&&(Se=1),ut.setLineWidth(Se*Xe()),F.isLineSegments?jt.setMode(L.LINES):F.isLineLoop?jt.setMode(L.LINE_LOOP):jt.setMode(L.LINE_STRIP)}else F.isPoints?jt.setMode(L.POINTS):F.isSprite&&jt.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Se=F._multiDrawStarts,bt=F._multiDrawCounts,Re=F._multiDrawCount,Jt=_t?_.get(_t).bytesPerElement:1,Xn=Rt.get(N).currentProgram.getUniforms();for(let be=0;be<Re;be++)Xn.setValue(L,"_gl_DrawID",be),jt.render(Se[be]/Jt,bt[be])}else if(F.isInstancedMesh)jt.renderInstances(St,ue,F.count);else if(z.isInstancedBufferGeometry){let Se=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,bt=Math.min(z.instanceCount,Se);jt.renderInstances(St,ue,bt)}else jt.render(St,ue)};function Zo(v,C,z,N){G!==null&&v.isNodeMaterial&&G.setObject(N,v),re===!0&&J.setState(v,z,!1),v.transparent===!0&&v.side===hn&&v.forceSinglePass===!1?(v.side=Pe,v.needsUpdate=!0,Li(v,C,N),v.side=Vn,v.needsUpdate=!0,Li(v,C,N),v.side=hn):Li(v,C,N)}this.compile=function(v,C,z=null){z===null&&(z=v),G!==null&&G.renderStart(v,C,z),A=q.get(z),A.init(C),S.push(A),z.traverseVisible(function(F){F.isLight&&F.layers.test(C.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),v!==z&&v.traverseVisible(function(F){F.isLight&&F.layers.test(C.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),A.setupLights(),G!==null&&G.updateLights(A.state.lightsArray),he=this.localClippingEnabled,re=J.init(this.clippingPlanes,he),re===!0&&J.setGlobalState(this.clippingPlanes,C),G!==null&&at.render(A.state.shadowsArray,z,C);let N=new Set;return v.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ht=F.material;if(ht)if(Array.isArray(ht))for(let yt=0;yt<ht.length;yt++){let lt=ht[yt];Zo(lt,z,C,F),N.add(lt)}else Zo(ht,z,C,F),N.add(ht)}),A=S.pop(),G!==null&&G.renderEnd(),N},this.compileAsync=function(v,C,z=null){let N=this.compile(v,C,z);return new Promise(F=>{function ht(){if(N.forEach(function(yt){let _t=Rt.get(yt).currentProgram;(_t===void 0||_t.isReady())&&N.delete(yt)}),N.size===0){F(v);return}setTimeout(ht,10)}ne.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Ma=null;function jc(v){Ma&&Ma(v)}function Jo(){Wn.stop()}function $o(){Wn.start()}let Wn=new kc;Wn.setAnimationLoop(jc),typeof self!="undefined"&&Wn.setContext(self),this.setAnimationLoop=function(v){Ma=v,nt.setAnimationLoop(v),v===null?Wn.stop():Wn.start()},nt.addEventListener("sessionstart",Jo),nt.addEventListener("sessionend",$o),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;G!==null&&G.renderStart(v,C);let z=nt.enabled===!0&&nt.isPresenting===!0,N=O!==null&&(tt===null||z)&&O.begin(P,tt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(C),C=nt.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,C,tt),A=q.get(v,S.length),A.init(C),A.state.textureUnits=Dt.getTextureUnits(),S.push(A),Qt.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?le.setFromArrayCamera(C):zt.setFromProjectionMatrix(Qt,Ze,C.reversedDepth),he=this.localClippingEnabled,re=J.init(this.clippingPlanes,he),w=ct.get(v,g.length),w.init(),g.push(w),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let yt=P.xr.getDepthSensingMesh();yt!==null&&Sa(yt,C,-1/0,P.sortObjects)}Sa(v,C,0,P.sortObjects),w.finish(),G!==null&&G.updateLights(A.state.lightsArray),P.sortObjects===!0&&w.sort(gt,Ut),We=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,We&&E.addToRenderList(w,v),this.info.autoReset===!0&&this.info.reset(),re===!0&&J.beginShadows();let F=A.state.shadowsArray;if(at.render(F,v,C),re===!0&&J.endShadows(),(N&&O.hasRenderPass())===!1){let yt=w.opaque,lt=w.transmissive;if(A.setupLights(),C.isArrayCamera){let _t=C.cameras;if(lt.length>0)for(let Tt=0,Nt=_t.length;Tt<Nt;Tt++){let Gt=_t[Tt];Qo(yt,lt,v,Gt)}We&&E.render(v);for(let Tt=0,Nt=_t.length;Tt<Nt;Tt++){let Gt=_t[Tt];Ko(w,v,Gt,Gt.viewport)}}else lt.length>0&&Qo(yt,lt,v,C),We&&E.render(v),Ko(w,v,C)}tt!==null&&k===0&&(Dt.updateMultisampleRenderTarget(tt),Dt.updateRenderTargetMipmap(tt)),N&&O.end(P),v.isScene===!0&&v.onAfterRender(P,v,C),rt.resetDefaultState(),H=-1,Q=null,S.pop(),S.length>0?(A=S[S.length-1],Dt.setTextureUnits(A.state.textureUnits),re===!0&&J.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,G!==null&&G.renderEnd()};function Sa(v,C,z,N){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLight)A.pushLight(v),v.castShadow&&A.pushShadow(v);else if(v.isSprite){let yt=C.isArrayCamera?le:zt;if(!v.frustumCulled||v.intersectsFrustum(yt)){N&&ce.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Qt);let lt=et.update(v),_t=v.material;_t.visible&&w.push(v,lt,_t,z,ce.z,null,C)}}else if(v.isMesh||v.isLine||v.isPoints){let yt=C.isArrayCamera?le:zt;if(!v.frustumCulled||v.intersectsFrustum(yt)){let lt=et.update(v),_t=v.material;if(N&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ce.copy(v.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),ce.copy(lt.boundingSphere.center)),ce.applyMatrix4(v.matrixWorld).applyMatrix4(Qt)),Array.isArray(_t)){let Tt=lt.groups;for(let Nt=0,Gt=Tt.length;Nt<Gt;Nt++){let St=Tt[Nt],kt=_t[St.materialIndex];kt&&kt.visible&&w.push(v,lt,kt,z,ce.z,St,C)}}else _t.visible&&w.push(v,lt,_t,z,ce.z,null,C)}}}let ht=v.children;for(let yt=0,lt=ht.length;yt<lt;yt++)Sa(ht[yt],C,z,N)}function Ko(v,C,z,N){let{opaque:F,transmissive:ht,transparent:yt}=v;A.setupLightsView(z),re===!0&&J.setGlobalState(P.clippingPlanes,z),N&&ut.viewport(j.copy(N)),F.length>0&&gs(F,C,z),ht.length>0&&gs(ht,C,z),yt.length>0&&gs(yt,C,z),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Qo(v,C,z,N){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[N.id]===void 0){let St=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[N.id]=new ke(1,1,{generateMipmaps:!0,type:St?nn:He,minFilter:An,samples:Math.max(4,ie.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Vt.workingColorSpace})}let ht=A.state.transmissionRenderTarget[N.id],yt=N.viewport||j;ht.setSize(yt.z*P.transmissionResolutionScale,yt.w*P.transmissionResolutionScale);let lt=P.getRenderTarget(),_t=P.getActiveCubeFace(),Tt=P.getActiveMipmapLevel();P.setRenderTarget(ht),P.getClearColor(Z),dt=P.getClearAlpha(),dt<1&&P.setClearColor(16777215,.5),P.clear(),We&&E.render(z);let Nt=P.toneMapping;P.toneMapping=un;let Gt=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),A.setupLightsView(N),re===!0&&J.setGlobalState(P.clippingPlanes,N),gs(v,z,N),Dt.updateMultisampleRenderTarget(ht),Dt.updateRenderTargetMipmap(ht),ne.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let kt=0,ue=C.length;kt<ue;kt++){let te=C[kt],{object:jt,geometry:Se,material:bt,group:Re}=te;if(bt.side===hn&&jt.layers.test(N.layers)){let Jt=bt.side;bt.side=Pe,bt.needsUpdate=!0,jo(jt,z,N,Se,bt,Re),bt.side=Jt,bt.needsUpdate=!0,St=!0}}St===!0&&(Dt.updateMultisampleRenderTarget(ht),Dt.updateRenderTargetMipmap(ht))}P.setRenderTarget(lt,_t,Tt),P.setClearColor(Z,dt),Gt!==void 0&&(N.viewport=Gt),P.toneMapping=Nt}function gs(v,C,z){let N=C.isScene===!0?C.overrideMaterial:null;for(let F=0,ht=v.length;F<ht;F++){let yt=v[F],{object:lt,geometry:_t,group:Tt}=yt,Nt=yt.material;Nt.allowOverride===!0&&N!==null&&(Nt=N),lt.layers.test(z.layers)&&jo(lt,C,z,_t,Nt,Tt)}}function jo(v,C,z,N,F,ht){G!==null&&F.isNodeMaterial&&G.setObject(v,F),v.onBeforeRender(P,C,z,N,F,ht),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(P,C,z,N,v,ht),F.transparent===!0&&F.side===hn&&F.forceSinglePass===!1?(F.side=Pe,F.needsUpdate=!0,P.renderBufferDirect(z,C,N,F,v,ht),F.side=Vn,F.needsUpdate=!0,P.renderBufferDirect(z,C,N,F,v,ht),F.side=hn):P.renderBufferDirect(z,C,N,F,v,ht),v.onAfterRender(P,C,z,N,F,ht)}function tl(v){let C=0;for(let z of v)z.texture!==null&&C++;return C}function Li(v,C,z){C.isScene!==!0&&(C=we);let N=Rt.get(v),F=A.state.lights,ht=A.state.shadowsArray,yt=F.state.version,lt=K.getParameters(v,F.state,ht,C,z,A.state.lightProbeGridArray),_t=K.getProgramCacheKey(lt),Tt=N.programs;N.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,N.fog=C.fog;let Nt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;N.envMap=M.get(v.envMap||N.environment,Nt),N.envMapRotation=N.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,Tt===void 0&&(v.addEventListener("dispose",Kt),Tt=new Map,N.programs=Tt,N.programVariants=new Map);let Gt=Tt.get(_t);if(Gt!==void 0){if(N.currentProgram===Gt&&N.lightsStateVersion===yt)return nl(v,lt),Gt}else lt.uniforms=K.getUniforms(v),G!==null&&v.isNodeMaterial&&G.build(v,z,lt),v.onBeforeCompile(lt,P),Gt=K.acquireProgram(lt,_t),Tt.set(_t,Gt),N.uniforms=lt.uniforms;let St=N.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(St.clippingPlanes=J.uniform),nl(v,lt),N.needsLights=ih(v),N.lightsStateVersion=yt,N.needsLights&&(St.ambientLightColor.value=F.state.ambient,St.lightProbe.value=F.state.probe,St.sunLights.value=F.state.sun,St.sunLightShadows.value=F.state.sunShadow,St.directionalLights.value=F.state.directional,St.directionalLightShadows.value=F.state.directionalShadow,St.spotLights.value=F.state.spot,St.spotLightShadows.value=F.state.spotShadow,St.rectAreaLights.value=F.state.rectArea,St.ltc_1.value=F.state.rectAreaLTC1,St.ltc_2.value=F.state.rectAreaLTC2,St.pointLights.value=F.state.point,St.pointLightShadows.value=F.state.pointShadow,St.hemisphereLights.value=F.state.hemi,St.sunShadowMatrix.value=F.state.sunShadowMatrix,St.sunShadowCascade.value=F.state.sunShadowCascade,St.directionalShadowMatrix.value=F.state.directionalShadowMatrix,St.spotLightMatrix.value=F.state.spotLightMatrix,St.spotLightMap.value=F.state.spotLightMap,St.pointShadowMatrix.value=F.state.pointShadowMatrix),N.numLightProbeGrids=tl(A.state.lightProbeGridArray),N.currentProgram=Gt,N.uniformsList=null,Gt}function th(v,C,z,N,F){let ht=Rt.get(v),yt=ht.currentProgram.id+","+N+","+F,lt=ht.programVariants.get(yt);return lt===void 0?(lt=Li(v,C,z),ht.programVariants.set(yt,lt)):(ht.currentProgram=lt,ht.uniformsList=null,ht.outputColorSpace=N,ht.toneMapping=F),lt}function el(v){if(v.uniformsList===null){let C=v.currentProgram.getUniforms();v.uniformsList=Ii.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function nl(v,C){let z=Rt.get(v);z.outputColorSpace=C.outputColorSpace,z.batching=C.batching,z.batchingColor=C.batchingColor,z.instancing=C.instancing,z.instancingColor=C.instancingColor,z.instancingMorph=C.instancingMorph,z.skinning=C.skinning,z.morphTargets=C.morphTargets,z.morphNormals=C.morphNormals,z.morphColors=C.morphColors,z.morphTargetsCount=C.morphTargetsCount,z.numClippingPlanes=C.numClippingPlanes,z.numIntersection=C.numClipIntersection,z.vertexAlphas=C.vertexAlphas,z.vertexTangents=C.vertexTangents,z.toneMapping=C.toneMapping}function eh(v,C,z,N,F){C.isScene!==!0&&(C=we),Dt.resetTextureUnits();let ht=C.fog,yt=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?C.environment:null,lt=tt===null?P.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Vt.workingColorSpace,_t=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,Tt=M.get(N.envMap||yt,_t),Nt=N.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Gt=!!z.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),St=!!z.morphAttributes.position,kt=!!z.morphAttributes.normal,ue=!!z.morphAttributes.color,te=un;N.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(te=P.toneMapping);let jt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Se=jt!==void 0?jt.length:0,bt=Rt.get(N),Re=A.state.lights;if(re===!0&&(he===!0||v!==Q)){let ae=v===Q&&N.id===H;J.setState(N,v,ae)}let Jt=!1,Xn=!1;N.version===bt.__version?bt.needsLights&&bt.lightsStateVersion!==Re.state.version||F.isBatchedMesh&&bt.batching===!1||!F.isBatchedMesh&&bt.batching===!0||F.isBatchedMesh&&bt.batchingColor===!0&&F._colorsTexture===null||F.isBatchedMesh&&bt.batchingColor===!1&&F._colorsTexture!==null||F.isInstancedMesh&&bt.instancing===!1||!F.isInstancedMesh&&bt.instancing===!0||F.isSkinnedMesh&&bt.skinning===!1||!F.isSkinnedMesh&&bt.skinning===!0||F.isInstancedMesh&&bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&bt.instancingMorph===!1&&F.morphTexture!==null||bt.envMap!==Tt||N.fog===!0&&bt.fog!==ht||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==J.numPlanes||bt.numIntersection!==J.numIntersection)||bt.vertexAlphas!==Nt||bt.vertexTangents!==Gt||bt.morphTargets!==St||bt.morphNormals!==kt||bt.morphColors!==ue||bt.morphTargetsCount!==Se||bt.numLightProbeGrids!==tl(A.state.lightProbeGridArray)?Jt=!0:(bt.outputColorSpace!==lt||bt.toneMapping!==te)&&(Xn=!0):(Jt=!0,bt.__version=N.version);let be=bt.currentProgram;(Jt===!0||Xn===!0)&&(be=Xn===!0?th(N,C,F,lt,te):Li(N,C,F),G&&N.isNodeMaterial&&G.onUpdateProgram(N,be,bt));let _s=!1,Cn=!1,qn=!1,Yt=be.getUniforms(),ye=bt.uniforms;if(ut.useProgram(be.program)&&(_s=!0,Cn=!0,qn=!0),N.id!==H&&(H=N.id,Cn=!0),_s||Q!==v){ut.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Yt.setValue(L,"projectionMatrix",v.projectionMatrix),Yt.setValue(L,"viewMatrix",v.matrixWorldInverse);let _e=Yt.map.cameraPosition;_e!==void 0&&_e.setValue(L,Le.setFromMatrixPosition(v.matrixWorld)),ie.logarithmicDepthBuffer&&Yt.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Yt.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Cn=!0,qn=!0)}if(bt.needsLights&&(Re.state.sunShadowMap.length>0&&Yt.setValue(L,"sunShadowMap",Re.state.sunShadowMap,Dt),Re.state.directionalShadowMap.length>0&&Yt.setValue(L,"directionalShadowMap",Re.state.directionalShadowMap,Dt),Re.state.spotShadowMap.length>0&&Yt.setValue(L,"spotShadowMap",Re.state.spotShadowMap,Dt),Re.state.pointShadowMap.length>0&&Yt.setValue(L,"pointShadowMap",Re.state.pointShadowMap,Dt)),F.isSkinnedMesh){Yt.setOptional(L,F,"bindMatrix"),Yt.setOptional(L,F,"bindMatrixInverse");let ae=F.skeleton;ae&&(ae.boneTexture===null&&ae.computeBoneTexture(),Yt.setValue(L,"boneTexture",ae.boneTexture,Dt))}F.isBatchedMesh&&(Yt.setOptional(L,F,"batchingTexture"),Yt.setValue(L,"batchingTexture",F._matricesTexture,Dt),Yt.setOptional(L,F,"batchingIdTexture"),Yt.setValue(L,"batchingIdTexture",F._indirectTexture,Dt),Yt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Yt.setValue(L,"batchingColorTexture",F._colorsTexture,Dt));let Je=z.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&$.update(F,z,be),(Cn||bt.receiveShadow!==F.receiveShadow)&&(bt.receiveShadow=F.receiveShadow,Yt.setValue(L,"receiveShadow",F.receiveShadow)),(N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial)&&N.envMap===null&&C.environment!==null&&(ye.envMapIntensity.value=C.environmentIntensity),ye.dfgLUT!==void 0&&(ye.dfgLUT.value=w1()),Cn){if(Yt.setValue(L,"toneMappingExposure",P.toneMappingExposure),bt.needsLights&&nh(ye,qn),ht&&N.fog===!0&&st.refreshFogUniforms(ye,ht),st.refreshMaterialUniforms(ye,N,ft,Et,A.state.transmissionRenderTarget[v.id]),bt.needsLights&&bt.numLightProbeGrids>0){let ae=T,_e=0;for(let pn of A.state.lightProbeGridArray)pn.texture!==null&&(ae.textures[_e]=pn.texture,ae.min[_e]=pn.boundingBox.min,ae.max[_e]=pn.boundingBox.max,ae.resolution[_e]=pn.resolution,_e++);for(let pn in ae)ae[pn].length=_e;ye.probesSH.value=ae.textures,ye.probesMin.value=ae.min,ye.probesMax.value=ae.max,ye.probesResolution.value=ae.resolution}Ii.upload(L,el(bt),ye,Dt)}if(N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ii.upload(L,el(bt),ye,Dt),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Yt.setValue(L,"center",F.center),Yt.setValue(L,"modelViewMatrix",F.modelViewMatrix),Yt.setValue(L,"normalMatrix",F.normalMatrix),Yt.setValue(L,"modelMatrix",F.matrixWorld),N.uniformsGroups!==void 0){let ae=N.uniformsGroups;for(let _e=0,pn=ae.length;_e<pn;_e++){let sl=ae[_e];At.update(sl,be),At.bind(sl,be)}}return be}function nh(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.sunLights.needsUpdate=C,v.sunLightShadows.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function ih(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(v,C,z){let N=Rt.get(v);N.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),Rt.get(v.texture).__webglTexture=C,Rt.get(v.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:z,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,C){let z=Rt.get(v);z.__webglFramebuffer=C,z.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(v,C=0,z=0){tt=v,Y=C,k=z;let N=null,F=!1,ht=!1;if(v){let lt=Rt.get(v);if(lt.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(L.FRAMEBUFFER,lt.__webglFramebuffer),j.copy(v.viewport),vt.copy(v.scissor),It=v.scissorTest,ut.viewport(j),ut.scissor(vt),ut.setScissorTest(It),H=-1;return}else if(lt.__webglFramebuffer===void 0)Dt.setupRenderTarget(v);else if(lt.__hasExternalTextures)Dt.rebindTextures(v,Rt.get(v.texture).__webglTexture,Rt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Nt=v.depthTexture;if(lt.__boundDepthTexture!==Nt){if(Nt!==null&&Rt.has(Nt)&&(v.width!==Nt.image.width||v.height!==Nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(v)}}let _t=v.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(ht=!0);let Tt=Rt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Tt[C])?N=Tt[C][z]:N=Tt[C],F=!0):v.samples>0&&Dt.useMultisampledRTT(v)===!1?N=Rt.get(v).__webglMultisampledFramebuffer:Array.isArray(Tt)?N=Tt[z]:N=Tt,j.copy(v.viewport),vt.copy(v.scissor),It=v.scissorTest}else j.copy(Mt).multiplyScalar(ft).floor(),vt.copy(qt).multiplyScalar(ft).floor(),It=Xt;if(z!==0&&(N=X),ut.bindFramebuffer(L.FRAMEBUFFER,N)&&ut.drawBuffers(v,N),ut.viewport(j),ut.scissor(vt),ut.setScissorTest(It),F){let lt=Rt.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+C,lt.__webglTexture,z)}else if(ht){let lt=C;for(let _t=0;_t<v.textures.length;_t++){let Tt=Rt.get(v.textures[_t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+_t,Tt.__webglTexture,z,lt)}}else if(v!==null&&z!==0){let lt=Rt.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,lt.__webglTexture,z)}H=-1};function il(v){let C=Rt.get(v);return(C.__readFormat!==v.format||C.__readType!==v.type)&&(C.__readFormat=v.format,C.__readType=v.type,C.__formatReadable=ie.textureFormatReadable(v.format),C.__typeReadable=ie.textureTypeReadable(v.type)),C}this.readRenderTargetPixels=function(v,C,z,N,F,ht,yt,lt=0){if(!(v&&v.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Rt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&yt!==void 0&&(_t=_t[yt],Array.isArray(_t)&&(_t=_t[0])),_t){ut.bindFramebuffer(L.FRAMEBUFFER,_t);try{let Tt=v.textures[lt],Nt=Tt.format,Gt=Tt.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+lt);let St=il(Tt);if(St.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-N&&z>=0&&z<=v.height-F&&L.readPixels(C,z,N,F,it.convert(Nt),it.convert(Gt),ht)}finally{let Tt=tt!==null?Rt.get(tt).__webglFramebuffer:null;ut.bindFramebuffer(L.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(v,C,z,N,F,ht,yt,lt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Rt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&yt!==void 0&&(_t=_t[yt],Array.isArray(_t)&&(_t=_t[0])),_t)if(C>=0&&C<=v.width-N&&z>=0&&z<=v.height-F){ut.bindFramebuffer(L.FRAMEBUFFER,_t);let Tt=v.textures[lt],Nt=Tt.format,Gt=Tt.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+lt);let St=il(Tt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let kt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,kt),L.bufferData(L.PIXEL_PACK_BUFFER,ht.byteLength,L.STREAM_READ),L.readPixels(C,z,N,F,it.convert(Nt),it.convert(Gt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let ue=tt!==null?Rt.get(tt).__webglFramebuffer:null;ut.bindFramebuffer(L.FRAMEBUFFER,ue);let te=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await fc(L,te,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,kt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ht),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(kt),L.deleteSync(te),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,C=null,z=0){let N=Math.pow(2,-z),F=Math.floor(v.image.width*N),ht=Math.floor(v.image.height*N),yt=C!==null?C.x:0,lt=C!==null?C.y:0;Dt.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,yt,lt,F,ht),ut.unbindTexture()},this.copyTextureToTexture=function(v,C,z=null,N=null,F=0,ht=0){let yt,lt,_t,Tt,Nt,Gt,St,kt,ue,te=v.isCompressedTexture?v.mipmaps[ht]:v.image;if(z!==null)yt=z.max.x-z.min.x,lt=z.max.y-z.min.y,_t=z.isBox3?z.max.z-z.min.z:1,Tt=z.min.x,Nt=z.min.y,Gt=z.isBox3?z.min.z:0;else{let Yt=Math.pow(2,-F);yt=Math.floor(te.width*Yt),lt=Math.floor(te.height*Yt),v.isDataArrayTexture?_t=te.depth:v.isData3DTexture?_t=Math.floor(te.depth*Yt):_t=1,Tt=0,Nt=0,Gt=0}N!==null?(St=N.x,kt=N.y,ue=N.z):(St=0,kt=0,ue=0);let jt=it.convert(C.format),Se=it.convert(C.type),bt;C.isData3DTexture?(Dt.setTexture3D(C,0),bt=L.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Dt.setTexture2DArray(C,0),bt=L.TEXTURE_2D_ARRAY):(Dt.setTexture2D(C,0),bt=L.TEXTURE_2D),ut.activeTexture(L.TEXTURE0),ut.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,C.flipY),ut.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),ut.pixelStorei(L.UNPACK_ALIGNMENT,C.unpackAlignment);let Re=ut.getParameter(L.UNPACK_ROW_LENGTH),Jt=ut.getParameter(L.UNPACK_IMAGE_HEIGHT),Xn=ut.getParameter(L.UNPACK_SKIP_PIXELS),be=ut.getParameter(L.UNPACK_SKIP_ROWS),_s=ut.getParameter(L.UNPACK_SKIP_IMAGES);ut.pixelStorei(L.UNPACK_ROW_LENGTH,te.width),ut.pixelStorei(L.UNPACK_IMAGE_HEIGHT,te.height),ut.pixelStorei(L.UNPACK_SKIP_PIXELS,Tt),ut.pixelStorei(L.UNPACK_SKIP_ROWS,Nt),ut.pixelStorei(L.UNPACK_SKIP_IMAGES,Gt);let Cn=v.isDataArrayTexture||v.isData3DTexture,qn=C.isDataArrayTexture||C.isData3DTexture;if(v.isDepthTexture){let Yt=Rt.get(v),ye=Rt.get(C),Je=Rt.get(Yt.__renderTarget),ae=Rt.get(ye.__renderTarget);ut.bindFramebuffer(L.READ_FRAMEBUFFER,Je.__webglFramebuffer),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let _e=0;_e<_t;_e++)Cn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.get(v).__webglTexture,F,Gt+_e),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.get(C).__webglTexture,ht,ue+_e)),L.blitFramebuffer(Tt,Nt,Tt+yt,Nt+lt,St,kt,St+yt,kt+lt,L.DEPTH_BUFFER_BIT,L.NEAREST);ut.bindFramebuffer(L.READ_FRAMEBUFFER,null),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||v.isRenderTargetTexture||Rt.has(v)){let Yt=Rt.get(v),ye=Rt.get(C);ut.bindFramebuffer(L.READ_FRAMEBUFFER,I),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,V);for(let Je=0;Je<_t;Je++)Cn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Yt.__webglTexture,F,Gt+Je):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Yt.__webglTexture,F),qn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.__webglTexture,ht,ue+Je):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ye.__webglTexture,ht),F!==0?L.blitFramebuffer(Tt,Nt,Tt+yt,Nt+lt,St,kt,St+yt,kt+lt,L.COLOR_BUFFER_BIT,L.NEAREST):qn?L.copyTexSubImage3D(bt,ht,St,kt,ue+Je,Tt,Nt,yt,lt):L.copyTexSubImage2D(bt,ht,St,kt,Tt,Nt,yt,lt);ut.bindFramebuffer(L.READ_FRAMEBUFFER,null),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else qn?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(bt,ht,St,kt,ue,yt,lt,_t,jt,Se,te.data):C.isCompressedArrayTexture?L.compressedTexSubImage3D(bt,ht,St,kt,ue,yt,lt,_t,jt,te.data):L.texSubImage3D(bt,ht,St,kt,ue,yt,lt,_t,jt,Se,te):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ht,St,kt,yt,lt,jt,Se,te.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ht,St,kt,te.width,te.height,jt,te.data):L.texSubImage2D(L.TEXTURE_2D,ht,St,kt,yt,lt,jt,Se,te);ut.pixelStorei(L.UNPACK_ROW_LENGTH,Re),ut.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Jt),ut.pixelStorei(L.UNPACK_SKIP_PIXELS,Xn),ut.pixelStorei(L.UNPACK_SKIP_ROWS,be),ut.pixelStorei(L.UNPACK_SKIP_IMAGES,_s),ht===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&L.generateMipmap(bt),ut.unbindTexture()},this.initRenderTarget=function(v){Rt.get(v).__webglFramebuffer===void 0&&Dt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Dt.setTextureCube(v,0):v.isData3DTexture?Dt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Dt.setTexture2DArray(v,0):Dt.setTexture2D(v,0),ut.unbindTexture()},this.resetState=function(){Y=0,k=0,tt=null,ut.reset(),rt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ze}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Vt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Vt._getUnpackColorSpace()}};var ii={origin:[45.46,9.19],land:[83.11,-34.27,82.92,-66.73,82.64,-46.67,82.47,-79.13,82.37,-26.61,81.95,-39.01,81.8,-71.47,81.55,-51.41,81.4,-83.87,81.32,-31.34,81.17,-63.8,80.95,-43.74,80.92,93.77,80.81,-76.2,80.72,-23.68,80.59,-56.14,80.43,48.91,80.37,-36.08,80.04,-48.48,79.91,-80.94,79.84,-28.42,79.76,24.11,79.71,-60.88,79.59,-93.34,79.52,-40.82,79.49,96.69,79.44,11.71,79.32,-20.75,79.21,-53.21,79.02,-33.15,78.95,19.37,78.9,-65.61,78.79,-98.07,78.72,-45.55,78.61,-78.01,78.54,-25.49,78.5,-110.47,78.43,-57.95,78.32,-90.41,78.26,-37.89,78.19,14.64,78.15,-70.35,77.98,-50.29,77.87,-82.75,77.81,-30.23,77.75,22.3,77.71,-62.69,77.61,-95.15,77.54,-42.62,77.38,-22.56,77.28,-55.02,77.18,-87.48,77.12,-34.96,77.1,102.55,77.08,-119.95,77.02,-67.42,76.87,-47.36,76.77,-79.82,76.71,-27.3,76.69,110.21,76.62,-59.76,76.52,-92.22,76.47,-39.7,76.35,65.35,76.22,-52.1,76.08,-32.03,76.06,105.47,75.84,-44.43,75.82,93.07,75.73,60.61,75.7,-24.37,75.68,113.14,75.61,-56.83,75.52,-89.29,75.47,-36.77,75.45,100.74,75.24,-49.17,75.17,140.86,75.15,-81.63,75.14,55.88,75.1,-29.11,75.08,108.4,74.93,-94.03,74.88,-41.51,74.86,96,74.81,148.52,74.75,-21.44,74.66,-53.91,74.58,-86.37,74.53,-33.84,74.51,103.66,74.32,-46.24,74.3,91.27,74.19,-26.18,73.98,-38.58,73.96,98.93,73.95,-123.56,73.77,-50.98,73.76,86.53,73.68,54.07,73.65,-30.92,73.63,106.59,73.61,-115.9,73.51,126.65,73.49,-95.84,73.44,-43.32,73.43,94.19,73.32,-23.25,73.3,114.25,73.23,81.79,73.17,-88.18,73.12,-35.65,73.11,101.86,73.09,-120.64,72.99,121.92,72.97,-100.57,72.93,-48.05,72.91,89.46,72.81,-27.99,72.79,109.52,72.78,-112.97,72.61,-40.39,72.6,97.12,72.48,117.18,72.47,-105.31,72.42,-52.79,72.41,84.72,72.35,-85.25,72.31,-32.73,72.29,104.78,72.28,-117.71,72.22,72.32,72.18,124.84,72.16,-97.65,72.12,-45.12,72.1,92.38,72.06,144.91,72.05,-77.59,72,-25.06,71.99,112.45,71.97,-110.05,71.92,79.98,71.86,-89.98,71.82,-37.46,71.8,100.05,71.79,-122.45,71.69,120.11,71.64,-49.86,71.62,87.65,71.58,140.17,71.57,-82.32,71.55,55.19,71.52,-29.8,71.51,107.71,71.5,-114.78,71.44,75.25,71.4,127.77,71.39,-94.72,71.36,-179.7,71.34,-42.2,71.33,95.31,71.29,147.83,71.28,-74.66,71.23,-22.14,71.22,115.37,71.21,-107.12,71.15,82.91,71.11,135.43,71.1,-87.06,71.06,-34.53,71.04,102.97,70.98,70.51,70.94,123.04,70.88,-46.93,70.87,90.57,70.83,143.1,70.81,-79.39,70.77,-26.87,70.76,110.64,70.75,-111.86,70.73,25.65,70.69,78.18,70.65,130.7,70.6,-39.27,70.59,98.24,70.55,150.76,70.53,-71.73,70.51,-156.72,70.48,118.3,70.47,-104.19,70.43,-51.67,70.42,85.84,70.38,138.36,70.36,-84.13,70.32,-31.61,70.31,105.9,70.27,158.42,70.23,-149.05,70.21,125.96,70.15,-44.01,70.14,93.5,70.1,146.02,70.09,-76.47,70.06,-161.45,70.05,-23.94,70.04,113.56,70.03,-108.93,70.01,28.58,69.97,81.1,69.94,133.63,69.88,-36.34,69.87,101.16,69.83,153.69,69.82,-68.8,69.81,68.7,69.79,-153.79,69.77,121.23,69.76,-101.27,69.73,173.75,69.72,-48.74,69.71,88.77,69.67,141.29,69.62,-28.68,69.6,108.83,69.59,-113.66,69.58,23.84,69.54,76.37,69.53,-146.13,69.5,128.89,69.49,-93.6,69.45,-41.08,69.44,96.43,69.43,-126.06,69.4,148.95,69.39,-73.54,69.38,63.97,69.36,-158.52,69.34,116.49,69.33,-106,69.31,31.51,69.28,84.03,69.27,-138.46,69.24,136.55,69.19,-33.42,69.18,104.09,69.15,19.11,69.14,156.61,69.12,71.63,69.1,-150.86,69.08,124.15,69.07,-98.34,69.04,176.68,69.03,-45.82,69.02,91.69,69.01,-130.8,68.98,144.22,68.94,-163.26,68.92,111.75,68.91,-110.74,68.89,26.77,68.88,164.28,68.86,79.29,68.85,-143.2,68.82,131.82,68.81,-90.68,68.77,-38.15,68.76,99.36,68.75,-123.14,68.72,151.88,68.71,-70.61,68.69,-155.6,68.66,119.42,68.64,34.43,68.63,171.94,68.61,-50.55,68.6,86.96,68.59,-135.54,68.57,139.48,68.55,-83.01,68.52,-30.49,68.51,107.02,68.49,-115.47,68.48,22.03,68.47,159.54,68.45,74.56,68.43,-147.93,68.41,127.08,68.37,179.6,68.36,-42.89,68.35,94.62,68.34,-127.87,68.31,147.14,68.29,62.16,68.28,-160.33,68.26,114.68,68.24,-107.81,68.23,29.7,68.22,167.21,68.2,82.22,68.18,-140.27,68.16,134.74,68.11,-35.23,68.1,102.28,68.09,-120.21,68.08,17.3,68.07,154.81,68.05,-67.69,68.04,69.82,68.03,-152.67,68.01,122.34,67.98,37.36,67.97,174.87,67.96,-47.62,67.95,89.88,67.94,-132.61,67.91,142.41,67.89,57.42,67.85,109.95,67.83,24.96,67.82,162.47,67.8,77.48,67.78,-145.01,67.76,130.01,67.75,-92.48,67.74,45.02,67.73,-177.47,67.71,-39.96,67.7,97.55,67.69,-124.95,67.67,150.07,67.66,-72.42,67.64,65.09,67.63,-157.41,67.61,117.61,67.6,-104.88,67.59,32.62,67.58,170.13,67.56,-52.36,67.55,85.15,67.54,-137.34,67.52,137.67,67.51,-84.82,67.49,52.69,67.46,105.21,67.45,-117.28,67.44,20.23,67.43,157.73,67.41,-64.76,67.39,-149.74,67.37,125.27,67.36,-97.22,67.35,40.29,67.33,177.8,67.32,-44.7,67.31,92.81,67.3,-129.68,67.28,145.33,67.25,60.35,67.24,-162.14,67.22,112.87,67.21,-109.62,67.2,27.89,67.19,165.4,67.16,80.41,67.15,-142.08,67.13,132.93,67.12,-89.56,67.08,-37.03,67.07,100.47,67.06,-122.02,67.05,15.49,67.04,153,67.03,-69.5,67.02,68.01,67,-154.48,66.98,120.54,66.97,-101.96,66.96,35.55,66.95,173.06,66.94,-49.43,66.93,88.07,66.91,-134.42,66.89,140.6,66.87,55.61,66.84,108.14,66.82,-114.36,66.81,23.15,66.8,160.66,66.78,75.68,66.77,-146.82,66.75,128.2,66.74,-94.29,66.71,-179.28,66.7,-41.77,66.69,95.74,66.68,-126.75,66.66,148.26,66.63,63.28,66.62,-159.22,66.6,115.8,66.59,-106.69,66.58,30.82,66.57,168.32,66.55,83.34,66.54,-139.15,66.51,135.86,66.5,-86.63,66.49,50.88,66.48,-171.61,66.46,103.4,66.45,-119.09,66.44,18.42,66.42,155.92,66.41,-66.57,66.4,70.94,66.39,-151.55,66.37,123.46,66.36,-99.03,66.35,38.48,66.34,175.99,66.33,-46.51,66.31,91,66.3,-131.49,66.28,143.52,66.26,58.54,66.25,-163.95,66.23,111.06,66.22,-111.43,66.21,26.08,66.19,163.59,66.17,78.6,66.16,-143.89,66.14,131.13,66.13,-91.37,66.12,46.14,66.11,-176.35,66.1,-38.84,66.09,98.66,66.07,-123.83,66.06,13.68,66.05,151.19,66.04,-71.3,66.03,66.2,66.02,-156.29,66.01,-18.78,66,118.73,65.99,-103.77,65.98,33.74,65.97,171.25,65.96,-51.24,65.94,86.27,65.93,-136.23,65.91,138.79,65.89,53.8,65.86,106.33,65.85,-116.16,65.84,21.34,65.83,158.85,65.81,-63.64,65.8,73.87,65.79,-148.63,65.77,126.39,65.76,-96.1,65.75,41.41,65.74,178.91,65.73,-43.58,65.72,93.93,65.71,-128.56,65.69,146.45,65.66,61.47,65.65,-161.02,65.64,-23.52,65.63,113.99,65.62,-108.5,65.61,29.01,65.6,166.51,65.58,81.53,65.57,-140.96,65.55,134.05,65.54,-88.44,65.53,49.07,65.52,-173.42,65.49,101.59,65.48,-120.9,65.47,16.61,65.46,154.11,65.45,-68.38,65.44,69.13,65.43,-153.36,65.42,-15.85,65.41,121.65,65.4,-100.84,65.38,174.18,65.37,-48.32,65.36,89.19,65.35,-133.3,65.32,141.72,65.3,56.73,65.29,-165.76,65.27,109.25,65.26,-113.24,65.24,161.78,65.22,76.79,65.21,-145.7,65.19,129.32,65.18,-93.18,65.17,44.33,65.15,-40.65,65.14,96.86,65.12,-125.64,65.11,11.87,65.1,149.38,65.09,-73.11,65.08,64.39,65.07,-158.1,65.06,-20.59,65.05,116.92,65.04,-105.57,65.03,31.93,65.02,169.44,65,84.46,64.99,-138.04,64.97,136.98,64.96,-85.51,64.95,52,64.92,104.52,64.91,-117.97,64.9,19.53,64.89,157.04,64.86,72.06,64.85,-150.43,64.83,124.58,64.82,-97.91,64.8,177.1,64.79,-45.39,64.78,92.12,64.77,-130.37,64.75,144.64,64.74,-77.85,64.73,59.66,64.72,-162.83,64.7,112.18,64.69,-110.31,64.68,27.2,64.67,164.71,64.65,79.72,64.64,-142.77,64.62,132.24,64.61,-90.25,64.6,47.26,64.57,99.78,64.55,-122.71,64.54,14.8,64.53,152.31,64.52,-70.19,64.51,67.32,64.5,-155.17,64.49,-17.66,64.48,119.84,64.47,-102.65,64.46,34.86,64.45,172.37,64.44,-50.12,64.43,87.38,64.42,-135.11,64.4,139.91,64.39,-82.59,64.38,54.92,64.35,107.45,64.34,-115.05,64.32,159.97,64.3,74.98,64.29,-147.51,64.27,127.51,64.26,-94.98,64.25,42.52,64.23,-42.46,64.22,95.05,64.21,-127.45,64.2,10.06,64.19,147.57,64.17,62.59,64.16,-159.91,64.14,115.11,64.13,-107.38,64.12,30.12,64.11,167.63,64.09,82.65,64.08,-139.84,64.06,135.17,64.04,50.19,64.01,102.71,64,-119.78,63.99,17.73,63.98,155.23,63.97,-67.26,63.96,70.25,63.95,-152.24,63.93,122.77,63.92,-99.72,63.91,37.79,63.9,175.3,63.89,-47.2,63.88,90.31,63.87,-132.18,63.85,142.83,63.83,57.85,63.8,110.37,63.79,-112.12,63.78,25.39,63.77,162.9,63.75,77.91,63.74,-144.58,63.72,130.43,63.71,-92.06,63.7,45.45,63.67,97.97,63.66,-124.52,63.65,12.99,63.64,150.5,63.62,65.51,63.61,-156.98,63.6,-19.47,63.59,118.04,63.58,-104.46,63.57,33.05,63.56,170.56,63.54,85.57,63.53,-136.92,63.51,138.1,63.5,-84.39,63.49,53.11,63.46,105.64,63.45,-116.86,63.43,158.16,63.41,73.18,63.4,-149.32,63.38,125.7,63.37,-96.79,63.36,40.71,63.35,178.22,63.34,-44.27,63.33,93.24,63.32,-129.25,63.31,8.25,63.3,145.76,63.28,60.78,63.27,-161.72,63.25,113.3,63.24,-109.19,63.23,28.32,63.22,165.82,63.2,80.84,63.19,-141.65,63.17,133.36,63.15,48.38,63.13,100.9,63.12,-121.59,63.11,15.92,63.1,153.42,63.09,-69.07,63.08,68.44,63.07,-154.05,63.05,120.96,63.04,-101.53,63.03,35.98,63.02,173.49,63.01,-49.01,63,88.5,62.99,-133.99,62.97,141.02,62.95,56.04,62.92,108.56,62.91,-113.93,62.9,23.58,62.89,161.09,62.87,76.1,62.86,-146.39,62.84,128.63,62.83,-93.87,62.82,43.64,62.8,96.16,62.79,-126.33,62.78,11.18,62.77,148.69,62.75,63.7,62.74,-158.79,62.72,116.23,62.71,-106.27,62.7,31.24,62.69,168.75,62.67,83.77,62.66,-138.73,62.64,136.29,62.62,51.3,62.59,103.83,62.58,-118.66,62.57,156.35,62.55,71.37,62.54,-151.13,62.52,123.89,62.51,-98.6,62.5,38.91,62.49,176.41,62.48,-46.08,62.47,91.43,62.46,-131.06,62.45,6.44,62.44,143.95,62.42,58.97,62.41,-163.52,62.39,111.49,62.38,-111,62.37,26.51,62.35,79.03,62.34,-143.46,62.32,131.55,62.3,46.57,62.27,99.09,62.26,-123.4,62.25,14.11,62.24,151.62,62.22,66.63,62.21,-155.86,62.19,119.15,62.18,-103.34,62.18,34.17,62.17,171.68,62.15,86.69,62.14,-135.8,62.12,139.22,62.1,54.23,62.07,106.75,62.06,-115.74,62.05,21.77,62.04,159.28,62.02,74.29,62.02,-148.2,62,126.82,61.99,-95.68,61.98,41.83,61.96,-43.15,61.95,94.36,61.94,-128.14,61.93,9.37,61.92,146.88,61.91,-75.61,61.9,61.89,61.89,-160.6,61.87,114.42,61.87,-108.07,61.86,29.43,61.85,166.94,61.83,81.96,61.82,-140.54,61.8,134.48,61.78,49.5,61.75,102.02,61.74,-120.47,61.73,17.03,61.73,154.54,61.71,69.56,61.7,-152.93,61.68,122.08,61.67,-100.41,61.66,37.1,61.64,-47.89,61.63,89.62,61.62,-132.87,61.6,142.14,61.59,57.16,61.58,-165.33,61.56,109.68,61.55,-112.81,61.54,24.7,61.53,162.21,61.51,77.22,61.5,-145.27,61.48,129.74,61.47,44.76,61.44,97.28,61.43,-125.21,61.42,12.3,61.41,149.81,61.4,-72.69,61.39,64.82,61.38,-157.67,61.36,117.34,61.36,-105.15,61.35,32.36,61.34,169.87,61.32,84.88,61.31,-137.61,61.29,137.41,61.27,52.42,61.25,104.95,61.24,-117.55,61.2,72.48,61.19,-150.01,61.17,125.01,61.16,-97.48,61.15,40.02,61.14,-44.96,61.13,92.55,61.12,-129.95,61.11,7.56,61.1,145.07,61.09,-77.42,61.08,60.09,61.07,-162.41,61.05,112.61,61.04,-109.88,61.04,27.62,61.03,165.13,61.01,80.15,61,-142.34,60.98,132.67,60.96,47.69,60.94,100.21,60.93,-122.28,60.92,15.23,60.91,152.73,60.9,-69.76,60.89,67.75,60.88,-154.74,60.86,120.27,60.85,-102.22,60.84,35.29,60.82,87.81,60.81,-134.68,60.79,140.33,60.77,55.35,60.75,107.87,60.74,-114.62,60.73,22.89,60.72,160.4,60.7,75.41,60.67,127.93,60.66,-94.56,60.66,42.95,60.63,95.47,60.62,-127.02,60.61,10.49,60.6,148,60.59,-74.5,60.58,63.01,60.57,-159.48,60.56,115.54,60.55,-106.96,60.54,30.55,60.53,168.06,60.51,83.07,60.5,-139.42,60.48,135.6,60.47,50.61,60.44,103.14,60.43,-119.36,60.42,18.15,60.4,70.68,60.37,123.2,60.36,-99.29,60.35,38.21,60.32,90.74,60.32,-131.75,60.31,5.75,60.3,143.26,60.28,58.28,60.27,-164.22,60.25,110.8,60.24,-111.69,60.23,163.32,60.21,78.34,60.2,-144.15,60.18,130.86,60.16,45.88,60.14,98.4,60.13,-124.09,60.12,13.42,60.11,150.92,60.1,-71.57,60.09,65.94,60.08,-156.55,60.07,118.46,60.06,-104.03,60.05,33.48,60.02,86,60.01,-136.49,60,138.52,59.98,53.54,59.95,106.06,59.94,-116.43,59.91,73.6,59.9,-148.89,59.88,126.13,59.87,-96.37,59.86,41.14,59.84,93.66,59.83,-128.83,59.82,8.68,59.81,146.19,59.8,-76.3,59.79,61.2,59.79,-161.29,59.77,113.73,59.76,-108.77,59.75,28.74,59.72,81.27,59.7,133.79,59.68,48.8,59.65,101.33,59.65,-121.16,59.64,16.34,59.63,153.85,59.61,68.87,59.6,-153.63,59.58,121.39,59.58,-101.1,59.57,36.41,59.54,88.93,59.53,-133.56,59.52,141.45,59.5,56.47,59.47,108.99,59.46,-113.5,59.45,161.51,59.43,76.53,59.4,129.05,59.39,44.07,59.36,96.59,59.35,-125.9,59.34,11.61,59.32,-73.38,59.32,64.13,59.31,-158.36,59.29,116.65,59.28,-105.84,59.27,31.67,59.25,84.19,59.24,-138.3,59.22,136.72,59.2,51.73,59.18,104.25,59.17,-118.24,59.14,-65.71,59.14,71.79,59.11,124.32,59.1,-98.18,59.09,39.33,59.07,91.86,59.06,-130.64,59.05,6.87,59.03,-78.11,59.02,59.39,59,111.92,58.99,-110.57,58.98,26.93,58.96,79.46,58.93,131.98,58.91,47,58.89,99.52,58.88,-122.97,58.87,14.53,58.86,152.04,58.85,-70.45,58.84,67.06,58.84,-155.43,58.82,119.58,58.81,-102.91,58.8,34.6,58.78,87.12,58.77,-135.37,58.75,139.64,58.73,54.66,58.71,107.18,58.7,-115.31,58.68,159.71,58.67,74.72,58.64,127.24,58.63,-95.25,58.62,42.26,58.6,94.78,58.59,-127.71,58.56,-75.19,58.56,62.32,58.53,114.84,58.52,-107.65,58.51,29.86,58.49,82.38,58.46,134.91,58.45,49.92,58.42,102.45,58.41,-120.05,58.38,69.98,58.35,122.51,58.35,-99.98,58.34,37.52,58.31,90.05,58.3,-132.45,58.27,57.59,58.24,110.11,58.24,-112.38,58.23,25.12,58.2,77.65,58.18,130.17,58.16,45.19,58.14,97.71,58.13,-124.78,58.12,12.73,58.1,-72.26,58.09,65.25,58.09,-157.24,58.07,117.77,58.06,-104.72,58.05,32.79,58.03,85.31,58,137.83,57.99,52.85,57.96,105.37,57.95,-117.12,57.94,157.9,57.93,-64.6,57.92,72.91,57.89,125.43,57.89,-97.06,57.88,40.45,57.85,92.97,57.84,-129.52,57.82,-77,57.81,60.51,57.79,113.04,57.78,-109.46,57.77,28.05,57.75,80.57,57.73,-4.41,57.72,133.1,57.7,48.11,57.68,100.64,57.67,-121.86,57.66,15.65,57.65,-69.33,57.64,68.18,57.61,120.7,57.61,-101.79,57.6,35.71,57.57,88.24,57.53,55.78,57.51,108.3,57.5,-114.19,57.48,160.82,57.47,75.84,57.44,128.36,57.43,-94.13,57.42,43.38,57.4,95.9,57.39,-126.59,57.37,-74.07,57.36,63.44,57.33,115.96,57.33,-106.53,57.32,30.98,57.29,83.5,57.27,136.02,57.25,51.04,57.23,103.56,57.22,-118.93,57.2,-66.41,57.19,71.1,57.16,123.63,57.16,-98.87,57.15,38.64,57.12,91.16,57.12,-131.33,57.08,58.7,57.06,111.23,57.05,-111.27,57.04,26.24,57.02,78.77,56.99,131.29,56.99,-91.2,56.98,46.3,56.95,98.83,56.95,-123.66,56.94,13.84,56.92,-71.14,56.91,66.37,56.89,118.89,56.88,-103.6,56.87,33.91,56.85,86.43,56.81,53.97,56.78,106.49,56.78,-116,56.77,21.51,56.76,159.01,56.75,-63.48,56.74,74.03,56.72,126.55,56.71,-95.94,56.7,41.57,56.68,94.09,56.67,-128.4,56.66,9.11,56.65,-75.88,56.64,61.63,56.62,114.15,56.61,-108.34,56.6,29.17,56.58,81.69,56.56,-3.29,56.55,134.22,56.54,-88.28,56.54,49.23,56.51,101.75,56.5,-120.74,56.48,-68.21,56.47,69.29,56.45,121.82,56.44,-100.68,56.43,36.83,56.41,89.36,56.37,56.89,56.34,109.42,56.34,-113.07,56.33,24.43,56.32,161.94,56.3,76.96,56.28,129.48,56.27,-93.01,56.26,44.5,56.24,97.02,56.23,-125.47,56.21,-72.95,56.2,64.56,56.18,117.08,56.17,-105.41,56.16,32.1,56.14,84.62,56.11,137.14,56.1,52.16,56.07,104.68,56.07,-117.81,56.05,157.21,56.04,-65.29,56.03,72.22,56.01,124.74,56,-97.75,56,39.76,55.97,92.28,55.96,-130.21,55.93,59.82,55.91,112.34,55.9,-110.15,55.89,27.36,55.87,79.88,55.85,-5.1,55.85,132.41,55.84,-90.09,55.83,47.42,55.81,99.95,55.8,-122.55,55.78,-70.02,55.77,67.48,55.74,120.01,55.74,-102.48,55.73,35.02,55.7,87.55,55.67,55.09,55.64,107.61,55.63,-114.88,55.63,22.62,55.62,160.13,55.61,-62.36,55.6,75.15,55.58,127.67,55.57,-94.82,55.56,42.69,55.54,95.21,55.53,-127.28,55.51,-74.76,55.5,62.75,55.48,115.27,55.47,-107.22,55.46,30.29,55.44,82.81,55.42,-2.17,55.42,135.33,55.41,-87.16,55.4,50.35,55.38,102.87,55.37,-119.62,55.35,-67.1,55.34,70.41,55.32,122.93,55.31,-99.56,55.3,37.95,55.28,90.47,55.24,58.01,55.22,110.54,55.21,-111.96,55.2,25.55,55.18,78.07,55.16,-6.91,55.15,130.6,55.15,-91.89,55.14,45.61,55.11,98.14,55.11,-124.36,55.08,-71.83,55.08,65.68,55.05,118.2,55.05,-104.29,55.04,33.21,55.01,85.74,54.98,-84.23,54.98,53.28,54.95,105.8,54.95,-116.69,54.94,20.82,54.93,158.32,54.92,-64.17,54.92,73.34,54.89,125.86,54.88,-96.63,54.88,40.88,54.85,93.4,54.85,-129.09,54.82,-76.57,54.82,60.94,54.79,113.46,54.78,-109.03,54.78,28.48,54.75,81,54.74,-3.98,54.73,133.53,54.72,-88.97,54.72,48.54,54.69,101.06,54.69,-121.43,54.66,-68.91,54.66,68.6,54.63,121.13,54.62,-101.37,54.62,36.14,54.59,88.66,54.56,56.2,54.53,108.73,54.53,-113.77,54.52,23.74,54.5,-61.24,54.5,76.27,54.47,128.79,54.47,-93.7,54.46,43.8,54.43,96.33,54.43,-126.16,54.4,-73.64,54.4,63.87,54.37,116.39,54.37,-106.1,54.36,31.41,54.34,83.93,54.32,-1.06,54.31,136.45,54.31,-86.04,54.3,51.47,54.28,103.99,54.27,-118.5,54.26,19.01,54.25,156.51,54.25,-65.98,54.24,71.53,54.22,124.05,54.21,-98.44,54.2,39.07,54.18,91.59,54.15,-78.38,54.14,59.13,54.12,111.65,54.11,-110.84,54.1,26.67,54.09,-58.32,54.08,79.19,54.06,131.72,54.05,-90.78,54.04,46.73,54.02,99.25,54.01,-123.24,53.99,-70.71,53.98,66.79,53.96,119.32,53.95,-103.18,53.95,34.33,53.92,86.86,53.9,139.38,53.89,-83.11,53.89,54.39,53.86,106.92,53.86,-115.57,53.85,21.93,53.84,159.44,53.83,-63.05,53.83,74.46,53.8,126.98,53.8,-95.51,53.79,42,53.77,94.52,53.76,-127.97,53.75,9.53,53.74,-75.45,53.73,62.06,53.71,114.58,53.7,-107.91,53.69,29.6,53.67,82.12,53.65,-2.86,53.65,134.64,53.64,-87.85,53.63,49.66,53.61,102.18,53.6,-120.31,53.59,17.2,53.58,-67.79,53.57,69.72,53.55,122.24,53.54,-100.25,53.54,37.26,53.51,89.78,53.51,-132.71,53.49,142.31,53.48,57.32,53.45,109.84,53.45,-112.65,53.44,24.86,53.42,-60.12,53.42,77.38,53.4,-7.6,53.39,129.91,53.39,-92.59,53.38,44.92,53.36,97.45,53.35,-125.05,53.34,12.46,53.33,-72.52,53.32,64.98,53.3,117.51,53.29,-104.98,53.28,32.52,53.26,85.05,53.25,.06,53.24,137.57,53.23,-84.92,53.22,52.59,53.2,105.11,53.2,-117.38,53.19,20.12,53.18,157.63,53.17,-64.86,53.17,72.65,53.14,125.17,53.14,-97.32,53.13,40.19,53.11,92.71,53.09,7.73,53.08,-77.26,53.07,60.25,53.05,112.77,53.04,-109.72,53.03,27.79,53.02,-57.2,53.01,80.31,53,-4.67,52.99,132.83,52.98,-89.66,52.98,47.85,52.95,100.37,52.95,-122.12,52.94,15.39,52.92,-69.6,52.92,67.91,52.89,120.43,52.89,-102.06,52.88,35.45,52.86,87.97,52.84,140.5,52.83,-82,52.82,55.51,52.8,108.04,52.79,-114.46,52.79,23.05,52.77,-61.93,52.76,75.57,52.74,128.1,52.73,-94.39,52.73,43.11,52.71,95.64,52.7,-126.86,52.69,10.65,52.68,-74.33,52.67,63.18,52.65,115.7,52.64,-106.79,52.63,30.71,52.61,83.24,52.6,-1.75,52.59,135.76,52.58,-86.73,52.57,50.78,52.55,103.3,52.55,-119.19,52.54,18.32,52.52,-66.67,52.52,70.84,52.49,123.36,52.49,-99.13,52.48,38.38,52.46,90.9,52.45,-131.59,52.44,5.92,52.42,58.44,52.4,110.96,52.39,-111.53,52.39,25.98,52.37,-59.01,52.36,78.5,52.34,131.03,52.34,-91.47,52.33,46.04,52.31,98.56,52.3,-123.93,52.29,13.58,52.28,-71.41,52.27,66.1,52.25,118.63,52.24,-103.87,52.24,33.64,52.21,86.16,52.2,1.18,52.19,138.69,52.18,-83.8,52.18,53.7,52.16,106.23,52.15,-116.27,52.14,21.24,52.13,-63.74,52.12,73.77,52.1,126.29,52.09,-96.2,52.08,41.3,52.06,93.83,52.05,8.84,52.03,-76.14,52.03,61.37,52.01,113.89,52,-108.6,51.99,28.91,51.98,-56.08,51.97,81.43,51.96,-3.56,51.95,133.95,51.94,-88.54,51.93,48.97,51.91,101.49,51.91,-121,51.9,16.51,51.88,-68.48,51.88,69.03,51.86,121.55,51.85,-100.94,51.84,36.57,51.82,89.09,51.81,4.11,51.79,-80.88,51.78,56.63,51.76,109.15,51.76,-113.34,51.75,24.17,51.73,-60.82,51.73,76.69,51.71,129.22,51.7,-93.28,51.69,44.23,51.67,96.75,51.66,-125.74,51.66,11.77,51.64,-73.21,51.63,64.29,51.61,116.82,51.61,-105.68,51.6,31.83,51.58,84.36,51.56,-.63,51.56,136.88,51.55,-85.61,51.54,51.89,51.52,104.42,51.51,-118.07,51.51,19.43,51.5,156.94,51.49,-65.55,51.49,71.96,51.46,124.48,51.46,-98.01,51.45,39.5,51.43,92.02,51.42,7.03,51.4,-77.95,51.39,59.56,51.37,112.08,51.37,-110.41,51.36,27.1,51.34,-57.89,51.34,79.62,51.32,132.14,51.31,-90.35,51.3,47.16,51.28,99.68,51.27,-122.81,51.27,14.7,51.25,-70.29,51.25,67.22,51.22,119.74,51.22,-102.75,51.21,34.76,51.19,87.28,51.17,139.81,51.16,-82.69,51.15,54.82,51.13,107.34,51.13,-115.15,51.12,22.36,51.11,-62.62,51.1,74.88,51.08,127.41,51.07,-95.09,51.06,42.42,51.04,94.95,51.03,-127.55,51.03,9.96,51.01,-75.02,51.01,62.48,50.99,115.01,50.98,-107.48,50.97,30.02,50.95,82.55,50.94,-2.44,50.93,135.07,50.92,-87.42,50.92,50.09,50.9,102.61,50.89,-119.88,50.88,17.62,50.87,-67.36,50.86,70.15,50.84,122.67,50.83,-99.82,50.83,37.69,50.8,90.21,50.79,5.23,50.78,142.73,50.78,-79.76,50.77,57.75,50.75,110.27,50.74,-112.22,50.73,25.29,50.72,-59.7,50.71,77.81,50.69,130.33,50.69,-92.16,50.68,45.35,50.66,97.87,50.65,-124.62,50.64,12.89,50.63,-72.1,50.62,65.41,50.6,117.94,50.6,-104.56,50.59,32.95,50.57,85.47,50.55,138,50.54,-84.5,50.53,53.01,50.51,105.54,50.51,-116.96,50.5,20.55,50.48,-64.43,50.48,73.07,50.46,125.6,50.45,-96.89,50.44,40.61,50.42,93.14,50.41,8.15,50.39,-76.83,50.39,60.68,50.37,113.2,50.36,-109.29,50.35,28.21,50.34,-56.77,50.33,80.74,50.32,-4.25,50.31,133.26,50.3,-89.23,50.3,48.28,50.28,100.8,50.27,-121.69,50.26,15.82,50.25,-69.17,50.24,68.34,50.22,120.86,50.22,-101.63,50.21,35.88,50.19,88.4,50.17,3.42,50.16,-81.57,50.15,55.94,50.13,108.46,50.13,-114.03,50.12,23.48,50.11,-61.51,50.1,76,50.08,128.53,50.07,-93.97,50.06,43.54,50.04,96.06,50.04,-126.43,50.03,11.08,50.02,-73.91,50.01,63.6,49.99,116.13,49.98,-106.37,49.97,31.14,49.95,83.66,49.93,136.19,49.93,-86.3,49.92,51.2,49.9,103.73,49.89,-118.77,49.89,18.74,49.87,71.27,49.84,123.79,49.84,-98.7,49.83,38.8,49.81,91.33,49.8,6.34,49.79,143.85,49.78,-78.64,49.78,58.87,49.76,111.39,49.75,-111.1,49.74,26.41,49.72,78.93,49.7,131.45,49.69,-91.04,49.69,46.47,49.67,98.99,49.66,-123.5,49.65,14.01,49.64,-70.98,49.63,66.53,49.61,119.05,49.61,-103.44,49.6,34.07,49.58,86.59,49.57,1.61,49.56,139.12,49.55,-83.38,49.54,54.13,49.52,106.65,49.52,-115.84,49.51,21.67,49.5,-63.31,49.49,74.19,49.47,126.72,49.46,-95.78,49.46,41.73,49.44,94.25,49.42,9.27,49.41,-75.71,49.4,61.79,49.38,114.32,49.38,-108.18,49.37,29.33,49.35,-55.65,49.35,81.86,49.33,134.38,49.32,-88.11,49.31,49.39,49.29,101.92,49.29,-120.57,49.28,16.93,49.27,-68.05,49.26,69.46,49.24,121.98,49.23,-100.51,49.23,37,49.21,89.52,49.19,4.53,49.19,142.04,49.18,-80.45,49.17,57.06,49.15,109.58,49.15,-112.91,49.14,24.6,49.12,77.12,49.1,129.64,49.09,-92.85,49.09,44.66,49.06,97.18,49.06,-125.31,49.05,12.2,49.04,-72.79,49.03,64.72,49.01,117.24,49,-105.25,49,32.26,48.98,84.78,48.96,-.2,48.96,137.31,48.95,-85.19,48.94,52.32,48.92,104.84,48.92,-117.65,48.91,19.86,48.9,-65.12,48.89,72.38,48.87,124.91,48.86,-97.59,48.86,39.92,48.84,92.45,48.82,7.46,48.81,-77.52,48.8,59.98,48.78,112.51,48.78,-109.98,48.77,27.52,48.76,-57.46,48.75,80.05,48.73,132.57,48.72,-89.92,48.72,47.59,48.7,100.11,48.69,-122.38,48.68,15.12,48.67,-69.86,48.66,67.65,48.64,120.17,48.64,-102.32,48.63,35.19,48.61,87.71,48.6,2.73,48.58,-82.26,48.58,55.25,48.56,107.77,48.55,-114.72,48.54,22.79,48.52,75.31,48.5,127.83,48.5,-94.66,48.49,42.85,48.47,95.37,48.46,10.39,48.44,-74.6,48.44,62.91,48.42,115.44,48.41,-107.06,48.4,30.45,48.39,-54.53,48.38,82.97,48.37,-2.01,48.36,135.5,48.36,-87,48.35,50.51,48.33,103.04,48.32,-119.46,48.32,18.05,48.3,-66.93,48.3,70.57,48.28,123.1,48.27,-99.39,48.26,38.11,48.24,90.64,48.23,5.65,48.22,-79.33,48.21,58.18,48.19,110.7,48.18,-111.79,48.18,25.71,48.16,78.24,48.14,130.76,48.13,-91.73,48.13,45.78,48.11,98.3,48.1,-124.19,48.09,13.32,48.08,-71.67,48.07,65.84,48.05,118.36,48.05,-104.13,48.04,33.38,48.02,85.9,48.01,.92,48,138.42,47.99,-84.07,47.99,53.44,47.97,105.96,47.96,-116.53,47.95,20.98,47.93,73.5,47.91,126.03,47.91,-96.47,47.9,41.04,47.88,93.56,47.87,8.58,47.86,-76.41,47.85,61.1,47.83,113.63,47.82,-108.87,47.82,28.64,47.8,-56.34,47.8,81.16,47.78,133.69,47.77,-88.8,47.76,48.7,47.74,101.23,47.74,-121.27,47.73,16.24,47.72,-68.74,47.71,68.77,47.69,121.29,47.68,-101.2,47.68,36.3,47.66,88.83,47.65,3.84,47.63,-81.14,47.63,56.37,47.61,108.89,47.6,-113.6,47.59,23.91,47.57,76.43,47.55,128.95,47.55,-93.54,47.54,43.97,47.52,96.49,47.51,11.51,47.5,-73.48,47.49,64.03,47.47,116.55,47.46,-105.94,47.46,31.57,47.44,-53.42,47.44,84.09,47.42,-.89,47.42,136.62,47.41,-85.88,47.4,51.63,47.38,104.15,47.38,-118.34,47.37,19.17,47.36,-65.81,47.35,71.69,47.33,124.22,47.33,-98.28,47.32,39.23,47.3,91.75,47.29,6.77,47.27,-78.21,47.27,59.29,47.25,111.82,47.24,-110.68,47.23,26.83,47.22,79.36,47.2,131.88,47.19,-90.61,47.18,46.89,47.16,99.42,47.16,-123.07,47.15,14.43,47.13,66.96,47.11,119.48,47.11,-103.01,47.1,34.5,47.08,87.02,47.07,2.03,47.05,-82.95,47.05,54.56,47.03,107.08,47.02,-115.41,47.01,22.1,47,74.62,46.98,127.14,46.97,-95.35,46.96,42.16,46.94,94.68,46.93,9.7,46.92,-75.29,46.91,62.22,46.89,114.74,46.89,-107.75,46.88,29.76,46.86,82.28,46.84,134.81,46.83,-87.69,46.83,49.82,46.81,102.34,46.8,-120.15,46.8,17.36,46.78,-67.62,46.78,69.88,46.76,122.41,46.75,-100.09,46.72,89.95,46.71,4.96,46.71,142.47,46.7,-80.02,46.69,57.48,46.67,110.01,46.67,-112.48,46.66,25.02,46.64,77.55,46.62,130.07,46.62,-92.42,46.61,45.09,46.59,97.61,46.58,12.62,46.56,-72.36,46.56,65.15,46.54,117.67,46.53,-104.82,46.53,32.69,46.51,85.21,46.49,.23,46.49,137.73,46.48,-84.76,46.46,105.27,46.45,-117.22,46.44,20.29,46.43,-64.7,46.42,72.81,46.4,125.33,46.4,-97.16,46.39,40.35,46.37,92.87,46.36,7.89,46.35,-77.1,46.34,60.41,46.32,112.94,46.31,-109.56,46.31,27.95,46.29,80.47,46.27,133,46.26,-89.5,46.26,48.01,46.24,100.54,46.23,-121.96,46.23,15.55,46.21,-69.43,46.21,68.07,46.19,120.6,46.18,-101.89,46.16,88.14,46.14,3.15,46.13,-81.83,46.12,55.68,46.1,108.2,46.1,-114.29,46.09,23.21,46.07,75.74,46.05,128.26,46.05,-94.23,46.04,43.28,46.02,95.8,46.01,10.82,46,-74.17,45.99,63.34,45.97,115.86,45.96,-106.63,45.94,83.4,45.92,135.92,45.91,-86.57,45.89,103.46,45.88,-119.03,45.88,18.48,45.86,-66.51,45.86,71,45.84,123.53,45.83,-98.97,45.83,38.54,45.81,91.06,45.79,6.08,45.78,-78.91,45.77,58.6,45.76,111.13,45.75,-111.37,45.74,26.14,45.72,78.66,45.71,131.19,45.7,-91.3,45.69,46.2,45.67,98.73,45.67,-123.77,45.66,13.74,45.65,-71.24,45.64,66.27,45.62,118.79,45.62,-103.7,45.61,33.8,45.59,86.33,45.58,1.34,45.57,-83.64,45.56,53.87,45.54,106.39,45.54,-116.1,45.53,21.41,45.52,-63.58,45.51,73.93,45.49,126.45,45.48,-96.04,45.48,41.47,45.46,93.99,45.45,9.01,45.43,-75.98,45.43,61.53,45.41,114.05,45.4,-108.44,45.4,29.07,45.38,81.59,45.36,134.12,45.35,-88.38,45.33,101.65,45.32,-120.84,45.32,16.67,45.3,-68.31,45.3,69.19,45.28,121.72,45.27,-100.78,45.25,89.25,45.23,4.27,45.22,-80.71,45.22,56.79,45.2,109.32,45.19,-113.18,45.18,24.33,45.17,76.86,45.15,129.38,45.14,-93.11,45.13,44.39,45.12,96.92,45.1,11.93,45.09,-73.05,45.08,64.46,45.07,116.98,45.06,-105.51,45.03,84.52,45.02,-.47,45.01,-85.45,45,52.06,44.98,104.58,44.98,-117.91,44.97,19.6,44.95,72.12,44.93,124.64,44.93,-97.85,44.92,39.66,44.9,92.18,44.89,7.2,44.88,-77.79,44.87,59.72,44.85,112.24,44.85,-110.25,44.84,27.26,44.82,79.78,44.8,132.31,44.8,-90.19,44.77,99.85,44.77,-122.65,44.75,-70.12,44.74,67.38,44.72,119.91,44.72,-102.59,44.69,87.45,44.68,2.46,44.67,-82.52,44.66,54.98,44.64,107.51,44.64,-114.98,44.63,22.52,44.61,75.05,44.59,127.57,44.59,-94.92,44.58,42.59,44.56,95.11,44.55,10.12,44.54,-74.86,44.53,62.65,44.51,115.17,44.51,-107.32,44.48,82.71,44.46,135.23,44.46,-87.26,44.43,102.77,44.43,-119.72,44.42,17.79,44.4,70.31,44.38,122.83,44.38,-99.66,44.35,90.37,44.34,5.39,44.33,142.9,44.33,-79.6,44.32,57.91,44.3,110.44,44.3,-112.06,44.29,25.45,44.27,77.97,44.25,130.5,44.25,-92,44.24,45.51,44.22,98.04,44.2,-71.93,44.19,65.57,44.17,118.1,44.17,-104.39,44.14,85.64,44.13,.65,44.12,-84.33,44.11,53.18,44.09,105.7,44.09,-116.79,44.08,20.71,44.06,73.24,44.04,125.76,44.04,-96.73,44.03,40.78,44.01,93.3,43.99,-76.67,43.98,60.84,43.97,113.36,43.96,-109.13,43.95,28.38,43.93,80.9,43.92,133.42,43.91,-89.07,43.89,100.96,43.88,-121.53,43.87,15.98,43.85,68.5,43.84,121.03,43.83,-101.47,43.81,88.56,43.79,3.58,43.78,-81.4,43.78,56.1,43.76,108.63,43.75,-113.87,43.74,23.64,43.73,76.16,43.71,128.69,43.7,-93.8,43.7,43.7,43.68,96.23,43.67,11.24,43.65,-73.74,43.65,63.77,43.63,116.29,43.62,-106.2,43.6,83.83,43.59,-1.16,43.57,-86.14,43.57,51.37,43.55,103.89,43.54,-118.6,43.54,18.91,43.52,71.43,43.5,123.95,43.5,-98.54,43.47,91.49,43.46,6.51,43.45,144.01,43.45,-78.48,43.44,59.03,43.42,111.55,43.42,-110.94,43.41,26.57,43.39,79.09,43.38,-5.89,43.37,131.62,43.37,-90.88,43.36,46.63,43.34,99.15,43.34,-123.34,43.32,-70.81,43.31,66.69,43.3,119.22,43.29,-103.28,43.26,86.75,43.25,1.77,43.24,-83.21,43.23,54.29,43.22,106.82,43.21,-115.68,43.2,21.83,43.19,74.36,43.17,126.88,43.16,-95.61,43.16,41.89,43.14,94.42,43.11,-75.55,43.11,61.96,43.09,114.48,43.08,-108.01,43.06,82.02,43.05,-2.97,43.04,-87.95,43.01,102.08,43.01,-120.41,42.98,69.62,42.96,122.14,42.96,-100.35,42.93,89.68,42.91,142.21,42.91,-80.29,42.9,57.22,42.88,109.74,42.88,-112.75,42.87,24.76,42.85,77.28,42.84,-7.7,42.84,129.81,42.83,-92.69,42.82,44.82,42.81,97.35,42.79,12.36,42.78,-72.62,42.78,64.88,42.76,117.41,42.75,-105.09,42.73,84.95,42.72,-.04,42.7,-85.02,42.68,105.01,42.67,-117.48,42.67,20.02,42.65,72.55,42.63,125.07,42.63,-97.42,42.6,92.61,42.58,-77.36,42.57,60.15,42.55,112.67,42.55,-109.82,42.54,27.69,42.52,80.21,42.51,-4.77,42.5,-89.76,42.5,47.75,42.48,100.27,42.47,-122.22,42.45,67.81,42.43,120.33,42.42,-102.16,42.4,87.87,42.39,2.89,42.38,140.4,42.38,-82.1,42.37,55.41,42.35,107.94,42.35,-114.56,42.34,22.95,42.32,75.47,42.3,128,42.3,-94.5,42.29,43.01,42.27,95.54,42.25,-74.43,42.24,63.07,42.23,115.6,42.22,-106.89,42.2,83.14,42.18,-1.85,42.17,-86.83,42.15,103.2,42.14,-119.29,42.12,70.74,42.1,123.26,42.1,-99.23,42.07,90.8,42.05,-79.17,42.04,58.34,42.02,110.86,42.02,-111.63,42.01,25.88,41.99,78.4,41.98,-6.58,41.97,-91.57,41.97,45.94,41.95,98.46,41.94,-124.03,41.94,13.48,41.92,-71.51,41.92,66,41.9,118.53,41.89,-103.97,41.89,33.54,41.87,86.06,41.86,1.08,41.85,-83.9,41.82,106.13,41.82,-116.37,41.81,21.14,41.79,73.66,41.78,126.19,41.77,-96.3,41.75,93.73,41.73,8.74,41.72,-76.24,41.72,61.27,41.7,113.79,41.69,-108.7,41.67,81.33,41.66,-3.66,41.65,-88.64,41.62,101.39,41.62,-121.1,41.59,68.93,41.58,121.45,41.57,-101.04,41.55,88.99,41.52,-80.98,41.52,56.53,41.5,109.05,41.49,-113.44,41.49,24.07,41.47,76.59,41.46,-8.39,41.45,129.12,41.45,-93.38,41.44,44.13,41.42,96.65,41.4,-73.31,41.39,64.19,41.38,116.72,41.37,-105.78,41.36,31.73,41.35,84.25,41.33,-.73,41.32,-85.71,41.3,104.32,41.29,-118.18,41.27,71.86,41.25,124.38,41.25,-98.11,41.22,91.92,41.2,-78.05,41.19,59.46,41.18,111.98,41.17,-110.51,41.16,27,41.15,79.52,41.13,-5.47,41.12,-90.45,41.12,47.06,41.1,99.58,41.09,-122.91,41.09,14.6,41.07,67.12,41.05,119.64,41.05,-102.85,41.04,34.66,41.02,87.18,41,-82.79,40.99,54.72,40.98,107.24,40.97,-115.25,40.97,22.26,40.95,74.78,40.93,127.31,40.92,-95.19,40.92,42.32,40.9,94.85,40.88,-75.12,40.87,62.38,40.85,114.91,40.85,-107.59,40.84,29.92,40.83,82.45,40.81,-2.54,40.8,-87.52,40.78,102.51,40.77,-119.98,40.77,17.52,40.75,70.05,40.73,122.57,40.73,-99.92,40.72,37.59,40.7,90.11,40.68,-79.86,40.67,57.65,40.66,110.17,40.65,-112.32,40.63,77.71,40.62,-7.27,40.6,-92.26,40.6,45.25,40.58,97.77,40.55,65.31,40.53,117.83,40.53,-104.66,40.52,32.85,40.51,85.37,40.49,.39,40.48,-84.6,40.48,52.91,40.46,105.44,40.45,-117.06,40.45,20.45,40.43,72.97,40.41,125.5,40.41,-96.99,40.4,40.51,40.38,93.04,40.36,-76.93,40.36,60.57,40.34,113.1,40.33,-109.39,40.33,28.11,40.31,80.64,40.3,-4.35,40.29,-89.33,40.28,48.18,40.26,100.7,40.26,-121.79,40.25,15.71,40.23,68.24,40.21,-101.73,40.21,35.78,40.19,88.3,40.17,140.82,40.16,-81.67,40.16,55.84,40.14,108.36,40.14,-114.13,40.13,23.38,40.11,75.9,40.09,-94.07,40.08,43.44,40.07,95.96,40.04,63.5,40.02,116.03,40.01,-106.47,40.01,31.04,39.99,83.56,39.98,-1.42,39.97,-86.4,39.95,103.63,39.94,-118.87,39.92,71.16,39.9,123.69,39.89,-98.8,39.89,38.7,39.87,91.23,39.85,-78.74,39.84,58.77,39.83,111.29,39.82,-111.2,39.8,78.83,39.79,-6.16,39.77,-91.14,39.77,46.37,39.75,98.89,39.74,-123.6,39.72,66.43,39.7,118.95,39.7,-103.54,39.69,33.97,39.68,86.49,39.65,-83.48,39.65,54.03,39.63,106.55,39.62,-115.94,39.62,21.57,39.6,74.09,39.58,126.62,39.58,-95.88,39.57,41.63,39.56,94.15,39.54,9.17,39.53,-75.81,39.53,61.69,39.51,114.22,39.5,-108.28,39.5,29.23,39.48,81.76,39.47,-3.23,39.46,-88.21,39.45,49.29,39.44,101.82,39.43,-120.68,39.42,16.83,39.41,69.36,39.39,121.88,39.38,-100.61,39.38,36.89,39.36,89.42,39.34,-80.55,39.33,56.96,39.32,109.48,39.31,-113.01,39.29,77.02,39.28,-7.97,39.27,-92.95,39.26,44.56,39.24,97.08,39.21,64.62,39.2,117.14,39.19,-105.35,39.19,32.16,39.17,84.68,39.16,-.3,39.15,-85.29,39.12,104.74,39.12,-117.75,39.09,72.28,39.07,-97.69,39.07,39.82,39.05,92.35,39.03,-77.62,39.02,59.88,39,112.41,39,-110.09,38.99,27.42,38.98,79.95,38.96,-5.04,38.95,-90.02,38.95,47.48,38.93,100.01,38.92,-122.48,38.9,67.55,38.88,-102.42,38.87,35.09,38.86,87.61,38.84,140.13,38.83,-82.36,38.83,55.15,38.81,107.67,38.81,-114.82,38.8,22.69,38.78,75.21,38.77,127.73,38.76,-94.76,38.75,42.75,38.74,95.27,38.71,62.81,38.69,115.33,38.69,-107.16,38.68,30.35,38.66,82.87,38.65,-2.11,38.64,-87.1,38.62,102.94,38.61,-119.56,38.59,70.47,38.57,-99.49,38.56,38.01,38.55,90.54,38.52,-79.43,38.52,58.07,38.5,110.6,38.5,-111.89,38.47,78.14,38.46,-6.85,38.45,-91.83,38.44,45.68,38.43,98.2,38.4,65.74,38.38,-104.23,38.37,33.28,38.35,85.8,38.33,-84.17,38.31,105.86,38.3,-116.63,38.28,73.4,38.26,125.92,38.26,-96.57,38.25,40.94,38.24,93.46,38.21,-76.51,38.21,61,38.19,113.53,38.19,-108.97,38.18,28.54,38.16,81.06,38.15,-3.92,38.14,-88.9,38.14,48.6,38.12,101.13,38.11,-121.37,38.11,16.14,38.09,68.66,38.07,-101.3,38.06,36.2,38.05,88.73,38.02,-81.24,38.02,56.27,38,108.79,38,-113.7,37.99,23.8,37.97,76.33,37.96,-8.66,37.95,-93.64,37.95,43.87,37.93,96.39,37.9,63.93,37.88,116.45,37.88,-106.04,37.87,31.47,37.86,83.99,37.84,-.99,37.83,-85.98,37.81,104.05,37.81,-118.44,37.78,71.59,37.76,-98.38,37.76,39.13,37.74,91.65,37.72,-78.31,37.71,59.19,37.69,111.72,37.69,-110.78,37.67,79.26,37.66,-5.73,37.64,-90.71,37.64,46.79,37.62,99.32,37.61,14.33,37.59,66.86,37.57,-103.11,37.57,34.39,37.55,86.92,37.53,139.44,37.53,-83.05,37.52,54.46,37.51,106.98,37.5,-115.51,37.49,22,37.48,74.52,37.46,127.04,37.46,-95.45,37.45,42.06,37.43,94.58,37.41,62.12,37.39,114.64,37.38,-107.85,37.38,29.66,37.36,82.18,37.35,-2.8,37.34,-87.79,37.33,49.72,37.32,102.24,37.31,-120.25,37.29,69.78,37.27,122.31,37.27,-100.19,37.26,37.32,37.24,89.85,37.22,-80.12,37.22,57.38,37.2,109.91,37.19,-112.59,37.17,77.45,37.16,-7.54,37.15,-92.52,37.14,44.98,37.13,97.51,37.1,65.05,37.08,117.57,37.08,-104.92,37.07,32.59,37.06,85.11,37.03,-84.86,37.01,105.17,37.01,-117.32,36.98,72.71,36.96,-97.26,36.96,40.25,36.94,92.77,36.92,-77.2,36.91,60.31,36.9,112.83,36.89,-109.66,36.89,27.85,36.87,80.37,36.86,-4.61,36.85,-89.6,36.84,47.91,36.82,100.44,36.82,-122.06,36.8,67.97,36.78,120.5,36.78,-101.99,36.77,35.51,36.75,88.04,36.74,3.05,36.74,140.56,36.73,-81.93,36.73,55.57,36.71,108.1,36.7,-114.39,36.68,75.64,36.67,128.16,36.66,-94.33,36.65,43.18,36.64,95.7,36.63,10.71,36.61,63.24,36.59,115.76,36.59,-106.73,36.57,83.3,36.54,-86.67,36.54,50.84,36.52,103.36,36.52,-119.13,36.5,70.9,36.47,-99.07,36.47,38.44,36.45,90.96,36.44,5.98,36.43,-79.01,36.42,58.5,36.41,111.03,36.4,-111.47,36.38,78.56,36.36,-91.4,36.35,46.1,36.34,98.63,36.31,66.16,36.29,118.69,36.29,-103.8,36.28,33.7,36.27,86.23,36.25,1.24,36.25,138.75,36.24,-83.74,36.24,53.77,36.22,106.29,36.22,-116.2,36.19,73.83,36.17,-96.14,36.17,41.37,36.15,93.89,36.14,8.91,36.13,-76.08,36.12,61.43,36.11,113.95,36.1,-108.54,36.08,81.49,36.06,-88.48,36.05,49.03,36.04,101.55,36.03,-120.94,36.01,69.09,35.99,-100.88,35.98,36.63,35.97,89.15,35.95,4.17,35.94,-80.81,35.94,56.69,35.92,109.22,35.92,-113.28,35.89,76.76,35.88,129.28,35.87,-93.21,35.87,44.29,35.85,96.82,35.82,64.36,35.81,116.88,35.8,-105.61,35.78,84.42,35.77,-.57,35.76,136.94,35.76,-85.55,35.75,51.96,35.74,104.48,35.73,-118.01,35.71,72.02,35.69,-97.95,35.68,39.56,35.67,92.08,35.66,7.1,35.64,-77.89,35.64,59.62,35.62,112.14,35.62,-110.35,35.6,79.68,35.58,-5.3,35.57,-90.29,35.57,47.22,35.55,99.74,35.53,67.28,35.5,-102.69,35.48,87.35,35.47,2.36,35.47,139.87,35.46,-82.62,35.45,54.88,35.44,107.41,35.43,-115.08,35.41,74.95,35.4,127.47,35.39,-95.02,35.38,42.48,35.37,95.01,35.36,10.02,35.34,62.55,35.33,115.07,35.32,-107.42,35.3,82.61,35.28,135.13,35.28,-87.36,35.27,50.15,35.25,102.67,35.25,-119.82,35.23,70.21,35.21,-99.76,35.2,37.75,35.18,90.27,35.17,5.29,35.16,-79.7,35.16,57.81,35.14,110.33,35.14,-112.16,35.13,25.35,35.11,77.87,35.09,-92.1,35.09,45.41,35.07,97.94,35.04,65.47,35.03,118,35.02,-104.49,35.02,33.01,35,85.54,34.99,.55,34.99,138.06,34.98,-84.43,34.97,53.07,34.96,105.6,34.95,-116.89,34.93,73.14,34.91,-96.83,34.9,40.68,34.89,93.2,34.88,8.21,34.87,-76.77,34.86,60.74,34.85,113.26,34.84,-109.23,34.82,80.8,34.81,-4.18,34.8,133.32,34.8,-89.17,34.79,48.34,34.78,100.86,34.75,68.4,34.73,-101.57,34.71,88.46,34.7,3.48,34.68,-81.51,34.68,56,34.66,108.53,34.66,-113.97,34.64,76.06,34.62,-93.9,34.61,43.6,34.59,96.13,34.57,63.67,34.55,116.19,34.55,-106.3,34.52,83.73,34.51,-1.26,34.51,136.25,34.5,-86.24,34.5,51.27,34.48,103.79,34.48,-118.7,34.45,71.33,34.43,-98.64,34.43,38.87,34.41,91.39,34.4,6.41,34.39,-78.58,34.39,58.93,34.37,111.45,34.36,-111.04,34.34,78.99,34.33,-5.99,34.33,131.51,34.32,-90.98,34.32,46.53,34.3,99.05,34.27,66.59,34.26,119.12,34.25,-103.38,34.23,86.65,34.22,1.67,34.21,-83.31,34.2,54.19,34.19,106.72,34.18,-115.78,34.16,74.26,34.14,-95.71,34.13,41.79,34.12,94.32,34.11,9.33,34.09,61.86,34.08,114.38,34.07,-108.11,34.05,81.92,34.04,-3.07,34.03,134.44,34.03,-88.05,34.02,49.46,34.01,101.98,33.98,69.52,33.96,-100.45,33.95,37.06,33.94,89.58,33.93,4.6,33.92,-80.39,33.91,57.12,33.9,109.64,33.89,-112.85,33.87,77.18,33.85,-92.79,33.84,44.72,33.83,97.24,33.8,64.78,33.78,117.31,33.78,-105.19,33.76,84.85,33.75,-.14,33.74,-85.12,33.73,52.38,33.71,104.91,33.71,-117.58,33.69,72.45,33.67,-97.52,33.66,39.98,33.65,92.51,33.64,7.52,33.62,60.05,33.6,112.57,33.6,-109.92,33.58,80.11,33.57,-4.88,33.56,132.63,33.56,-89.86,33.55,47.65,33.53,100.17,33.51,67.71,33.49,120.23,33.49,-102.26,33.47,87.77,33.46,2.79,33.45,-82.2,33.44,55.31,33.42,107.83,33.42,-114.66,33.4,75.37,33.38,-94.6,33.37,42.91,33.36,95.44,33.34,10.45,33.33,62.97,33.31,115.5,33.31,-106.99,33.29,83.04,33.28,-1.95,33.27,-86.93,33.26,50.57,33.24,103.1,33.22,70.64,33.2,-99.33,33.19,38.18,33.18,90.7,33.17,5.71,33.15,-79.27,33.15,58.24,33.13,110.76,33.13,-111.73,33.11,78.3,33.1,-6.68,33.09,130.82,33.09,-91.67,33.08,45.84,33.07,98.36,33.04,65.9,33.02,118.42,33.02,-104.07,33,85.96,32.99,.98,32.98,-84.01,32.97,53.5,32.96,106.03,32.95,-116.47,32.93,73.56,32.91,-96.4,32.9,41.1,32.89,93.63,32.88,8.64,32.86,61.17,32.84,113.69,32.84,-108.8,32.82,81.23,32.81,-3.76,32.8,-88.74,32.79,48.77,32.78,101.29,32.75,68.83,32.73,-101.14,32.72,36.37,32.71,88.89,32.7,3.91,32.69,-81.08,32.68,56.43,32.67,108.95,32.66,-113.54,32.64,76.49,32.63,-8.49,32.62,-93.48,32.61,44.03,32.6,96.55,32.59,11.57,32.57,64.09,32.56,116.62,32.55,-105.88,32.53,84.15,32.52,-.83,32.51,-85.81,32.5,51.69,32.49,104.22,32.46,71.76,32.44,-98.21,32.44,39.29,32.42,91.82,32.41,6.83,32.39,59.36,32.38,111.88,32.37,-110.61,32.35,79.42,32.34,-5.57,32.33,-90.55,32.33,46.96,32.31,99.48,32.3,14.5,32.29,67.02,32.27,119.54,32.26,-102.95,32.24,87.08,32.23,2.1,32.22,-82.89,32.22,54.62,32.2,107.14,32.2,-115.35,32.19,22.16,32.18,74.68,32.16,-95.29,32.15,42.22,32.13,94.74,32.12,9.76,32.11,62.28,32.09,114.81,32.09,-107.69,32.07,82.35,32.06,-2.64,32.05,-87.62,32.04,49.88,32.03,102.41,32,69.95,31.98,-100.02,31.97,37.48,31.96,90.01,31.95,5.02,31.93,57.55,31.92,110.07,31.91,-112.42,31.89,77.61,31.88,-7.38,31.87,-92.36,31.86,45.15,31.85,97.67,31.84,12.69,31.82,65.21,31.81,117.73,31.8,-104.76,31.78,85.27,31.77,.29,31.76,-84.7,31.76,52.81,31.74,105.33,31.73,20.35,31.71,72.87,31.69,-97.1,31.69,40.41,31.67,92.94,31.66,7.95,31.65,60.47,31.63,113,31.63,-109.49,31.6,80.54,31.59,-4.45,31.58,-89.43,31.58,48.07,31.56,100.6,31.55,15.61,31.54,68.14,31.52,120.66,31.52,-101.83,31.51,35.68,31.5,88.2,31.49,3.21,31.48,-81.77,31.47,55.74,31.45,108.26,31.44,23.28,31.43,75.8,31.42,-9.18,31.41,-94.17,31.4,43.34,31.39,95.86,31.38,10.88,31.36,63.4,31.35,115.92,31.34,-106.57,31.34,30.94,31.32,83.46,31.31,-1.52,31.3,-86.51,31.29,51,31.28,103.53,31.25,71.06,31.23,-98.9,31.23,38.6,31.21,91.13,31.2,6.14,31.19,58.67,31.17,111.19,31.17,-111.3,31.16,26.2,31.15,78.73,31.14,-6.26,31.12,-91.24,31.12,46.27,31.1,98.79,31.09,13.8,31.08,66.33,31.06,118.85,31.06,-103.64,31.04,86.39,31.03,1.41,31.02,-83.58,31.01,53.93,31,106.45,30.99,-116.04,30.99,21.47,30.97,73.99,30.95,-95.98,30.94,41.53,30.93,94.05,30.92,9.07,30.9,61.59,30.89,114.12,30.88,-108.38,30.88,29.13,30.86,81.65,30.85,-3.33,30.84,-88.31,30.84,49.19,30.82,101.72,30.81,16.73,30.8,69.26,30.78,-100.71,30.77,36.79,30.75,89.32,30.74,4.33,30.73,56.86,30.71,109.38,30.71,-113.11,30.7,24.39,30.69,76.92,30.68,-8.07,30.67,-93.05,30.66,44.46,30.65,96.98,30.64,12,30.62,64.52,30.61,117.04,30.6,-105.45,30.6,32.06,30.58,84.58,30.57,-.4,30.56,-85.39,30.56,52.12,30.54,104.64,30.53,19.66,30.51,72.18,30.49,-97.79,30.49,39.72,30.47,92.24,30.46,7.26,30.45,59.78,30.43,112.31,30.43,-110.19,30.42,27.32,30.41,79.85,30.4,-5.14,30.39,-90.12,30.38,47.38,30.37,99.91,30.36,14.92,30.34,67.45,30.32,119.97,30.32,-102.52,30.31,34.98,30.3,87.51,30.29,2.52,30.28,-82.46,30.27,55.05,30.26,107.57,30.25,-114.92,30.25,22.59,30.23,75.11,30.21,-94.86,30.21,42.65,30.19,95.17,30.18,10.19,30.17,62.71,30.15,115.23,30.15,-107.26,30.14,30.25,30.13,82.77,30.12,-2.21,30.1,50.31,30.09,102.83,30.08,17.85,30.06,70.37,30.04,-99.6,30.03,37.91,30.02,90.44,30.01,5.45,29.99,57.97,29.98,110.5,29.97,-111.99,29.97,25.51,29.95,78.04,29.94,-6.95,29.93,-91.93,29.93,45.58,29.91,98.1,29.9,13.11,29.89,65.64,29.87,118.16,29.87,-104.33,29.86,33.18,29.85,85.7,29.84,.71,29.82,53.24,29.81,105.76,29.8,20.78,29.78,73.3,29.76,-96.67,29.75,40.84,29.74,93.36,29.73,8.38,29.71,60.9,29.7,113.42,29.69,-109.07,29.69,28.44,29.67,80.96,29.66,-4.02,29.63,101.03,29.62,16.04,29.61,68.56,29.59,121.09,29.59,-101.4,29.58,36.1,29.57,88.63,29.56,3.64,29.55,-81.34,29.54,56.17,29.53,108.69,29.52,23.7,29.5,76.23,29.49,-8.76,29.48,43.77,29.46,96.29,29.45,11.3,29.44,63.83,29.42,116.35,29.42,-106.14,29.41,31.37,29.39,83.89,29.38,-1.09,29.37,51.43,29.35,103.95,29.34,18.97,29.33,71.49,29.31,-98.48,29.3,39.03,29.29,91.55,29.28,6.57,29.26,59.09,29.25,111.62,29.24,-110.88,29.24,26.63,29.22,79.15,29.21,-5.83,29.2,-90.81,29.2,46.69,29.18,99.22,29.17,14.23,29.16,66.76,29.14,119.28,29.14,-103.21,29.13,34.29,29.12,86.82,29.11,1.83,29.09,54.36,29.08,106.88,29.07,21.89,29.05,74.42,29.03,-95.55,29.03,41.96,29.01,94.48,29,9.5,28.99,62.02,28.97,114.54,28.97,-107.95,28.96,29.56,28.95,82.08,28.94,-2.9,28.91,102.14,28.9,17.16,28.88,69.68,28.86,-100.29,28.86,37.22,28.84,89.74,28.83,4.76,28.81,57.28,28.8,109.81,28.79,24.82,28.77,77.35,28.76,-7.64,28.75,44.88,28.73,97.41,28.72,12.42,28.71,64.95,28.69,117.47,28.69,-105.02,28.68,32.48,28.67,85.01,28.66,.02,28.64,52.55,28.63,105.07,28.62,20.09,28.6,72.61,28.58,-97.36,28.58,40.15,28.56,92.67,28.55,7.69,28.54,60.21,28.52,112.73,28.52,-109.76,28.51,27.75,28.5,80.27,28.49,-4.71,28.47,47.81,28.46,100.33,28.45,15.35,28.43,67.87,28.42,120.4,28.41,-102.1,28.41,35.41,28.39,87.94,28.38,2.95,28.37,-82.03,28.37,55.47,28.35,108,28.34,23.01,28.33,75.54,28.32,-9.45,28.3,43.08,28.29,95.6,28.28,10.61,28.26,63.14,28.25,115.66,28.24,-106.83,28.24,30.68,28.22,83.2,28.21,-1.79,28.18,103.26,28.17,18.28,28.16,70.8,28.14,-99.17,28.13,38.34,28.12,90.86,28.11,5.88,28.09,58.4,28.08,110.92,28.07,25.94,28.05,78.46,28.04,-6.52,28.03,46,28.01,98.53,28,13.54,27.99,66.06,27.97,118.59,27.97,-103.9,27.96,33.6,27.95,86.13,27.94,1.14,27.92,53.67,27.91,106.19,27.9,21.2,27.88,73.73,27.87,-11.26,27.86,41.27,27.84,93.79,27.83,8.8,27.82,61.33,27.8,113.85,27.8,-108.64,27.79,28.87,27.78,81.39,27.77,-3.59,27.74,101.45,27.73,16.47,27.71,68.99,27.69,-100.98,27.69,36.53,27.67,89.05,27.66,4.07,27.65,-80.92,27.65,56.59,27.63,109.12,27.63,-113.38,27.62,24.13,27.61,76.65,27.6,-8.33,27.58,44.19,27.57,96.72,27.56,11.73,27.54,64.26,27.53,116.78,27.52,-105.71,27.52,31.79,27.5,84.32,27.5,-.67,27.47,104.38,27.46,19.39,27.44,71.92,27.43,-13.07,27.42,-98.05,27.42,39.46,27.4,91.98,27.39,7,27.38,59.52,27.36,112.04,27.36,-110.45,27.35,27.06,27.34,79.58,27.33,-5.4,27.31,47.12,27.3,99.64,27.29,14.66,27.27,67.18,27.26,119.71,27.25,-102.79,27.23,87.24,27.22,2.26,27.21,54.78,27.19,107.31,27.18,22.32,27.17,74.85,27.16,-10.14,27.14,42.38,27.13,94.91,27.12,9.92,27.1,62.45,27.09,114.97,27.08,-107.52,27.08,29.99,27.06,82.51,27.05,-2.48,27.02,102.57,27.01,17.59,27,70.11,26.98,-99.86,26.97,37.65,26.96,90.17,26.95,5.19,26.93,57.71,26.92,110.23,26.92,-112.26,26.91,25.25,26.9,77.77,26.89,-7.21,26.87,45.31,26.86,97.83,26.85,12.85,26.83,65.37,26.82,117.9,26.81,-104.6,26.81,32.91,26.79,85.44,26.78,.45,26.75,105.5,26.74,20.51,26.73,73.04,26.72,-11.95,26.7,40.58,26.69,93.1,26.68,8.11,26.66,60.64,26.65,113.16,26.64,-109.33,26.64,28.18,26.62,80.7,26.61,-4.29,26.6,48.24,26.58,100.76,26.57,15.78,26.56,68.3,26.54,-101.67,26.52,88.36,26.51,3.38,26.5,-81.61,26.48,108.42,26.47,23.44,26.46,75.96,26.45,-9.02,26.43,43.5,26.42,96.03,26.41,11.04,26.39,63.56,26.38,116.09,26.37,-106.4,26.37,31.1,26.35,83.63,26.34,-1.36,26.31,103.69,26.3,18.7,26.29,71.23,26.28,-13.76,26.27,-98.74,26.26,38.77,26.25,91.29,26.24,6.3,26.23,58.83,26.21,111.35,26.2,26.37,26.19,78.89,26.18,-6.09,26.16,46.43,26.15,98.95,26.14,13.97,26.12,66.49,26.11,119.01,26.1,-103.48,26.1,34.03,26.08,86.55,26.07,1.57,26.04,106.62,26.03,21.63,26.02,74.15,26.01,-10.83,25.99,41.69,25.98,94.22,25.97,9.23,25.96,61.76,25.94,114.28,25.94,-108.21,25.93,29.29,25.92,81.82,25.91,-3.17,25.89,49.36,25.88,101.88,25.87,16.89,25.85,69.42,25.83,-100.55,25.83,36.96,25.81,89.48,25.8,4.5,25.79,-80.49,25.77,109.54,25.76,24.56,25.75,77.08,25.74,-7.9,25.73,44.62,25.71,97.14,25.7,12.16,25.69,64.68,25.67,117.21,25.67,-105.29,25.66,32.22,25.65,84.74,25.64,-.24,25.61,104.81,25.6,19.82,25.58,72.35,25.57,-12.64,25.56,-97.62,25.56,39.88,25.54,92.41,25.53,7.42,25.52,59.95,25.51,112.47,25.5,27.49,25.48,80.01,25.47,-4.98,25.46,47.55,25.44,100.07,25.43,15.09,25.42,67.61,25.4,-102.36,25.38,87.67,25.37,2.69,25.34,107.73,25.33,22.75,25.31,75.27,25.31,-9.71,25.29,42.81,25.28,95.33,25.27,10.35,25.25,62.87,25.24,115.4,25.23,-107.1,25.23,30.41,25.21,82.94,25.2,-2.05,25.19,50.47,25.17,103,25.16,18.01,25.15,70.54,25.14,-14.45,25.13,-99.43,25.12,38.08,25.11,90.6,25.1,5.61,25.07,110.66,25.07,-111.83,25.06,25.68,25.05,78.2,25.04,-6.79,25.02,45.74,25.01,98.26,25,13.28,24.97,118.32,24.96,-104.17,24.96,33.34,24.94,85.86,24.94,.88,24.91,105.92,24.9,20.94,24.88,73.46,24.87,-11.52,24.86,41,24.84,93.53,24.83,8.54,24.8,113.59,24.79,28.6,24.78,81.13,24.77,-3.86,24.76,48.67,24.74,101.19,24.73,16.2,24.72,68.73,24.7,121.25,24.7,-101.24,24.68,88.79,24.67,3.8,24.65,56.33,24.64,108.85,24.63,23.87,24.61,76.39,24.61,-8.59,24.59,43.93,24.58,96.45,24.57,11.47,24.54,116.51,24.53,-105.98,24.53,31.53,24.51,84.05,24.5,-.93,24.47,104.12,24.46,19.13,24.45,71.65,24.44,-13.33,24.43,-98.31,24.43,39.19,24.41,91.72,24.4,6.73,24.37,111.78,24.37,-110.71,24.36,26.79,24.35,79.32,24.34,-5.67,24.32,46.86,24.31,99.38,24.3,14.39,24.27,-103.05,24.26,34.46,24.25,86.98,24.24,2,24.22,54.52,24.21,107.04,24.2,22.06,24.18,74.58,24.17,-10.4,24.16,42.12,24.15,94.64,24.14,9.66,24.11,114.71,24.1,29.72,24.08,82.24,24.07,-2.74,24.06,49.78,24.04,102.31,24.03,17.32,24.02,69.85,24.01,-15.14,24,-100.12,23.98,89.91,23.97,4.92,23.94,109.97,23.93,24.99,23.92,77.51,23.91,-7.48,23.89,45.05,23.88,97.57,23.87,12.59,23.84,-104.86,23.83,32.65,23.82,85.17,23.81,.19,23.79,52.71,23.78,105.23,23.77,20.25,23.75,72.77,23.75,-12.21,23.73,40.31,23.72,92.83,23.71,7.85,23.68,112.9,23.67,27.91,23.65,80.44,23.64,-4.55,23.63,47.97,23.62,100.5,23.61,15.51,23.58,120.56,23.57,-101.93,23.55,88.1,23.54,3.11,23.53,55.64,23.51,108.16,23.5,23.18,23.49,75.7,23.48,-9.29,23.47,43.24,23.45,95.76,23.44,10.78,23.41,115.82,23.4,30.84,23.39,83.36,23.38,-1.62,23.37,50.9,23.35,103.42,23.34,18.44,23.33,70.96,23.32,-14.02,23.31,-99.01,23.29,91.03,23.28,6.04,23.26,58.56,23.25,111.09,23.24,26.1,23.23,78.63,23.22,-6.36,23.2,46.17,23.19,98.69,23.18,13.7,23.14,-103.74,23.14,33.77,23.13,86.29,23.12,1.3,23.1,53.83,23.09,106.35,23.08,21.37,23.06,73.89,23.05,-11.09,23.04,41.43,23.02,93.95,23.02,8.97,22.99,114.01,22.98,29.03,22.96,81.55,22.95,-3.43,22.94,49.09,22.92,101.62,22.91,16.63,22.89,-15.83,22.88,-100.81,22.86,89.22,22.85,4.23,22.84,-80.75,22.84,56.76,22.82,109.28,22.81,24.29,22.8,76.82,22.79,-8.17,22.78,44.36,22.76,96.88,22.75,11.9,22.72,-105.55,22.71,31.96,22.7,84.48,22.69,-.5,22.68,52.02,22.66,104.54,22.65,19.56,22.64,72.08,22.63,-12.9,22.62,-97.89,22.61,39.62,22.6,92.14,22.59,7.16,22.58,59.68,22.56,112.21,22.55,27.22,22.54,79.74,22.53,-5.24,22.51,47.28,22.5,99.81,22.49,14.82,22.46,-102.62,22.45,34.88,22.44,87.41,22.43,2.42,22.41,54.95,22.4,107.47,22.39,22.49,22.38,75.01,22.37,-9.98,22.35,42.55,22.34,95.07,22.33,10.09,22.29,30.15,22.28,82.67,22.27,-2.31,22.25,50.21,22.24,102.73,22.23,17.75,22.21,70.27,22.2,-14.71,22.19,-99.7,22.18,90.33,22.17,5.35,22.16,-79.63,22.15,57.87,22.14,110.4,22.13,25.41,22.11,77.94,22.1,-7.05,22.09,45.47,22.08,98,22.07,13.01,22.03,-104.43,22.03,33.08,22.01,85.6,22,.61,21.99,-84.37,21.99,53.14,21.98,105.66,21.97,20.68,21.95,73.2,21.94,-11.79,21.93,40.74,21.91,93.26,21.9,8.28,21.87,28.34,21.85,80.86,21.84,-4.12,21.83,48.4,21.81,100.92,21.8,15.94,21.78,-16.52,21.77,-101.51,21.77,36,21.75,88.53,21.74,3.54,21.73,56.06,21.71,108.59,21.7,23.6,21.69,76.13,21.68,-8.86,21.67,43.67,21.65,96.19,21.64,11.2,21.61,31.27,21.59,83.79,21.58,-1.2,21.57,51.33,21.55,103.85,21.54,18.87,21.53,71.39,21.52,-13.59,21.51,-98.58,21.48,6.47,21.47,-78.52,21.47,58.99,21.44,26.53,21.43,79.05,21.42,-5.93,21.41,46.59,21.39,99.12,21.38,14.13,21.35,-103.31,21.34,34.19,21.33,86.72,21.32,1.73,21.31,54.26,21.29,106.78,21.28,21.79,21.27,74.32,21.26,-10.67,21.25,41.86,21.23,94.38,21.22,9.4,21.18,29.46,21.17,81.98,21.16,-3,21.15,-87.99,21.15,49.52,21.13,102.04,21.12,17.06,21.1,-15.4,21.09,-100.39,21.08,37.12,21.06,4.66,21.05,57.18,21.03,109.71,21.02,24.72,21.01,77.24,21,-7.74,20.99,44.78,20.97,97.31,20.96,12.32,20.93,-105.12,20.92,32.38,20.91,84.91,20.9,-.08,20.89,52.45,20.87,104.97,20.86,19.99,20.84,-12.48,20.83,-97.46,20.82,40.05,20.81,92.57,20.8,7.59,20.79,-77.4,20.76,27.65,20.75,80.17,20.74,-4.81,20.73,-89.8,20.73,47.71,20.71,100.23,20.7,15.25,20.67,-102.2,20.66,35.31,20.64,2.85,20.63,55.37,20.6,22.91,20.59,75.44,20.58,-9.55,20.57,42.97,20.55,95.5,20.54,10.51,20.5,30.58,20.49,83.1,20.48,-1.89,20.47,50.64,20.45,103.16,20.44,18.18,20.42,-14.29,20.41,-99.27,20.38,5.78,20.34,25.84,20.33,78.36,20.32,-6.62,20.31,45.9,20.29,98.42,20.28,13.44,20.25,-104.01,20.25,33.5,20.23,86.03,20.22,1.04,20.21,53.56,20.19,106.09,20.18,21.1,20.17,73.63,20.16,-11.36,20.15,41.17,20.13,93.69,20.12,8.7,20.11,-76.28,20.09,28.77,20.07,81.29,20.06,-3.7,20.05,-88.68,20.05,48.83,20.03,101.35,20.03,16.37,20,-16.09,19.99,-101.08,19.99,36.43,19.96,3.97,19.95,56.49,19.93,24.03,19.91,76.55,19.9,-8.43,19.89,44.09,19.88,96.62,19.87,11.63,19.83,31.69,19.81,84.22,19.81,-.77,19.79,51.76,19.78,104.28,19.77,19.29,19.74,-13.17,19.73,-98.15,19.71,6.9,19.67,26.96,19.66,79.48,19.65,-5.5,19.64,-90.49,19.63,47.02,19.62,99.54,19.61,14.56,19.6,-70.43,19.59,-155.41,19.58,-102.89,19.57,34.62,19.55,2.16,19.53,54.68,19.51,22.22,19.5,74.74,19.49,-10.24,19.47,42.28,19.46,94.81,19.45,9.82,19.41,29.88,19.4,82.41,19.39,-2.58,19.38,-87.56,19.37,49.95,19.36,102.47,19.35,17.49,19.33,-14.98,19.32,-99.96,19.29,5.09,19.28,57.61,19.26,110.13,19.25,25.15,19.24,77.67,19.23,-7.31,19.22,45.21,19.2,97.73,19.19,12.75,19.18,-72.24,19.16,32.81,19.13,.35,19.12,52.87,19.1,105.4,19.09,20.41,19.08,72.94,19.07,-12.05,19.06,-97.03,19.03,8.01,19,28.08,18.98,80.6,18.97,-4.39,18.96,-89.37,18.96,48.14,18.95,100.66,18.94,15.68,18.93,-69.31,18.9,-101.77,18.9,35.74,18.88,3.28,18.86,55.8,18.84,23.34,18.82,75.86,18.81,-9.12,18.8,43.4,18.79,95.92,18.78,10.94,18.74,31,18.73,83.53,18.72,-1.46,18.7,51.06,18.69,103.59,18.68,18.6,18.66,-13.86,18.65,-98.84,18.62,6.2,18.58,26.27,18.57,78.79,18.56,-6.19,18.55,-91.18,18.55,46.33,18.53,98.85,18.52,13.87,18.51,-71.12,18.49,-103.58,18.48,33.93,18.46,1.47,18.45,53.99,18.42,21.53,18.41,74.05,18.4,-10.93,18.39,-95.92,18.39,41.59,18.36,9.13,18.33,29.19,18.31,81.72,18.3,-3.27,18.29,-88.25,18.29,49.26,18.28,101.78,18.27,16.79,18.24,-15.67,18.24,121.84,18.23,-100.65,18.23,36.86,18.21,4.4,18.17,24.46,18.16,76.98,18.15,-8,18.14,-92.99,18.13,44.52,18.12,97.04,18.11,12.06,18.07,32.12,18.05,-.34,18.03,52.18,18.02,104.71,18.01,19.72,17.99,-12.74,17.98,-97.72,17.95,7.32,17.94,-77.66,17.91,27.38,17.9,79.91,17.89,-5.08,17.88,-90.06,17.88,47.45,17.86,99.97,17.85,14.99,17.82,35.05,17.79,2.59,17.78,55.11,17.76,22.65,17.74,75.17,17.73,-9.81,17.72,-94.8,17.72,42.71,17.71,95.23,17.7,10.25,17.66,30.31,17.65,82.83,17.64,-2.15,17.62,50.37,17.61,102.9,17.6,17.91,17.58,-14.55,17.57,-99.53,17.56,37.97,17.54,5.51,17.5,25.58,17.49,78.1,17.48,-6.89,17.47,-91.87,17.47,45.64,17.45,98.16,17.44,13.18,17.41,33.24,17.38,.78,17.37,53.3,17.35,105.82,17.35,20.84,17.33,73.36,17.32,-11.62,17.31,-96.61,17.29,8.44,17.25,28.5,17.23,81.03,17.23,-3.96,17.22,-88.94,17.21,48.56,17.2,101.09,17.19,16.1,17.16,121.15,17.15,36.17,17.13,3.7,17.09,23.77,17.08,76.29,17.07,-8.69,17.06,-93.68,17.05,43.83,17.04,96.35,17.03,11.37,16.99,31.43,16.97,-1.03,16.96,51.49,16.94,104.01,16.93,19.03,16.91,-13.43,16.9,-98.42,16.87,6.63,16.84,26.69,16.82,79.22,16.81,-5.77,16.81,-90.75,16.8,46.76,16.79,99.28,16.78,14.29,16.74,34.36,16.72,1.9,16.69,106.94,16.68,21.96,16.67,74.48,16.66,-10.5,16.65,-95.49,16.63,94.54,16.62,9.56,16.58,29.62,16.57,82.14,16.56,-2.84,16.55,49.68,16.53,102.21,16.53,17.22,16.5,-15.24,16.5,122.27,16.49,37.28,16.47,4.82,16.43,24.88,16.41,77.41,16.41,-7.58,16.4,-92.56,16.39,44.95,16.38,97.47,16.37,12.49,16.33,32.55,16.31,.09,16.28,105.13,16.27,20.15,16.25,-12.31,16.24,-97.3,16.21,7.75,16.18,27.81,16.16,80.33,16.15,-4.65,16.14,-89.63,16.14,47.87,16.13,100.4,16.12,15.41,16.09,120.46,16.08,35.47,16.06,3.01,16.03,108.06,16.02,23.08,16.01,75.6,16,-9.39,15.98,43.14,15.97,95.66,15.96,10.68,15.92,30.74,15.9,-1.72,15.89,50.8,15.87,103.32,15.86,18.34,15.84,-14.12,15.83,38.4,15.8,5.94,15.77,26,15.75,78.53,15.75,-6.46,15.74,-91.44,15.73,46.06,15.72,98.59,15.71,13.6,15.67,33.67,15.65,1.2,15.62,106.25,15.61,21.27,15.59,-11.19,15.55,8.87,15.52,28.93,15.49,-3.53,15.48,-88.52,15.48,48.99,15.47,101.51,15.46,16.53,15.43,-15.93,15.42,36.59,15.4,4.13,15.36,24.19,15.35,76.72,15.34,-8.27,15.32,44.26,15.3,11.79,15.26,31.86,15.24,-.6,15.23,-85.59,15.21,104.44,15.21,19.46,15.18,-13,15.17,39.52,15.15,7.06,15.11,27.12,15.1,79.64,15.09,-5.34,15.08,-90.33,15.07,47.18,15.06,99.71,15.05,14.72,15.01,34.78,14.99,2.32,14.96,107.37,14.95,22.38,14.94,74.91,14.93,-10.08,14.89,9.99,14.86,30.05,14.84,-2.41,14.83,-87.4,14.81,102.63,14.8,17.65,14.78,-14.81,14.76,37.71,14.74,5.25,14.7,25.31,14.69,77.83,14.68,-7.15,14.67,-92.13,14.67,45.37,14.65,97.9,14.64,12.91,14.61,32.97,14.59,.51,14.58,-84.47,14.56,105.56,14.55,20.58,14.53,-11.89,14.51,40.64,14.49,8.18,14.45,28.24,14.43,-4.22,14.42,-89.21,14.42,48.3,14.4,100.82,14.39,15.84,14.37,-16.62,14.37,120.89,14.36,35.9,14.33,3.44,14.31,108.49,14.3,23.5,14.28,76.03,14.28,-8.96,14.26,43.56,14.24,11.1,14.2,31.17,14.18,-1.3,14.17,-86.28,14.15,103.75,14.14,18.77,14.12,-13.69,14.11,38.83,14.08,6.37,14.05,26.43,14.03,78.95,14.03,-6.03,14.02,-91.02,14.01,46.49,14,99.01,13.99,14.03,13.95,34.09,13.93,1.63,13.9,106.68,13.89,21.69,13.87,-10.77,13.86,41.76,13.83,9.29,13.8,29.36,13.78,-3.1,13.77,-88.09,13.75,101.94,13.74,16.96,13.72,-15.5,13.7,37.02,13.68,4.56,13.64,24.62,13.63,77.14,13.62,-7.84,13.61,44.68,13.59,12.22,13.55,32.28,13.53,-.18,13.52,-85.16,13.5,104.87,13.49,19.88,13.47,-12.58,13.45,39.95,13.43,7.49,13.39,27.55,13.38,80.07,13.37,-4.91,13.34,15.15,13.3,35.21,13.28,2.75,13.25,107.8,13.24,22.81,13.23,75.33,13.22,-9.65,13.18,10.41,13.15,30.47,13.12,-1.99,13.11,-86.97,13.1,103.06,13.09,18.08,13.06,-14.39,13.05,38.14,13.03,5.68,12.99,25.74,12.98,78.26,12.97,-6.72,12.93,13.34,12.9,33.4,12.87,.94,12.87,-84.04,12.85,105.99,12.84,21,12.82,-11.46,12.8,41.06,12.78,8.6,12.74,28.67,12.72,-3.8,12.69,101.25,12.68,16.27,12.66,-16.19,12.66,121.31,12.65,36.33,12.63,3.87,12.6,108.91,12.59,23.93,12.58,76.45,12.57,-8.53,12.53,11.53,12.5,31.59,12.47,-.87,12.46,-85.85,12.45,104.18,12.44,19.19,12.41,-13.27,12.4,39.26,12.38,6.79,12.34,26.86,12.33,79.38,12.32,-5.6,12.29,99.44,12.28,14.46,12.25,34.52,12.22,2.06,12.2,107.1,12.19,22.12,12.17,-10.34,12.15,42.18,12.13,9.72,12.09,29.78,12.07,-2.68,12.03,17.38,12.01,-15.08,12,37.45,11.98,4.99,11.94,25.05,11.93,77.57,11.92,-7.41,11.88,12.65,11.87,-72.34,11.85,32.71,11.82,.25,11.81,-84.74,11.8,105.3,11.79,20.31,11.76,-12.15,11.76,125.36,11.75,40.37,11.73,7.91,11.69,27.97,11.67,-4.49,11.63,15.58,11.6,35.64,11.58,3.18,11.55,108.22,11.54,23.24,11.53,75.76,11.52,-9.22,11.48,10.84,11.45,30.9,11.42,-1.56,11.41,50.96,11.4,103.49,11.39,18.5,11.36,-13.96,11.35,38.56,11.33,6.1,11.29,26.17,11.28,78.69,11.27,-6.3,11.24,98.75,11.23,13.77,11.2,33.83,11.18,1.37,11.15,106.41,11.14,21.43,11.12,-11.03,11.1,41.49,11.08,9.03,11.05,29.09,11.02,-3.37,11.01,49.15,10.99,16.69,10.95,36.76,10.93,4.29,10.89,24.36,10.88,76.88,10.87,-8.1,10.83,11.96,10.83,-73.03,10.8,32.02,10.78,-.44,10.77,-85.43,10.75,104.6,10.74,19.62,10.72,-12.84,10.7,39.68,10.68,7.22,10.65,27.28,10.63,79.81,10.62,-5.18,10.61,47.35,10.59,14.88,10.58,-70.1,10.55,34.95,10.53,2.49,10.49,22.55,10.47,-9.91,10.46,42.61,10.44,10.15,10.43,-74.84,10.4,30.21,10.38,-2.25,10.36,50.27,10.34,17.81,10.33,-67.17,10.31,122.86,10.31,37.87,10.28,5.41,10.25,25.47,10.23,78,10.22,-6.99,10.21,45.54,10.19,13.08,10.18,-71.91,10.15,33.14,10.13,.68,10.12,-84.31,10.1,105.72,10.09,20.74,10.09,-64.25,10.07,-11.72,10.06,40.8,10.04,8.34,10,28.4,9.98,-4.06,9.96,48.46,9.94,16,9.93,-68.98,9.91,36.06,9.88,3.6,9.85,23.67,9.83,-8.8,9.81,43.73,9.79,11.27,9.78,-73.72,9.75,31.33,9.73,-1.13,9.7,18.93,9.69,-66.06,9.67,-13.53,9.66,38.99,9.64,6.53,9.6,26.59,9.58,-5.87,9.57,46.65,9.55,99.18,9.54,14.19,9.54,-70.79,9.51,34.26,9.49,1.79,9.48,-83.19,9.45,21.86,9.44,-63.13,9.43,-10.6,9.41,41.92,9.39,9.46,9.38,-75.53,9.36,29.52,9.33,-2.94,9.32,49.58,9.3,17.12,9.29,-67.86,9.26,37.18,9.24,4.72,9.21,24.78,9.19,77.31,9.18,-7.68,9.17,44.85,9.15,12.38,9.14,-72.6,9.11,32.45,9.09,-.01,9.06,105.03,9.05,20.05,9.04,-64.94,9.03,-12.41,9.02,40.11,9,7.65,8.96,27.71,8.95,80.23,8.94,-4.75,8.92,47.77,8.9,15.31,8.89,-69.67,8.87,35.37,8.84,2.91,8.83,-82.07,8.81,22.97,8.8,-62.01,8.79,-9.49,8.77,43.04,8.75,10.58,8.74,-74.41,8.71,30.64,8.69,-1.82,8.66,18.24,8.65,-66.75,8.62,38.3,8.6,5.84,8.56,25.9,8.54,-6.56,8.53,45.96,8.51,98.49,8.5,13.5,8.5,-71.48,8.47,33.56,8.45,1.1,8.41,21.17,8.4,-63.82,8.39,-11.3,8.38,126.21,8.38,41.23,8.35,8.77,8.34,-76.22,8.32,28.83,8.3,81.35,8.3,-3.63,8.28,48.89,8.26,16.43,8.25,-68.56,8.22,36.49,8.2,4.03,8.19,-80.95,8.17,24.09,8.16,-60.89,8.14,-8.37,8.13,44.15,8.11,11.69,8.1,-73.29,8.07,31.76,8.05,-.71,8.01,19.36,8.01,-65.63,7.99,124.4,7.98,39.42,7.96,6.96,7.95,-78.03,7.92,27.02,7.9,-5.44,7.89,47.08,7.87,99.6,7.86,14.62,7.85,-70.36,7.83,34.68,7.81,2.22,7.77,22.28,7.76,-62.7,7.75,-10.18,7.73,42.35,7.71,9.88,7.7,-75.1,7.68,29.95,7.65,-2.51,7.62,17.55,7.61,-67.44,7.59,122.59,7.58,37.61,7.56,5.15,7.53,25.21,7.52,-59.77,7.5,-7.25,7.49,45.27,7.47,12.81,7.46,-72.17,7.43,32.87,7.41,.41,7.37,20.47,7.37,-64.51,7.35,-11.99,7.35,125.52,7.34,40.54,7.32,8.08,7.31,-76.91,7.28,28.14,7.27,80.66,7.26,-4.32,7.25,48.2,7.22,15.74,7.21,-69.25,7.19,35.8,7.17,3.34,7.13,23.4,7.12,-61.58,7.11,-9.06,7.09,43.46,7.07,11,7.06,-73.98,7.04,31.06,7.01,-1.4,6.98,18.67,6.97,-66.32,6.94,38.73,6.92,6.27,6.89,26.33,6.88,-58.66,6.86,-6.13,6.85,46.39,6.83,13.93,6.82,-71.06,6.79,33.99,6.77,1.53,6.73,21.59,6.73,-63.39,6.71,-10.87,6.7,41.65,6.68,9.19,6.67,-75.79,6.64,29.26,6.62,-3.21,6.61,49.32,6.58,16.86,6.58,-68.13,6.55,36.92,6.53,4.46,6.49,24.52,6.48,-60.46,6.47,-7.94,6.46,44.58,6.43,12.12,6.42,-72.86,6.41,117.17,6.4,32.18,6.38,-.28,6.34,19.78,6.33,-65.2,6.31,124.83,6.3,39.85,6.28,7.38,6.25,27.45,6.24,-57.54,6.22,-5.01,6.21,47.51,6.19,15.05,6.18,-69.94,6.15,35.11,6.1,22.71,6.09,-62.27,6.07,-9.75,6.06,42.77,6.04,10.31,6.03,-74.67,6,30.37,5.98,-2.09,5.95,17.97,5.94,-67.01,5.91,38.04,5.89,5.58,5.85,25.64,5.84,-59.35,5.83,-6.82,5.82,45.7,5.79,13.24,5.79,-71.75,5.76,33.3,5.7,20.9,5.69,-64.08,5.67,40.96,5.64,8.5,5.64,-76.48,5.61,28.56,5.6,-56.42,5.59,-3.9,5.57,48.63,5.56,101.15,5.55,16.17,5.54,-68.82,5.52,36.23,5.46,23.83,5.45,-61.16,5.44,-8.63,5.42,43.89,5.4,11.43,5.39,-73.56,5.37,116.48,5.37,31.49,5.36,-53.49,5.34,-.97,5.31,19.09,5.3,-65.89,5.27,39.15,5.25,6.69,5.21,26.76,5.21,-58.23,5.19,-5.71,5.18,46.82,5.16,14.36,5.15,-70.63,5.12,34.42,5.06,22.02,5.06,-62.96,5.03,42.08,5.01,9.62,5,-75.36,4.97,29.68,4.96,-55.3,4.92,102.27,4.91,17.28,4.9,-67.7,4.88,37.35,4.82,24.95,4.81,-60.04,4.8,-7.51,4.79,45.01,4.77,97.53,4.76,12.55,4.75,-72.44,4.74,117.59,4.73,32.61,4.72,-52.37,4.67,20.21,4.66,-64.77,4.64,40.27,4.61,7.81,4.6,-77.17,4.58,27.87,4.57,-57.11,4.54,47.94,4.52,15.47,4.51,-69.51,4.48,35.54,4.43,23.14,4.42,-61.85,4.39,43.2,4.37,10.74,4.36,-74.25,4.34,115.79,4.33,30.8,4.33,-54.18,4.29,103.39,4.28,18.4,4.27,-66.58,4.24,38.46,4.18,26.06,4.18,-58.92,4.15,46.13,4.13,13.67,4.12,-71.32,4.09,33.73,4.03,21.33,4.03,-63.66,4,41.39,3.98,8.93,3.97,-76.05,3.95,113.98,3.94,28.99,3.93,-55.99,3.89,101.58,3.88,16.59,3.87,-68.39,3.85,36.65,3.79,24.26,3.78,-60.73,3.76,44.32,3.74,96.84,3.73,11.86,3.72,-73.13,3.71,116.9,3.7,31.92,3.69,-53.07,3.64,19.52,3.63,-65.46,3.61,39.58,3.55,27.18,3.54,-57.8,3.49,14.78,3.48,-70.2,3.46,34.85,3.4,22.45,3.39,-62.54,3.36,42.51,3.34,10.05,3.33,-74.94,3.31,115.09,3.31,30.11,3.3,-54.87,3.26,102.7,3.25,17.71,3.24,-67.27,3.21,37.77,3.16,25.37,3.15,-59.61,3.12,45.44,3.11,97.96,3.1,12.97,3.09,-72.01,3.06,33.04,3.05,-51.95,3.01,20.64,3,-64.35,2.97,40.7,2.94,-76.75,2.92,113.29,2.91,28.3,2.9,-56.68,2.86,15.9,2.85,-69.08,2.82,35.96,2.76,23.56,2.75,-61.42,2.73,43.63,2.71,11.17,2.7,-73.82,2.68,116.21,2.67,31.23,2.66,-53.76,2.61,18.83,2.6,-66.16,2.58,38.89,2.53,111.48,2.52,26.49,2.51,-58.49,2.47,99.08,2.46,14.09,2.45,-70.89,2.43,34.15,2.42,-50.83,2.37,21.76,2.36,-63.23,2.33,41.82,2.3,-75.63,2.29,114.4,2.28,29.42,2.27,-55.57,2.22,17.02,2.21,-67.96,2.18,37.08,2.13,24.68,2.12,-60.3,2.09,44.74,2.07,12.28,2.06,-72.7,2.04,117.33,2.03,32.35,2.03,-52.64,1.98,19.95,1.97,-65.04,1.94,40.01,1.91,-77.44,1.89,112.59,1.88,27.61,1.88,-57.37,1.84,100.2,1.83,15.21,1.82,-69.77,1.79,35.27,1.73,22.87,1.73,-62.11,1.71,127.92,1.7,42.94,1.68,10.47,1.67,-74.51,1.65,115.52,1.64,30.54,1.63,-54.45,1.59,103.12,1.58,18.14,1.58,-66.85,1.55,38.2,1.5,110.79,1.49,25.8,1.48,-59.18,1.43,13.4,1.43,-71.58,1.4,33.46,1.39,-51.52,1.34,21.06,1.33,-63.92,1.31,41.13,1.28,-76.32,1.26,113.71,1.25,28.73,1.24,-56.26,1.2,101.31,1.19,16.33,1.18,-68.66,1.16,36.39,1.1,23.99,1.09,-60.99,1.06,44.05,1.04,11.59,1.03,-73.39,1.02,116.64,1.01,31.65,1,-53.33,.95,19.26,.94,-65.73,.92,124.3,.91,39.32,.88,-78.13,.87,111.9,.86,26.92,.85,-58.07,.81,99.5,.8,14.52,.79,-70.46,.76,34.58,.76,-50.4,.71,22.18,.7,-62.8,.67,42.24,.65,9.78,.64,-75.2,.62,114.83,.61,29.85,.61,-55.14,.57,102.43,.56,17.45,.55,-67.54,.53,122.49,.52,37.51,.49,-79.94,.47,110.09,.47,25.11,.46,-59.87,.41,12.71,.4,-72.27,.37,32.77,.36,-52.21,.32,20.37,.31,-64.61,.28,40.44,.25,-77.01,.23,113.02,.22,28.04,.21,-56.95,.17,100.62,.17,15.64,.16,-69.35,.13,35.7,.07,23.3,.06,-61.68,.02,10.9,.01,-74.08,-.01,115.95,-.02,30.96,-.03,-54.02,-.07,103.55,-.08,18.56,-.09,-66.42,-.11,38.63,-.14,-78.82,-.16,111.21,-.17,26.23,-.18,-58.76,-.23,13.83,-.24,-71.16,-.26,33.89,-.27,-51.09,-.32,21.49,-.33,-63.49,-.35,41.55,-.38,9.09,-.39,-75.89,-.4,114.14,-.41,29.15,-.42,-55.83,-.46,101.74,-.47,16.76,-.48,-68.23,-.5,36.82,-.55,109.4,-.56,24.42,-.57,-60.57,-.62,12.02,-.63,-72.96,-.65,117.07,-.65,32.08,-.66,-52.9,-.71,19.68,-.72,-65.3,-.75,39.74,-.78,-77.7,-.8,112.33,-.8,27.35,-.81,-57.64,-.83,132.39,-.86,14.95,-.87,-70.04,-.89,119.99,-.9,35.01,-.91,-49.98,-.95,22.61,-.96,-62.37,-1.01,10.21,-1.02,-74.77,-1.04,115.26,-1.05,30.27,-1.06,-54.71,-1.1,102.86,-1.1,17.87,-1.11,-67.11,-1.14,37.94,-1.15,-47.05,-1.17,-79.51,-1.19,110.52,-1.2,25.54,-1.21,-59.45,-1.25,13.14,-1.26,-71.85,-1.29,33.2,-1.3,-51.78,-1.35,20.8,-1.36,-64.18,-1.38,40.86,-1.41,-76.58,-1.43,113.45,-1.44,28.46,-1.45,-56.52,-1.47,133.51,-1.49,101.05,-1.5,16.06,-1.51,-68.92,-1.52,121.11,-1.53,36.13,-1.54,-48.86,-1.59,23.73,-1.6,-61.26,-1.65,11.33,-1.66,-73.66,-1.67,116.38,-1.68,31.39,-1.69,-53.59,-1.73,103.98,-1.74,18.99,-1.75,-65.99,-1.77,39.05,-1.78,-45.93,-1.81,-78.39,-1.82,111.64,-1.83,26.65,-1.84,-58.33,-1.89,14.26,-1.9,-70.73,-1.92,119.3,-1.92,34.32,-1.93,-50.67,-1.98,21.92,-1.99,-63.07,-2.04,9.52,-2.05,-75.46,-2.07,114.57,-2.07,29.58,-2.08,-55.4,-2.12,102.17,-2.13,17.18,-2.14,-67.8,-2.17,37.24,-2.18,-47.74,-2.2,-80.2,-2.22,24.85,-2.23,-60.14,-2.28,12.45,-2.29,-72.54,-2.32,32.51,-2.33,-52.48,-2.34,137.56,-2.37,105.09,-2.37,20.11,-2.38,-64.87,-2.41,40.17,-2.42,-44.81,-2.44,-77.27,-2.46,112.76,-2.47,27.77,-2.48,-57.21,-2.52,15.37,-2.53,-69.61,-2.55,120.42,-2.56,35.44,-2.57,-49.55,-2.59,140.48,-2.62,23.04,-2.63,-61.95,-2.67,10.64,-2.68,-74.35,-2.7,115.68,-2.71,30.7,-2.72,-54.28,-2.76,103.29,-2.77,18.3,-2.78,-66.68,-2.8,38.36,-2.81,-46.62,-2.83,-79.08,-2.85,110.95,-2.86,25.96,-2.87,-59.02,-2.92,13.56,-2.93,-71.42,-2.95,33.63,-2.96,-51.36,-2.98,138.67,-3.01,21.23,-3.02,-63.76,-3.05,-43.69,-3.08,-76.16,-3.09,113.88,-3.1,28.89,-3.11,-56.09,-3.13,133.94,-3.16,16.49,-3.17,-68.49,-3.19,121.54,-3.19,36.55,-3.2,-48.43,-3.22,141.6,-3.25,24.15,-3.26,-60.83,-3.28,129.2,-3.3,-40.77,-3.31,11.76,-3.32,-73.23,-3.35,31.82,-3.35,-53.17,-3.37,136.86,-3.39,104.4,-3.4,19.42,-3.41,-65.57,-3.44,39.48,-3.45,-45.5,-3.47,-77.96,-3.5,27.08,-3.5,-57.9,-3.55,14.68,-3.56,152.19,-3.56,-70.3,-3.58,119.73,-3.59,34.74,-3.6,-50.24,-3.61,139.79,-3.65,22.35,-3.65,-62.64,-3.69,-42.58,-3.71,-75.04,-3.73,114.99,-3.74,30.01,-3.75,-54.98,-3.76,135.06,-3.79,102.59,-3.8,17.61,-3.8,-67.37,-3.83,37.67,-3.84,-47.31,-3.86,142.72,-3.86,-79.77,-3.89,25.27,-3.9,-59.71,-3.93,-39.65,-3.95,12.87,-3.95,-72.11,-3.98,32.94,-3.99,-52.05,-4.01,137.98,-4.03,105.52,-4.04,20.54,-4.05,-64.45,-4.08,-44.39,-4.1,-76.85,-4.13,28.2,-4.14,-56.78,-4.19,15.8,-4.2,-69.18,-4.22,35.86,-4.23,-49.12,-4.25,140.91,-4.28,23.46,-4.29,-61.52,-4.33,-41.46,-4.35,-73.92,-4.37,31.13,-4.38,-53.86,-4.4,136.17,-4.42,103.71,-4.43,18.73,-4.44,-66.26,-4.47,38.79,-4.48,-46.19,-4.49,143.84,-4.5,-78.66,-4.52,26.39,-4.53,-58.59,-4.57,-38.53,-4.58,13.99,-4.59,-70.99,-4.62,34.05,-4.63,-50.93,-4.64,139.1,-4.67,21.65,-4.68,-63.33,-4.72,-43.27,-4.74,-75.73,-4.77,29.32,-4.78,-55.67,-4.83,16.92,-4.83,-68.07,-4.86,36.98,-4.87,-48,-4.89,142.03,-4.89,-80.46,-4.92,24.58,-4.93,-60.4,-4.96,-40.34,-4.98,12.18,-4.98,-72.8,-5.01,32.24,-5.02,-52.74,-5.04,137.29,-5.06,104.83,-5.07,19.85,-5.08,-65.14,-5.11,-45.08,-5.13,144.95,-5.14,-77.54,-5.16,27.51,-5.17,-57.48,-5.21,-37.41,-5.22,15.11,-5.23,-69.87,-5.25,120.16,-5.25,35.17,-5.26,-49.81,-5.28,140.22,-5.31,22.77,-5.32,-62.21,-5.36,-42.15,-5.38,-74.61,-5.41,30.44,-5.41,-54.55,-5.46,18.04,-5.47,-66.95,-5.5,38.1,-5.51,-46.89,-5.52,143.15,-5.53,-79.35,-5.56,25.7,-5.56,-59.28,-5.6,-39.22,-5.61,13.3,-5.62,150.81,-5.62,-71.68,-5.65,33.36,-5.66,-51.62,-5.68,138.41,-5.71,20.96,-5.72,-64.02,-5.75,-43.96,-5.77,146.07,-5.77,-76.42,-5.8,28.63,-5.81,-56.36,-5.84,-36.3,-5.86,16.23,-5.87,-68.76,-5.89,36.29,-5.9,-48.69,-5.92,141.34,-5.95,23.89,-5.96,-61.09,-5.99,-41.03,-6.01,149,-6.02,-73.49,-6.04,31.55,-6.05,-53.43,-6.1,19.15,-6.11,-65.83,-6.14,-45.77,-6.16,144.26,-6.17,-78.23,-6.19,26.82,-6.2,-58.17,-6.24,-38.1,-6.25,14.42,-6.26,-70.57,-6.29,34.48,-6.3,-50.5,-6.31,139.53,-6.34,107.07,-6.34,22.08,-6.35,-62.9,-6.39,-42.84,-6.41,147.19,-6.41,-75.3,-6.44,29.74,-6.45,-55.24,-6.48,-35.18,-6.5,17.35,-6.5,-67.64,-6.53,37.41,-6.54,-47.58,-6.56,142.45,-6.56,-80.04,-6.59,25.01,-6.6,-59.98,-6.63,-39.91,-6.65,12.61,-6.65,-72.37,-6.68,32.67,-6.69,-52.31,-6.74,20.27,-6.75,-64.71,-6.78,-44.65,-6.8,145.38,-6.81,-77.11,-6.83,27.94,-6.84,-57.05,-6.88,-36.99,-6.89,15.54,-6.9,-69.45,-6.93,35.6,-6.93,-49.39,-6.95,140.65,-6.97,108.18,-6.98,23.2,-6.99,-61.78,-7.03,-41.72,-7.05,-74.18,-7.08,30.86,-7.09,-54.12,-7.13,18.46,-7.14,-66.52,-7.17,38.53,-7.18,-46.46,-7.2,143.57,-7.2,-78.92,-7.22,111.11,-7.23,26.13,-7.24,-58.86,-7.27,-38.8,-7.29,13.73,-7.29,-71.26,-7.32,33.79,-7.33,-51.19,-7.35,138.84,-7.38,21.39,-7.39,-63.59,-7.42,-43.53,-7.44,146.5,-7.45,-75.99,-7.47,29.05,-7.48,-55.93,-7.52,-35.87,-7.53,16.65,-7.54,-68.33,-7.57,36.72,-7.57,-48.27,-7.59,141.76,-7.61,109.3,-7.62,24.32,-7.63,-60.67,-7.67,-40.6,-7.69,-73.07,-7.72,31.98,-7.73,-53,-7.77,19.58,-7.78,-65.4,-7.82,-45.34,-7.84,-77.8,-7.86,112.23,-7.87,27.24,-7.88,-57.74,-7.91,-37.68,-7.93,14.85,-7.93,-70.14,-7.96,34.91,-7.97,-50.08,-7.99,139.95,-8.02,22.51,-8.03,-62.48,-8.06,-42.41,-8.08,147.62,-8.09,-74.87,-8.11,30.17,-8.12,-54.81,-8.17,17.77,-8.18,-67.21,-8.2,122.82,-8.21,37.83,-8.22,-47.15,-8.23,142.88,-8.26,25.44,-8.27,-59.55,-8.31,-39.49,-8.33,-71.95,-8.35,118.08,-8.36,33.1,-8.37,-51.89,-8.38,138.15,-8.42,20.7,-8.42,-64.28,-8.46,-44.22,-8.48,-76.68,-8.51,28.36,-8.52,-56.62,-8.55,-36.56,-8.57,15.96,-8.58,-69.02,-8.59,121.01,-8.6,36.03,-8.61,-48.96,-8.63,141.07,-8.66,23.63,-8.67,-61.36,-8.71,-41.3,-8.73,-73.76,-8.75,31.29,-8.76,-53.69,-8.81,18.89,-8.82,-66.09,-8.85,38.95,-8.86,-46.03,-8.88,-78.49,-8.91,26.55,-8.91,-58.43,-8.95,-38.37,-8.96,14.15,-8.97,-70.83,-9,34.22,-9.01,-50.77,-9.06,21.82,-9.07,-63.17,-9.1,-43.1,-9.12,146.93,-9.12,-75.57,-9.15,29.48,-9.16,-55.5,-9.2,-35.44,-9.21,17.08,-9.22,-67.9,-9.25,37.14,-9.25,-47.84,-9.3,24.74,-9.31,-60.24,-9.35,-40.18,-9.37,-72.64,-9.4,32.41,-9.41,-52.58,-9.46,20.01,-9.46,-64.98,-9.5,-44.91,-9.52,-77.37,-9.55,27.67,-9.56,-57.31,-9.59,-37.25,-9.61,15.27,-9.62,-69.71,-9.63,120.32,-9.64,35.33,-9.65,-49.65,-9.7,22.94,-9.71,160.44,-9.71,-62.05,-9.75,-41.99,-9.76,148.04,-9.77,-74.45,-9.79,30.6,-9.8,-54.39,-9.85,18.2,-9.86,-66.78,-9.89,38.26,-9.9,-46.72,-9.95,25.86,-9.96,-59.12,-9.99,-39.06,-10.01,13.46,-10.01,-71.52,-10.04,33.53,-10.05,-51.46,-10.1,21.13,-10.11,-63.86,-10.14,-43.8,-10.17,-76.26,-10.19,28.79,-10.2,-56.19,-10.25,16.39,-10.26,-68.59,-10.29,36.45,-10.3,-48.53,-10.35,24.05,-10.35,161.56,-10.35,-60.93,-10.39,-40.87,-10.41,-73.33,-10.44,31.72,-10.45,-53.27,-10.5,19.32,-10.51,-65.67,-10.53,39.38,-10.54,-45.6,-10.59,26.98,-10.6,-58,-10.64,-37.94,-10.65,14.58,-10.66,-70.4,-10.69,34.64,-10.7,-50.34,-10.74,22.24,-10.75,-62.74,-10.79,-42.68,-10.81,-75.14,-10.84,29.91,-10.85,-55.08,-10.9,17.51,-10.91,-67.48,-10.93,37.57,-10.94,-47.41,-10.96,142.62,-10.99,25.17,-11,-59.81,-11.04,-39.75,-11.06,-72.21,-11.09,32.84,-11.09,-52.15,-11.14,20.44,-11.15,-64.55,-11.19,-44.49,-11.21,-76.95,-11.24,28.1,-11.25,-56.89,-11.3,15.7,-11.31,-69.28,-11.33,35.76,-11.34,-49.22,-11.39,23.36,-11.4,-61.62,-11.44,-41.56,-11.46,-74.02,-11.49,31.03,-11.49,-53.96,-11.54,18.63,-11.55,-66.36,-11.58,38.69,-11.59,-46.3,-11.64,26.29,-11.65,-58.69,-11.68,-38.63,-11.7,13.89,-11.71,-71.09,-11.73,33.95,-11.74,-51.03,-11.79,21.55,-11.8,-63.43,-11.84,-43.37,-11.86,-75.83,-11.89,29.22,-11.9,-55.77,-11.94,16.82,-11.95,-68.17,-11.98,36.88,-11.99,-48.1,-12.01,141.93,-12.04,24.48,-12.05,-60.5,-12.08,-40.44,-12.11,-72.9,-12.13,32.14,-12.14,-52.84,-12.19,19.74,-12.2,-65.24,-12.23,39.81,-12.24,-45.18,-12.29,27.41,-12.3,-57.58,-12.31,132.45,-12.35,15.01,-12.36,-69.98,-12.38,35.07,-12.39,-49.91,-12.44,22.67,-12.45,-62.31,-12.49,-42.25,-12.51,-74.71,-12.54,30.34,-12.54,-54.65,-12.56,135.38,-12.59,17.94,-12.6,-67.05,-12.63,38,-12.64,-46.99,-12.66,143.04,-12.69,25.6,-12.7,-59.39,-12.72,130.65,-12.73,-39.32,-12.75,13.2,-12.76,-71.78,-12.78,33.26,-12.79,-51.72,-12.84,20.86,-12.85,-64.12,-12.89,-44.06,-12.91,-76.52,-12.94,28.53,-12.95,-56.46,-12.96,133.57,-13,16.13,-13.01,-68.86,-13.03,36.19,-13.04,-48.8,-13.09,23.79,-13.1,-61.19,-13.14,-41.13,-13.16,-73.59,-13.19,31.45,-13.2,-53.53,-13.25,19.05,-13.25,-65.93,-13.28,39.12,-13.29,-45.87,-13.34,26.72,-13.35,-58.27,-13.37,131.76,-13.4,14.32,-13.41,-70.67,-13.44,34.38,-13.44,-50.6,-13.49,21.98,-13.5,-63,-13.54,-42.94,-13.56,-75.4,-13.59,29.64,-13.6,-55.34,-13.62,134.69,-13.63,49.71,-13.65,17.24,-13.66,-67.74,-13.69,37.31,-13.69,-47.68,-13.71,142.35,-13.74,24.91,-13.75,-60.08,-13.77,129.95,-13.79,-40.01,-13.8,12.51,-13.81,-72.48,-13.84,32.57,-13.85,-52.41,-13.9,20.17,-13.91,-64.81,-13.93,40.23,-13.94,-44.75,-13.99,27.84,-14,-57.15,-14.02,132.88,-14.05,15.44,-14.06,-69.55,-14.09,35.5,-14.1,-49.49,-14.15,23.1,-14.16,-61.89,-14.19,-41.82,-14.22,-74.28,-14.24,30.76,-14.25,-54.22,-14.3,18.36,-14.31,-66.62,-14.34,38.43,-14.35,-46.56,-14.37,143.47,-14.4,26.03,-14.41,-58.96,-14.43,131.07,-14.46,13.63,-14.47,-71.36,-14.49,33.69,-14.5,-51.3,-14.55,21.29,-14.56,-63.69,-14.58,126.34,-14.6,-43.63,-14.65,28.95,-14.66,-56.03,-14.68,134,-14.69,49.02,-14.71,16.55,-14.72,-68.43,-14.74,36.62,-14.75,-48.37,-14.77,141.66,-14.8,24.22,-14.81,-60.77,-14.85,-40.71,-14.87,-73.17,-14.9,31.88,-14.91,-53.1,-14.96,19.48,-14.97,-65.5,-15,39.54,-15,-45.44,-15.02,144.59,-15.05,27.14,-15.06,-57.84,-15.08,132.19,-15.09,47.21,-15.11,14.75,-15.12,-70.24,-15.15,34.81,-15.16,-50.18,-15.21,22.41,-15.22,-62.58,-15.24,127.45,-15.26,-42.51,-15.28,-74.98,-15.31,30.07,-15.31,-54.91,-15.33,135.12,-15.34,50.13,-15.37,17.67,-15.37,-67.31,-15.4,37.73,-15.41,-47.25,-15.43,142.78,-15.46,25.34,-15.47,-59.65,-15.49,130.38,-15.51,-39.59,-15.52,12.94,-15.53,-72.05,-15.56,33,-15.57,-51.99,-15.62,20.6,-15.63,-64.39,-15.64,125.65,-15.66,-44.32,-15.71,28.26,-15.72,-56.72,-15.74,133.31,-15.75,48.32,-15.77,15.86,-15.78,-69.12,-15.81,35.93,-15.82,-49.06,-15.87,23.53,-15.88,-61.46,-15.9,128.57,-15.91,-41.4,-15.94,-73.86,-15.96,31.19,-15.97,-53.8,-15.99,136.24,-16.02,18.79,-16.03,-66.19,-16.06,38.85,-16.07,-46.13,-16.09,143.9,-16.12,26.45,-16.13,-58.53,-16.15,131.5,-16.16,46.52,-16.18,14.05,-16.19,-70.93,-16.22,34.12,-16.23,-50.87,-16.28,21.72,-16.29,-63.27,-16.3,126.76,-16.32,-43.21,-16.37,29.38,-16.38,-55.6,-16.4,134.43,-16.41,49.44,-16.43,16.98,-16.44,-68,-16.47,37.04,-16.48,-47.94,-16.5,142.09,-16.53,24.64,-16.54,-60.34,-16.56,129.69,-16.57,44.71,-16.58,-40.28,-16.59,12.25,-16.6,-72.74,-16.63,32.31,-16.64,-52.68,-16.65,137.35,-16.69,19.91,-16.7,-65.08,-16.71,124.95,-16.73,-45.01,-16.75,145.02,-16.78,27.57,-16.79,-57.41,-16.81,132.62,-16.82,47.63,-16.84,15.17,-16.85,-69.81,-16.88,35.23,-16.89,-49.75,-16.94,22.84,-16.95,-62.15,-16.97,127.88,-16.99,-42.09,-17.04,30.5,-17.05,-54.49,-17.06,135.54,-17.1,18.1,-17.11,-66.89,-17.12,123.15,-17.13,38.16,-17.14,-46.82,-17.16,143.21,-17.19,25.76,-17.2,-59.22,-17.22,130.81,-17.23,45.82,-17.25,13.36,-17.26,-71.62,-17.29,33.43,-17.3,-51.56,-17.32,138.47,-17.35,21.03,-17.36,-63.96,-17.38,126.07,-17.4,-43.9,-17.45,28.69,-17.46,-56.3,-17.47,133.74,-17.48,48.75,-17.51,16.29,-17.52,-68.69,-17.54,36.35,-17.55,-48.63,-17.57,141.4,-17.6,23.95,-17.61,-61.03,-17.63,129,-17.64,44.02,-17.65,-40.97,-17.7,31.62,-17.71,-53.37,-17.73,136.66,-17.76,19.22,-17.77,-65.77,-17.79,124.26,-17.81,-45.71,-17.83,144.33,-17.86,26.88,-17.87,-58.1,-17.89,131.93,-17.9,46.94,-17.92,14.48,-17.93,-70.5,-17.96,34.54,-17.96,-50.44,-17.98,139.59,-18.02,22.14,-18.03,-62.84,-18.04,127.19,-18.06,-42.78,-18.11,29.81,-18.12,-55.18,-18.14,134.85,-18.17,17.41,-18.18,-67.58,-18.2,122.45,-18.22,-47.51,-18.24,142.52,-18.27,25.07,-18.28,-59.91,-18.3,130.12,-18.31,45.13,-18.32,-39.85,-18.33,12.67,-18.37,32.73,-18.38,-52.25,-18.4,137.78,-18.43,20.34,-18.44,-64.65,-18.46,125.38,-18.48,-44.59,-18.49,145.44,-18.53,28,-18.54,-56.99,-18.55,133.04,-18.56,48.06,-18.59,15.6,-18.6,-69.39,-18.62,35.66,-18.63,-49.32,-18.65,140.71,-18.68,23.26,-18.69,-61.72,-18.71,128.31,-18.73,-41.66,-18.78,30.93,-18.79,-54.06,-18.81,135.97,-18.84,18.53,-18.85,-66.46,-18.87,123.57,-18.89,-46.4,-18.91,143.63,-18.94,26.19,-18.95,-58.8,-18.97,131.24,-18.98,46.25,-19,13.79,-19.04,33.85,-19.05,-51.13,-19.07,138.9,-19.1,21.45,-19.11,-63.53,-19.13,126.5,-19.15,-43.47,-19.16,146.56,-19.2,29.12,-19.21,-55.87,-19.23,134.16,-19.26,16.72,-19.27,-68.27,-19.29,121.76,-19.3,-48.21,-19.32,141.83,-19.36,24.38,-19.37,-60.6,-19.38,129.43,-19.4,-40.54,-19.45,32.04,-19.46,-52.94,-19.48,137.09,-19.51,19.64,-19.52,-65.34,-19.54,124.69,-19.56,-45.28,-19.58,144.75,-19.61,27.31,-19.62,-57.68,-19.64,132.35,-19.65,47.37,-19.67,14.91,-19.68,-70.08,-19.72,-50.01,-19.74,140.02,-19.77,22.57,-19.78,-62.41,-19.8,127.62,-19.82,-42.35,-19.84,147.68,-19.87,30.23,-19.88,-54.75,-19.9,135.28,-19.93,17.84,-19.94,-67.15,-19.96,122.88,-19.98,-47.09,-20,142.94,-20.03,25.5,-20.04,-59.49,-20.06,130.54,-20.07,45.56,-20.09,13.1,-20.13,33.16,-20.14,-51.82,-20.16,138.21,-20.19,20.76,-20.2,-64.22,-20.22,125.81,-20.24,-44.16,-20.26,145.87,-20.29,28.43,-20.3,-56.56,-20.32,133.47,-20.33,48.49,-20.35,16.03,-20.36,-68.96,-20.38,121.07,-20.4,-48.9,-20.42,141.13,-20.45,23.69,-20.46,-61.3,-20.48,128.74,-20.5,-41.23,-20.55,31.35,-20.56,-53.63,-20.58,136.4,-20.61,18.95,-20.62,-66.03,-20.64,124,-20.66,-45.97,-20.67,144.06,-20.71,26.62,-20.72,-58.37,-20.74,131.66,-20.74,46.68,-20.77,14.22,-20.8,119.26,-20.81,34.28,-20.82,-50.71,-20.83,139.33,-20.87,21.88,-20.88,-63.1,-20.9,126.93,-20.91,-43.04,-20.93,146.99,-20.97,29.54,-20.98,-55.44,-20.99,134.59,-21.03,17.14,-21.04,-67.84,-21.06,122.19,-21.08,-47.78,-21.09,142.25,-21.13,24.81,-21.14,-60.18,-21.16,129.85,-21.16,44.87,-21.22,117.45,-21.23,32.47,-21.24,-52.51,-21.25,137.52,-21.29,20.07,-21.3,-64.91,-21.32,125.12,-21.34,-44.85,-21.35,145.18,-21.39,27.73,-21.39,165.24,-21.4,-57.25,-21.42,132.78,-21.43,47.8,-21.45,15.34,-21.46,-69.65,-21.48,120.38,-21.5,-49.59,-21.52,140.44,-21.55,23,-21.56,-61.99,-21.58,128.04,-21.6,-41.92,-21.61,148.11,-21.64,115.65,-21.65,30.66,-21.66,-54.32,-21.68,135.71,-21.71,18.26,-21.72,-66.72,-21.74,123.31,-21.76,-46.66,-21.78,143.37,-21.81,25.93,-21.82,-59.06,-21.84,130.97,-21.85,45.99,-21.9,118.57,-21.91,33.59,-21.92,-51.4,-21.94,138.63,-21.97,21.19,-21.98,-63.8,-22,126.24,-22.02,-43.73,-22.04,146.3,-22.07,28.85,-22.08,166.36,-22.08,-56.13,-22.1,133.9,-22.13,16.45,-22.14,-68.53,-22.16,121.5,-22.18,-48.47,-22.2,141.56,-22.23,24.12,-22.24,-60.87,-22.26,129.16,-22.27,44.18,-22.3,149.22,-22.32,116.76,-22.33,31.78,-22.34,-53.21,-22.36,136.83,-22.39,19.38,-22.4,-65.6,-22.42,124.43,-22.44,-45.54,-22.46,144.49,-22.49,27.04,-22.5,-57.94,-22.52,132.09,-22.53,47.11,-22.56,14.64,-22.58,119.69,-22.59,34.71,-22.6,-50.28,-22.62,139.75,-22.66,22.31,-22.67,-62.68,-22.69,127.35,-22.7,-42.62,-22.72,147.42,-22.75,114.95,-22.76,29.97,-22.77,-55.01,-22.79,135.02,-22.82,17.57,-22.83,-67.41,-22.85,122.62,-22.87,-47.35,-22.89,142.68,-22.92,25.23,-22.93,-59.75,-22.95,130.28,-22.96,45.3,-22.99,150.34,-23.01,117.88,-23.02,32.9,-23.03,-52.09,-23.05,137.94,-23.08,20.5,-23.09,-64.49,-23.11,125.54,-23.13,-44.42,-23.15,145.61,-23.18,28.16,-23.19,-56.82,-23.21,133.21,-23.25,15.76,-23.25,-69.22,-23.27,120.81,-23.29,-49.16,-23.31,140.87,-23.35,23.43,-23.36,-61.56,-23.37,128.47,-23.41,148.53,-23.44,116.07,-23.45,31.09,-23.46,-53.9,-23.48,136.13,-23.51,18.69,-23.52,-66.3,-23.54,123.74,-23.56,-46.23,-23.58,143.8,-23.61,26.35,-23.62,-58.63,-23.64,131.4,-23.65,46.41,-23.7,119,-23.71,34.02,-23.72,-50.97,-23.74,139.06,-23.77,21.62,-23.78,-63.37,-23.8,126.66,-23.84,146.72,-23.87,114.26,-23.88,29.28,-23.88,-55.71,-23.9,134.33,-23.94,16.88,-23.95,-68.1,-23.97,121.93,-23.99,-48.04,-24.01,141.99,-24.04,24.54,-24.05,-60.44,-24.07,129.59,-24.08,44.61,-24.11,149.65,-24.13,117.19,-24.14,32.21,-24.15,-52.78,-24.17,137.25,-24.2,19.81,-24.21,-65.18,-24.23,124.85,-24.27,144.92,-24.3,27.47,-24.31,-57.51,-24.33,132.52,-24.37,15.07,-24.38,-69.91,-24.4,120.12,-24.42,-49.85,-24.44,140.18,-24.47,22.73,-24.48,-62.25,-24.5,127.78,-24.54,147.84,-24.56,115.38,-24.57,30.4,-24.58,-54.59,-24.6,135.44,-24.63,18,-24.64,-66.99,-24.66,123.04,-24.7,143.11,-24.74,25.66,-24.75,-59.32,-24.77,130.71,-24.77,45.72,-24.8,150.77,-24.83,118.31,-24.84,33.32,-24.85,-51.66,-24.87,138.37,-24.9,20.93,-24.91,-64.06,-24.93,125.97,-24.97,146.03,-25,28.59,-25.01,-56.4,-25.03,133.63,-25.07,16.19,-25.08,-68.8,-25.1,121.24,-25.12,-48.73,-25.13,141.3,-25.17,23.85,-25.18,-61.13,-25.2,128.9,-25.24,148.96,-25.26,116.5,-25.27,31.52,-25.28,-53.47,-25.3,136.56,-25.33,19.12,-25.34,-65.87,-25.36,124.16,-25.4,144.22,-25.44,26.78,-25.45,-58.21,-25.47,131.83,-25.51,151.89,-25.51,-70.6,-25.53,119.43,-25.55,-50.54,-25.57,139.49,-25.6,22.04,-25.61,-62.94,-25.63,127.09,-25.67,147.15,-25.7,114.69,-25.71,29.71,-25.72,-55.28,-25.73,134.75,-25.77,17.31,-25.78,-67.68,-25.8,122.35,-25.84,142.42,-25.87,24.97,-25.88,-60.01,-25.9,130.02,-25.94,150.08,-25.97,117.62,-25.98,-52.35,-26,137.68,-26.04,20.23,-26.05,-64.75,-26.07,125.28,-26.11,145.34,-26.14,27.9,-26.15,-57.09,-26.17,132.94,-26.21,15.5,-26.21,153.01,-26.22,-69.49,-26.24,120.54,-26.25,-49.42,-26.27,140.61,-26.31,23.16,-26.32,-61.82,-26.34,128.21,-26.38,148.27,-26.4,115.81,-26.41,30.82,-26.42,-54.16,-26.44,135.87,-26.48,18.43,-26.49,-66.56,-26.51,123.47,-26.55,143.53,-26.58,26.09,-26.59,-58.9,-26.61,131.13,-26.65,151.2,-26.67,118.74,-26.69,-51.23,-26.71,138.8,-26.75,21.35,-26.76,-63.63,-26.78,126.4,-26.82,146.46,-26.84,114,-26.85,29.02,-26.86,-55.97,-26.88,134.06,-26.92,16.62,-26.93,-68.37,-26.94,121.66,-26.98,141.73,-27.02,24.28,-27.03,-60.71,-27.05,129.33,-27.09,149.39,-27.11,116.93,-27.12,31.94,-27.13,-53.04,-27.15,136.99,-27.19,19.54,-27.2,-65.44,-27.22,124.59,-27.26,144.65,-27.29,27.21,-27.3,-57.78,-27.32,132.25,-27.36,152.32,-27.37,-70.18,-27.39,119.85,-27.41,-50.12,-27.43,139.92,-27.46,22.47,-27.47,-62.51,-27.49,127.52,-27.53,147.58,-27.55,115.12,-27.56,30.13,-27.57,-54.85,-27.59,135.18,-27.63,17.73,-27.64,-67.25,-27.66,122.78,-27.7,142.84,-27.73,25.4,-27.74,-59.59,-27.76,130.44,-27.8,150.51,-27.83,118.04,-27.85,-51.92,-27.87,138.11,-27.9,20.66,-27.91,-64.32,-27.93,125.71,-27.97,145.77,-28.01,28.32,-28.02,-56.66,-28.04,133.37,-28.07,15.93,-28.08,153.43,-28.08,-69.06,-28.1,120.97,-28.12,-49,-28.14,141.03,-28.18,23.59,-28.19,-61.4,-28.21,128.63,-28.25,148.7,-28.27,116.24,-28.28,31.25,-28.29,-53.73,-28.31,136.3,-28.35,18.85,-28.36,-66.13,-28.38,123.9,-28.42,143.96,-28.45,26.52,-28.46,-58.47,-28.48,131.56,-28.52,151.62,-28.53,-70.87,-28.55,119.16,-28.57,-50.81,-28.59,139.23,-28.62,21.78,-28.63,-63.21,-28.65,126.83,-28.69,146.89,-28.73,29.44,-28.74,-55.54,-28.76,134.49,-28.79,17.04,-28.8,-67.94,-28.82,122.09,-28.87,142.15,-28.9,24.71,-28.91,-60.28,-28.93,129.75,-28.97,149.82,-29,117.35,-29.02,-52.62,-29.04,137.42,-29.07,19.97,-29.08,-65.01,-29.1,125.02,-29.14,145.08,-29.18,27.63,-29.19,-57.35,-29.21,132.68,-29.25,152.74,-29.25,-69.75,-29.27,120.28,-29.29,-49.69,-29.31,140.34,-29.35,22.9,-29.36,-62.09,-29.38,127.94,-29.42,148.01,-29.45,115.54,-29.46,30.56,-29.47,-54.42,-29.49,135.61,-29.52,18.16,-29.53,-66.82,-29.55,123.21,-29.59,143.27,-29.63,25.82,-29.64,-59.16,-29.66,130.87,-29.7,150.93,-29.72,118.47,-29.74,-51.5,-29.76,138.53,-29.8,21.09,-29.81,-63.9,-29.83,126.13,-29.87,146.2,-29.91,28.75,-29.92,-56.23,-29.94,133.8,-29.98,-68.63,-30,121.4,-30.04,141.46,-30.08,24.02,-30.09,-60.97,-30.11,129.06,-30.15,149.12,-30.18,116.66,-30.2,-53.31,-30.22,136.73,-30.25,19.28,-30.26,-65.71,-30.28,124.33,-30.32,144.39,-30.36,26.94,-30.37,-58.04,-30.39,131.99,-30.43,152.05,-30.44,-70.44,-30.46,119.59,-30.48,-50.38,-30.5,139.65,-30.53,22.21,-30.54,-62.78,-30.57,127.25,-30.61,147.32,-30.64,29.87,-30.65,-55.11,-30.67,134.92,-30.72,-67.51,-30.74,122.52,-30.78,142.58,-30.82,25.13,-30.83,-59.85,-30.85,130.18,-30.89,150.24,-30.91,117.78,-30.93,-52.19,-30.96,137.84,-30.99,20.4,-31,-64.59,-31.02,125.44,-31.06,145.51,-31.1,28.06,-31.11,-56.92,-31.13,133.11,-31.18,-69.32,-31.2,120.71,-31.24,140.77,-31.27,23.32,-31.28,-61.66,-31.31,128.37,-31.35,148.43,-31.37,115.97,-31.39,-54,-31.41,136.03,-31.45,18.59,-31.46,-66.4,-31.48,123.64,-31.52,143.7,-31.56,26.25,-31.57,-58.73,-31.63,151.36,-31.64,-71.13,-31.66,118.9,-31.7,138.96,-31.73,21.52,-31.74,-63.47,-31.77,126.56,-31.81,146.62,-31.84,29.18,-31.85,-55.81,-31.87,134.23,-31.92,-68.21,-31.94,121.83,-31.98,141.89,-32.02,24.44,-32.03,-60.54,-32.09,149.55,-32.12,117.09,-32.14,-52.88,-32.16,137.15,-32.2,19.71,-32.21,-65.28,-32.23,124.75,-32.27,144.82,-32.31,27.37,-32.32,-57.61,-32.38,152.48,-32.38,-70.01,-32.41,120.02,-32.45,140.08,-32.48,22.63,-32.49,-62.35,-32.56,147.74,-32.6,-54.69,-32.62,135.34,-32.67,-67.09,-32.69,122.94,-32.73,143.01,-32.77,25.56,-32.78,-59.42,-32.84,150.67,-32.87,118.21,-32.91,138.27,-32.95,20.82,-32.96,-64.16,-33.02,145.93,-33.07,-56.5,-33.14,-68.9,-33.16,121.14,-33.2,141.2,-33.24,23.75,-33.25,-61.23,-33.31,148.86,-33.34,116.4,-33.36,-53.57,-33.38,136.46,-33.42,19.02,-33.43,-65.97,-33.49,144.12,-33.54,-58.31,-33.61,-70.71,-33.63,119.33,-33.67,139.39,-33.71,21.94,-33.72,-63.04,-33.78,147.05,-33.83,-55.38,-33.9,-67.78,-33.92,122.25,-33.96,142.32,-34.01,-60.11,-34.08,149.98,-34.1,117.52,-34.15,137.58,-34.18,20.13,-34.19,-64.85,-34.26,145.24,-34.31,-57.19,-34.37,-69.59,-34.44,140.51,-34.49,-61.92,-34.55,148.17,-34.6,-54.26,-34.62,135.77,-34.67,-66.66,-34.73,143.43,-34.78,-59,-34.85,-71.4,-34.92,138.7,-34.96,-63.73,-35.03,146.36,-35.15,-68.47,-35.21,141.62,-35.26,-60.81,-35.33,149.29,-35.44,-65.54,-35.51,144.55,-35.56,-57.88,-35.63,-70.28,-35.69,139.82,-35.74,-62.61,-35.81,147.48,-35.93,-67.35,-35.99,142.74,-36.04,-59.69,-36.11,-72.09,-36.23,-64.42,-36.29,145.67,-36.41,-69.16,-36.48,140.93,-36.53,-61.5,-36.59,148.6,-36.71,-66.23,-36.78,143.86,-36.83,-58.57,-36.9,-70.97,-37.02,-63.31,-37.08,146.79,-37.21,-68.04,-37.27,142.05,-37.32,-60.38,-37.39,149.71,-37.39,-72.78,-37.51,-65.11,-37.58,144.98,-37.63,-57.45,-37.7,-69.85,-37.82,-62.19,-37.88,147.91,-38.01,-66.92,-38.05,175.63,-38.07,143.17,-38.12,-59.26,-38.2,-71.66,-38.32,-64,-38.38,146.1,-38.51,-68.73,-38.62,-61.07,-38.82,-65.81,-38.86,176.75,-39.01,-70.54,-39.13,-62.88,-39.32,-67.61,-39.36,174.94,-39.52,-72.35,-39.64,-64.69,-39.83,-69.42,-40.15,-66.5,-40.19,176.06,-40.34,-71.23,-40.47,-63.57,-40.66,-68.31,-40.86,-73.04,-40.98,-65.38,-41.18,-70.11,-41.22,172.44,-41.38,147.64,-41.5,-67.19,-41.55,175.37,-41.7,-71.92,-41.9,145.83,-42.03,-69,-42.07,173.56,-42.23,-73.73,-42.36,-66.07,-42.56,-70.81,-42.6,171.75,-42.76,146.95,-42.89,-67.88,-43.1,-72.61,-43.22,-64.95,-43.43,-69.69,-43.76,-66.76,-43.97,-71.5,-44.01,171.06,-44.31,-68.57,-44.52,-73.31,-44.56,169.25,-44.65,-65.64,-44.86,-70.38,-45.12,167.44,-45.2,-67.45,-45.42,-72.19,-45.46,170.37,-45.76,-69.26,-45.98,-74,-46.02,168.56,-46.33,-71.07,-46.68,-68.14,-46.9,-72.88,-47.25,-69.95,-47.48,-74.69,-47.61,-67.02,-47.84,-71.76,-48.2,-68.83,-48.42,-73.57,-48.79,-70.64,-49.02,-75.38,-49.16,-67.72,-49.17,69.79,-49.39,-72.45,-49.76,-69.52,-50,-74.26,-50.37,-71.33,-50.99,-73.14,-51.38,-70.22,-51.62,-74.95,-51.92,-59.63,-52.01,-72.02,-52.65,-73.83,-53.06,-70.91,-53.71,-72.72,-54.13,-69.79,-54.54,-66.86,-55.22,-68.67],cities:[["AL",41.33,19.82],["AR",-34.6,-58.38],["AU",-33.87,151.21],["AT",48.21,16.37],["BD",23.81,90.41],["BE",50.85,4.35],["BA",43.86,18.41],["BR",-23.55,-46.63],["BG",42.7,23.32],["KH",11.56,104.92],["CA",43.65,-79.38],["CL",-33.45,-70.67],["CO",4.71,-74.07],["CR",9.93,-84.08],["HR",45.81,15.98],["CU",23.11,-82.37],["CZ",50.08,14.44],["DK",55.68,12.57],["DO",18.49,-69.93],["EE",59.44,24.75],["FI",60.17,24.94],["FR",48.86,2.35],["GE",41.72,44.78],["DE",52.52,13.4],["GR",37.98,23.73],["GT",14.63,-90.51],["HU",47.5,19.04],["IS",64.15,-21.94],["IN",19.08,72.88],["ID",-6.21,106.85],["IE",53.35,-6.26],["IL",32.08,34.78],["IT",41.9,12.5],["LV",56.95,24.11],["LT",54.69,25.28],["LU",49.61,6.13],["MK",42,21.43],["MY",3.14,101.69],["ME",42.44,19.26],["MM",16.84,96.17],["NL",52.37,4.9],["NZ",-36.85,174.76],["OM",23.59,58.41],["PG",-9.44,147.18],["PL",52.23,21.01],["PT",38.72,-9.14],["RS",44.79,20.45],["RO",44.43,26.1],["SA",24.71,46.68],["SK",48.15,17.11],["SI",46.06,14.51],["ZA",-26.2,28.05],["KR",37.57,126.98],["ES",40.42,-3.7],["SE",59.33,18.07],["CH",47.37,8.54],["TW",25.03,121.57],["TH",13.76,100.5],["TR",41.01,28.98],["AE",25.2,55.27],["GB",51.51,-.13],["US",40.71,-74.01],["US",34.05,-118.24],["UY",-34.9,-56.16],["VE",10.48,-66.9],["VN",21.03,105.85]]};var Yo=i=>new B(parseInt(i.slice(1,3),16)/255,parseInt(i.slice(3,5),16)/255,parseInt(i.slice(5,7),16)/255),Qc=Yo("#D4B26A"),C1=Yo("#F6E3B0"),I1=Yo("#F5F5F7");function va(i,t){let e=i*Math.PI/180,n=t*Math.PI/180;return[Math.cos(e)*Math.sin(n),Math.sin(e),Math.cos(e)*Math.cos(n)]}var qo="float facing(vec3 w){ return dot(normalize(w), normalize(cameraPosition - w)); }",P1=1.45;function L1(i){let t=i.querySelector("canvas"),e=matchMedia("(prefers-reduced-motion: reduce)").matches,n;try{n=new ga({canvas:t,antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{i.classList.add("is-static");return}let s=Math.min(2,window.devicePixelRatio||1);n.setPixelRatio(s),n.setClearColor(0,0);let r=new qi,a=new Ce(30,1,.1,50),o=new yn;r.add(o);let c=2.4,l={uT:{value:c},uPx:{value:s}},h=ii.land,m=h.length/2,u=new Float32Array(m*3);for(let gt=0;gt<m;gt++){let Ut=va(h[gt*2],h[gt*2+1]);u.set(Ut,gt*3)}let p=new Fe;p.setAttribute("position",new Me(u,3));let x=new bi(p,new Oe({uniforms:l,transparent:!0,depthWrite:!1,vertexShader:`uniform float uPx; varying float vF; ${qo}
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vF = facing(w.xyz); vec4 mv = viewMatrix * w; gl_Position = projectionMatrix * mv; gl_PointSize = uPx * 2.1 * (4.6 / -mv.z); }`,fragmentShader:`varying float vF;
      void main(){ vec2 c = gl_PointCoord - 0.5; float a = 1.0 - smoothstep(0.12, 0.5, length(c)); float f = smoothstep(-0.1, 0.45, vF);
        gl_FragColor = vec4(mix(vec3(0.34, 0.34, 0.37), vec3(0.78, 0.78, 0.81), f), a * (0.10 + 0.80 * f)); }`}));x.frustumCulled=!1,o.add(x);let y=va(ii.origin[0],ii.origin[1]),f=ii.cities,d=56,b=[],R=[],T=[];f.forEach((gt,Ut)=>{let Mt=va(gt[1],gt[2]),qt=Math.max(-1,Math.min(1,y[0]*Mt[0]+y[1]*Mt[1]+y[2]*Mt[2])),Xt=Math.acos(qt);if(Xt<.02)return;let zt=.04+.32*(Xt/Math.PI),le=null;for(let re=0;re<=d;re++){let he=re/d,Qt=Math.sin((1-he)*Xt)/Math.sin(Xt),Le=Math.sin(he*Xt)/Math.sin(Xt),ce=1.003+zt*Math.sin(Math.PI*he),we=[(Qt*y[0]+Le*Mt[0])*ce,(Qt*y[1]+Le*Mt[1])*ce,(Qt*y[2]+Le*Mt[2])*ce];le&&(b.push(...le.p,...we),R.push(le.t,he),T.push(Ut/f.length,Ut/f.length)),le={p:we,t:he}}});let w=new Fe;w.setAttribute("position",new Me(new Float32Array(b),3)),w.setAttribute("aT",new Me(new Float32Array(R),1)),w.setAttribute("aArc",new Me(new Float32Array(T),1));let A=new Ji(w,new Oe({uniforms:{uT:l.uT,uGold:{value:Qc},uHi:{value:C1}},transparent:!0,premultipliedAlpha:!0,depthWrite:!1,blending:is,vertexShader:`attribute float aT; attribute float aArc; varying float vT; varying float vArc; varying float vF; ${qo}
      void main(){ vT = aT; vArc = aArc; vec4 w = modelMatrix * vec4(position, 1.0); vF = facing(w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform float uT; uniform vec3 uGold, uHi; varying float vT; varying float vArc; varying float vF;
      void main(){
        float speed = 0.11 + fract(vArc * 7.13) * 0.08;
        float head = fract(uT * speed + vArc * 3.71) * 1.5 - 0.1;
        float d = head - vT, tail = 0.3;
        float g = (d >= 0.0 && d < tail) ? pow(1.0 - d / tail, 1.6) : 0.0;
        float f = smoothstep(-0.35, 0.2, vF);
        float a = (0.26 + 0.74 * g) * (0.12 + 0.88 * f);
        gl_FragColor = vec4(mix(uGold, uHi, g) * a, a);
      }`}));A.frustumCulled=!1,o.add(A);let g=y.map(gt=>gt*1.006),S=[1];f.forEach(gt=>{let Ut=va(gt[1],gt[2]);g.push(Ut[0]*1.006,Ut[1]*1.006,Ut[2]*1.006),S.push(0)});let O=new Fe;O.setAttribute("position",new Me(new Float32Array(g),3)),O.setAttribute("aHome",new Me(new Float32Array(S),1));let P=new bi(O,new Oe({uniforms:{uPx:l.uPx,uGold:{value:Qc},uInk:{value:I1}},transparent:!0,depthWrite:!1,vertexShader:`attribute float aHome; uniform float uPx; varying float vF; varying float vH; ${qo}
      void main(){ vH = aHome; vec4 w = modelMatrix * vec4(position, 1.0); vF = facing(w.xyz); vec4 mv = viewMatrix * w; gl_Position = projectionMatrix * mv;
        gl_PointSize = uPx * (aHome > 0.5 ? 13.0 : 4.6) * (4.6 / -mv.z); }`,fragmentShader:`uniform vec3 uGold, uInk; varying float vF; varying float vH;
      void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c);
        float ring = (1.0 - smoothstep(0.40, 0.5, d)) * smoothstep(0.26, 0.34, d);
        float core = 1.0 - smoothstep(0.10, 0.2, d);
        float a = vH > 0.5 ? ring * 0.9 + core : 1.0 - smoothstep(0.2, 0.5, d);
        float f = smoothstep(-0.05, 0.3, vF);
        gl_FragColor = vec4(vH > 0.5 ? uGold : uInk, a * f); }`}));P.frustumCulled=!1,o.add(P);let D=ii.origin[0]*Math.PI/180,X=-(ii.origin[1]*Math.PI/180)+.35,I=0,V=!1,Y=0,k=0;o.rotation.order="XYZ",o.rotation.x=D*.62;let tt=!1,H=0,Q=0,j=performance.now(),vt=()=>{o.rotation.y=X,n.render(r,a)},It=()=>{let gt=i.getBoundingClientRect(),Ut=Math.max(1,Math.round(gt.width)),Mt=Math.max(1,Math.round(gt.height));n.setSize(Ut,Mt,!1),a.aspect=Ut/Mt;let qt=Math.tan(a.fov*Math.PI/360);a.position.set(0,0,P1/(qt*Math.min(1,a.aspect))),a.updateProjectionMatrix(),l.uPx.value=s*Math.max(.6,Math.min(1.3,Math.min(Ut,Mt)/640)),vt()};t.addEventListener("pointerdown",gt=>{V=!0,Y=gt.clientX,k=performance.now(),I=0;try{t.setPointerCapture(gt.pointerId)}catch{}i.classList.add("is-dragging")}),t.addEventListener("pointermove",gt=>{if(!V)return;let Ut=performance.now(),Mt=gt.clientX-Y;X+=Mt*.006,I=Mt*.006/Math.max(1,Ut-k)*16,Y=gt.clientX,k=Ut,tt||vt()});let Z=()=>{V=!1,i.classList.remove("is-dragging")};t.addEventListener("pointerup",Z),t.addEventListener("pointercancel",Z);function dt(gt){let Ut=Math.min(.05,(gt-(Q||gt))/1e3);Q=gt,l.uT.value=c+(gt-j)/1e3,V||(X+=I+Ut*.07,I*=.94),vt(),H=requestAnimationFrame(dt)}let xt=()=>{tt||e||(tt=!0,Q=0,H=requestAnimationFrame(dt))},Et=()=>{tt=!1,cancelAnimationFrame(H)},ft=!0;"IntersectionObserver"in window?new IntersectionObserver(gt=>gt.forEach(Ut=>{ft=Ut.isIntersecting,ft&&!document.hidden?xt():Et()}),{rootMargin:"120px 0px"}).observe(i):xt(),document.addEventListener("visibilitychange",()=>{document.hidden?Et():ft&&xt()}),window.ResizeObserver?new ResizeObserver(()=>It()).observe(i):window.addEventListener("resize",It),It(),i.classList.add("is-live")}var ya=document.querySelector("[data-globe]");if(ya&&!ya.classList.contains("is-live"))try{L1(ya)}catch{ya.classList.add("is-static")}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
