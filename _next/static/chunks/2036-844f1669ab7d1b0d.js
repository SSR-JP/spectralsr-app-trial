(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2036],{1246:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});var a=r(2988);r(2265);var n=r(6003),o=r(4874),i=r(7437),s=function(t){let{styles:e,themeId:r,defaultTheme:a={}}=t,s=(0,o.Z)(a),h="function"==typeof e?e(r&&s[r]||s):e;return(0,i.jsx)(n.Z,{styles:h})},h=r(7547),u=r(2737),c=function(t){return(0,i.jsx)(s,(0,a.Z)({},t,{defaultTheme:h.Z,themeId:u.Z}))}},1705:function(t,e,r){"use strict";r.d(e,{Z:function(){return b}});var a=r(2988),n=r(3950),o=r(2265);let i=o.createContext(null);function s(){return o.useContext(i)}var h="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",u=r(7437),c=function(t){let{children:e,theme:r}=t,n=s(),c=o.useMemo(()=>{let t=null===n?r:"function"==typeof r?r(n):(0,a.Z)({},n,r);return null!=t&&(t[h]=null!==n),t},[r,n]);return(0,u.jsx)(i.Provider,{value:c,children:e})},l=r(3209),m=r(4828),g=r(5158),f=r(4866);let d={};function y(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return o.useMemo(()=>{let o=t&&e[t]||e;if("function"==typeof r){let i=r(o),s=t?(0,a.Z)({},e,{[t]:i}):i;return n?()=>s:s}return t?(0,a.Z)({},e,{[t]:r}):(0,a.Z)({},e,r)},[t,e,r,n])}var p=function(t){let{children:e,theme:r,themeId:a}=t,n=(0,m.Z)(d),o=s()||d,i=y(a,n,r),h=y(a,o,r,!0),p="rtl"===i.direction;return(0,u.jsx)(c,{theme:h,children:(0,u.jsx)(l.T.Provider,{value:i,children:(0,u.jsx)(g.Z,{value:p,children:(0,u.jsx)(f.Z,{value:null==i?void 0:i.components,children:e})})})})},C=r(2737);let P=["theme"];function b(t){let{theme:e}=t,r=(0,n.Z)(t,P),o=e[C.Z];return(0,u.jsx)(p,(0,a.Z)({},r,{themeId:o?C.Z:void 0,theme:o||e}))}},9380:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var a=r(2988),n=r(8901);function o(t){return String(parseFloat(t)).length===String(t).length}function i(t){return parseFloat(t)}function s(t){var e;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{breakpoints:s=["sm","md","lg"],disableAlign:h=!1,factor:u=2,variants:c=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=r,l=(0,a.Z)({},t);l.typography=(0,a.Z)({},l.typography);let m=l.typography,g=(e=m.htmlFontSize,(t,r)=>{let a=String(t).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(a===r)return t;let n=i(t);"px"!==a&&("em"===a?n=i(t)*i(e):"rem"===a&&(n=i(t)*i(e)));let o=n;if("px"!==r){if("em"===r)o=n/i(e);else{if("rem"!==r)return t;o=n/i(e)}}return parseFloat(o.toFixed(5))+r}),f=s.map(t=>l.breakpoints.values[t]);return c.forEach(t=>{let e=m[t];if(!e)return;let r=parseFloat(g(e.fontSize,"rem"));if(r<=1)return;let{lineHeight:i}=e;if(!o(i)&&!h)throw Error((0,n.Z)(6));o(i)||(i=parseFloat(g(i,"rem"))/parseFloat(r));let s=null;h||(s=t=>(function(t){let{size:e,grid:r}=t,a=e-e%r,n=a+r;return e-a<n-e?a:n})({size:t,grid:function(t){let{lineHeight:e,pixels:r,htmlFontSize:a}=t;return r/(e*a)}({pixels:4,lineHeight:i,htmlFontSize:m.htmlFontSize})})),m[t]=(0,a.Z)({},e,function(t){let{cssProperty:e,min:r,max:a,unit:n="rem",breakpoints:o=[600,900,1200],transform:i=null}=t,s={[e]:"".concat(r).concat(n)},h=(a-r)/o[o.length-1];return o.forEach(t=>{let a=r+h*t;null!==i&&(a=i(a)),s["@media (min-width:".concat(t,"px)")]={[e]:"".concat(Math.round(1e4*a)/1e4).concat(n)}}),s}({cssProperty:"fontSize",min:1+(r-1)/u,max:r,unit:"rem",breakpoints:f,transform:s}))}),l}},8438:function(t){t.exports={style:{fontFamily:"'__Roboto_22ceb1', '__Roboto_Fallback_22ceb1'",fontStyle:"normal"},className:"__className_22ceb1"}},8153:function(t,e,r){"use strict";var a,n;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o(t){return t<0?-1:0===t?0:1}function i(t,e,r){return r<t?t:r>e?e:r}function s(t){return(t%=360)<0&&(t+=360),t}function h(t){return(t%=360)<0&&(t+=360),t}function u(t,e){return[t[0]*e[0][0]+t[1]*e[0][1]+t[2]*e[0][2],t[0]*e[1][0]+t[1]*e[1][1]+t[2]*e[1][2],t[0]*e[2][0]+t[1]*e[2][1]+t[2]*e[2][2]]}r.d(e,{OP:function(){return v},YI:function(){return S},S2:function(){return V},PQ:function(){return G}});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let c=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],l=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],m=[95.047,100,108.883];function g(t,e,r){return(-16777216|(255&t)<<16|(255&e)<<8|255&r)>>>0}function f(t){return g(M(t[0]),M(t[1]),M(t[2]))}function d(t){return t>>16&255}function y(t){return t>>8&255}function p(t){var e;return 116*k(u([b(d(e=t)),b(y(e)),b(255&e)],c)[1]/100)-16}function C(t){return 100*function(t){let e=t*t*t;return e>216/24389?e:(116*t-16)/(24389/27)}((t+16)/116)}function P(t){return 116*k(t/100)-16}function b(t){let e=t/255;return e<=.040449936?e/12.92*100:100*Math.pow((e+.055)/1.055,2.4)}function M(t){var e;let r=t/100;return(e=Math.round(255*(r<=.0031308?12.92*r:1.055*Math.pow(r,1/2.4)-.055)))<0?0:e>255?255:e}function k(t){return t>216/24389?Math.pow(t,1/3):(24389/27*t+16)/116}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{static make(t=m,e=200/Math.PI*C(50)/100,r=50,a=2,n=!1){var o,i;let s=.401288*t[0]+.650173*t[1]+-.051461*t[2],h=-.250268*t[0]+1.204414*t[1]+.045854*t[2],u=-.002079*t[0]+.048952*t[1]+.953127*t[2],c=.8+a/10,l=c>=.9?(1-(o=(c-.9)*10))*.59+.69*o:(1-(i=(c-.8)*10))*.525+.59*i,g=n?1:c*(1-1/3.6*Math.exp((-e-42)/92)),f=[100/s*(g=g>1?1:g<0?0:g)+1-g,100/h*g+1-g,100/u*g+1-g],d=1/(5*e+1),y=d*d*d*d,p=1-y,P=y*e+.1*p*p*Math.cbrt(5*e),b=C(r)/t[1],M=1.48+Math.sqrt(b),k=.725/Math.pow(b,.2),_=[Math.pow(P*f[0]*s/100,.42),Math.pow(P*f[1]*h/100,.42),Math.pow(P*f[2]*u/100,.42)],D=[400*_[0]/(_[0]+27.13),400*_[1]/(_[1]+27.13),400*_[2]/(_[2]+27.13)];return new w(b,(2*D[0]+D[1]+.05*D[2])*k,k,k,l,c,f,P,Math.pow(P,.25),M)}constructor(t,e,r,a,n,o,i,s,h,u){this.n=t,this.aw=e,this.nbb=r,this.ncb=a,this.c=n,this.nc=o,this.rgbD=i,this.fl=s,this.fLRoot=h,this.z=u}}w.DEFAULT=w.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(t,e,r,a,n,o,i,s,h){this.hue=t,this.chroma=e,this.j=r,this.q=a,this.m=n,this.s=o,this.jstar=i,this.astar=s,this.bstar=h}distance(t){let e=this.jstar-t.jstar,r=this.astar-t.astar,a=this.bstar-t.bstar;return 1.41*Math.pow(Math.sqrt(e*e+r*r+a*a),.63)}static fromInt(t){return _.fromIntInViewingConditions(t,w.DEFAULT)}static fromIntInViewingConditions(t,e){let r=b((16711680&t)>>16),a=b((65280&t)>>8),n=b(255&t),i=.41233895*r+.35762064*a+.18051042*n,s=.2126*r+.7152*a+.0722*n,h=.01932141*r+.11916382*a+.95034478*n,u=e.rgbD[0]*(.401288*i+.650173*s-.051461*h),c=e.rgbD[1]*(-.250268*i+1.204414*s+.045854*h),l=e.rgbD[2]*(-.002079*i+.048952*s+.953127*h),m=Math.pow(e.fl*Math.abs(u)/100,.42),g=Math.pow(e.fl*Math.abs(c)/100,.42),f=Math.pow(e.fl*Math.abs(l)/100,.42),d=400*o(u)*m/(m+27.13),y=400*o(c)*g/(g+27.13),p=400*o(l)*f/(f+27.13),C=(11*d+-12*y+p)/11,P=(d+y-2*p)/9,M=180*Math.atan2(P,C)/Math.PI,k=M<0?M+360:M>=360?M-360:M,w=k*Math.PI/180,D=100*Math.pow((40*d+20*y+p)/20*e.nbb/e.aw,e.c*e.z),v=4/e.c*Math.sqrt(D/100)*(e.aw+4)*e.fLRoot,T=Math.pow(5e4/13*(.25*(Math.cos((k<20.14?k+360:k)*Math.PI/180+2)+3.8))*e.nc*e.ncb*Math.sqrt(C*C+P*P)/((20*d+20*y+21*p)/20+.305),.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),A=T*Math.sqrt(D/100),x=A*e.fLRoot,I=50*Math.sqrt(T*e.c/(e.aw+4)),B=1/.0228*Math.log(1+.0228*x);return new _(k,A,D,v,x,I,(1+100*.007)*D/(1+.007*D),B*Math.cos(w),B*Math.sin(w))}static fromJch(t,e,r){return _.fromJchInViewingConditions(t,e,r,w.DEFAULT)}static fromJchInViewingConditions(t,e,r,a){let n=4/a.c*Math.sqrt(t/100)*(a.aw+4)*a.fLRoot,o=e*a.fLRoot,i=50*Math.sqrt(e/Math.sqrt(t/100)*a.c/(a.aw+4)),s=r*Math.PI/180,h=1/.0228*Math.log(1+.0228*o);return new _(r,e,t,n,o,i,(1+100*.007)*t/(1+.007*t),h*Math.cos(s),h*Math.sin(s))}static fromUcs(t,e,r){return _.fromUcsInViewingConditions(t,e,r,w.DEFAULT)}static fromUcsInViewingConditions(t,e,r,a){let n=(Math.exp(.0228*Math.sqrt(e*e+r*r))-1)/.0228/a.fLRoot,o=180/Math.PI*Math.atan2(r,e);return o<0&&(o+=360),_.fromJchInViewingConditions(t/(1-(t-100)*.007),n,o,a)}toInt(){return this.viewed(w.DEFAULT)}viewed(t){let e=Math.pow((0===this.chroma||0===this.j?0:this.chroma/Math.sqrt(this.j/100))/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),r=this.hue*Math.PI/180,a=t.aw*Math.pow(this.j/100,1/t.c/t.z),n=5e4/13*(.25*(Math.cos(r+2)+3.8))*t.nc*t.ncb,i=a/t.nbb,s=Math.sin(r),h=Math.cos(r),u=23*(i+.305)*e/(23*n+11*e*h+108*e*s),c=u*h,m=u*s,f=(460*i+451*c+288*m)/1403,d=(460*i-891*c-261*m)/1403,y=(460*i-220*c-6300*m)/1403,p=Math.max(0,27.13*Math.abs(f)/(400-Math.abs(f))),C=o(f)*(100/t.fl)*Math.pow(p,1/.42),P=Math.max(0,27.13*Math.abs(d)/(400-Math.abs(d))),b=o(d)*(100/t.fl)*Math.pow(P,1/.42),k=Math.max(0,27.13*Math.abs(y)/(400-Math.abs(y))),w=o(y)*(100/t.fl)*Math.pow(k,1/.42),_=C/t.rgbD[0],D=b/t.rgbD[1],v=w/t.rgbD[2];return function(t,e,r){let a=l[0][0]*t+l[0][1]*e+l[0][2]*r,n=l[1][0]*t+l[1][1]*e+l[1][2]*r,o=l[2][0]*t+l[2][1]*e+l[2][2]*r;return g(M(a),M(n),M(o))}(1.86206786*_-1.01125463*D+.14918677*v,.38752654*_+.62144744*D-.00897398*v,-.0158415*_-.03412294*D+1.04996444*v)}static fromXyzInViewingConditions(t,e,r,a){let n=a.rgbD[0]*(.401288*t+.650173*e-.051461*r),i=a.rgbD[1]*(-.250268*t+1.204414*e+.045854*r),s=a.rgbD[2]*(-.002079*t+.048952*e+.953127*r),h=Math.pow(a.fl*Math.abs(n)/100,.42),u=Math.pow(a.fl*Math.abs(i)/100,.42),c=Math.pow(a.fl*Math.abs(s)/100,.42),l=400*o(n)*h/(h+27.13),m=400*o(i)*u/(u+27.13),g=400*o(s)*c/(c+27.13),f=(11*l+-12*m+g)/11,d=(l+m-2*g)/9,y=180*Math.atan2(d,f)/Math.PI,p=y<0?y+360:y>=360?y-360:y,C=p*Math.PI/180,P=100*Math.pow((40*l+20*m+g)/20*a.nbb/a.aw,a.c*a.z),b=4/a.c*Math.sqrt(P/100)*(a.aw+4)*a.fLRoot,M=Math.pow(5e4/13*(.25*(Math.cos((p<20.14?p+360:p)*Math.PI/180+2)+3.8))*a.nc*a.ncb*Math.sqrt(f*f+d*d)/((20*l+20*m+21*g)/20+.305),.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),k=M*Math.sqrt(P/100),w=k*a.fLRoot,D=50*Math.sqrt(M*a.c/(a.aw+4)),v=Math.log(1+.0228*w)/.0228;return new _(p,k,P,b,w,D,(1+100*.007)*P/(1+.007*P),v*Math.cos(C),v*Math.sin(C))}xyzInViewingConditions(t){let e=Math.pow((0===this.chroma||0===this.j?0:this.chroma/Math.sqrt(this.j/100))/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),r=this.hue*Math.PI/180,a=t.aw*Math.pow(this.j/100,1/t.c/t.z),n=5e4/13*(.25*(Math.cos(r+2)+3.8))*t.nc*t.ncb,i=a/t.nbb,s=Math.sin(r),h=Math.cos(r),u=23*(i+.305)*e/(23*n+11*e*h+108*e*s),c=u*h,l=u*s,m=(460*i+451*c+288*l)/1403,g=(460*i-891*c-261*l)/1403,f=(460*i-220*c-6300*l)/1403,d=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),y=o(m)*(100/t.fl)*Math.pow(d,1/.42),p=Math.max(0,27.13*Math.abs(g)/(400-Math.abs(g))),C=o(g)*(100/t.fl)*Math.pow(p,1/.42),P=Math.max(0,27.13*Math.abs(f)/(400-Math.abs(f))),b=o(f)*(100/t.fl)*Math.pow(P,1/.42),M=y/t.rgbD[0],k=C/t.rgbD[1],w=b/t.rgbD[2];return[1.86206786*M-1.01125463*k+.14918677*w,.38752654*M+.62144744*k-.00897398*w,-.0158415*M-.03412294*k+1.04996444*w]}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{static sanitizeRadians(t){return(t+8*Math.PI)%(2*Math.PI)}static trueDelinearized(t){let e=t/100;return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}static chromaticAdaptation(t){let e=Math.pow(Math.abs(t),.42);return 400*o(t)*e/(e+27.13)}static hueOf(t){let e=u(t,D.SCALED_DISCOUNT_FROM_LINRGB),r=D.chromaticAdaptation(e[0]),a=D.chromaticAdaptation(e[1]),n=D.chromaticAdaptation(e[2]);return Math.atan2((r+a-2*n)/9,(11*r+-12*a+n)/11)}static areInCyclicOrder(t,e,r){return D.sanitizeRadians(e-t)<D.sanitizeRadians(r-t)}static intercept(t,e,r){return(e-t)/(r-t)}static lerpPoint(t,e,r){return[t[0]+(r[0]-t[0])*e,t[1]+(r[1]-t[1])*e,t[2]+(r[2]-t[2])*e]}static setCoordinate(t,e,r,a){let n=D.intercept(t[a],e,r[a]);return D.lerpPoint(t,n,r)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,e){let r=D.Y_FROM_LINRGB[0],a=D.Y_FROM_LINRGB[1],n=D.Y_FROM_LINRGB[2],o=e%4<=1?0:100,i=e%2==0?0:100;if(e<4){let e=(t-o*a-i*n)/r;return D.isBounded(e)?[e,o,i]:[-1,-1,-1]}if(e<8){let e=(t-i*r-o*n)/a;return D.isBounded(e)?[i,e,o]:[-1,-1,-1]}{let e=(t-o*r-i*a)/n;return D.isBounded(e)?[o,i,e]:[-1,-1,-1]}}static bisectToSegment(t,e){let r=[-1,-1,-1],a=r,n=0,o=0,i=!1,s=!0;for(let h=0;h<12;h++){let u=D.nthVertex(t,h);if(u[0]<0)continue;let c=D.hueOf(u);if(!i){r=u,a=u,n=c,o=c,i=!0;continue}(s||D.areInCyclicOrder(n,c,o))&&(s=!1,D.areInCyclicOrder(n,e,c)?(a=u,o=c):(r=u,n=c))}return[r,a]}static midpoint(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,e){let r=D.bisectToSegment(t,e),a=r[0],n=D.hueOf(a),o=r[1];for(let t=0;t<3;t++)if(a[t]!==o[t]){let r=-1,i=255;a[t]<o[t]?(r=D.criticalPlaneBelow(D.trueDelinearized(a[t])),i=D.criticalPlaneAbove(D.trueDelinearized(o[t]))):(r=D.criticalPlaneAbove(D.trueDelinearized(a[t])),i=D.criticalPlaneBelow(D.trueDelinearized(o[t])));for(let s=0;s<8&&!(1>=Math.abs(i-r));s++){let s=Math.floor((r+i)/2),h=D.CRITICAL_PLANES[s],u=D.setCoordinate(a,h,o,t),c=D.hueOf(u);D.areInCyclicOrder(n,e,c)?(o=u,i=s):(a=u,n=c,r=s)}}return D.midpoint(a,o)}static inverseChromaticAdaptation(t){let e=Math.abs(t);return o(t)*Math.pow(Math.max(0,27.13*e/(400-e)),1/.42)}static findResultByJ(t,e,r){let a=11*Math.sqrt(r),n=w.DEFAULT,o=1/Math.pow(1.64-Math.pow(.29,n.n),.73),i=5e4/13*(.25*(Math.cos(t+2)+3.8))*n.nc*n.ncb,s=Math.sin(t),h=Math.cos(t);for(let t=0;t<5;t++){let c=a/100,l=Math.pow((0===e||0===a?0:e/Math.sqrt(c))*o,1/.9),m=n.aw*Math.pow(c,1/n.c/n.z)/n.nbb,g=23*(m+.305)*l/(23*i+11*l*h+108*l*s),d=g*h,y=g*s,p=(460*m+451*d+288*y)/1403,C=(460*m-891*d-261*y)/1403,P=(460*m-220*d-6300*y)/1403,b=u([D.inverseChromaticAdaptation(p),D.inverseChromaticAdaptation(C),D.inverseChromaticAdaptation(P)],D.LINRGB_FROM_SCALED_DISCOUNT);if(b[0]<0||b[1]<0||b[2]<0)break;let M=D.Y_FROM_LINRGB[0],k=D.Y_FROM_LINRGB[1],w=D.Y_FROM_LINRGB[2],_=M*b[0]+k*b[1]+w*b[2];if(_<=0)break;if(4===t||.002>Math.abs(_-r)){if(b[0]>100.01||b[1]>100.01||b[2]>100.01)return 0;return f(b)}a-=(_-r)*a/(2*_)}return 0}static solveToInt(t,e,r){if(e<1e-4||r<1e-4||r>99.9999)return function(t){let e=M(C(t));return g(e,e,e)}(r);let a=(t=h(t))/180*Math.PI,n=C(r),o=D.findResultByJ(a,e,n);return 0!==o?o:f(D.bisectToLimit(n,a))}static solveToCam(t,e,r){return _.fromInt(D.solveToInt(t,e,r))}}D.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,2795742885861124e-19],[5891086651375999e-19,.0029785502573438758,3270666104008398e-19],[10146692491640572e-20,5364214359186694e-19,.0032979401770712076]],D.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]],D.Y_FROM_LINRGB=[.2126,.7152,.0722],D.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{static from(t,e,r){return new v(D.solveToInt(t,e,r))}static fromInt(t){return new v(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(D.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(D.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(D.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;let e=_.fromInt(t);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=p(t),this.argb=t}setInternalState(t){let e=_.fromInt(t);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=p(t),this.argb=t}inViewingConditions(t){let e=_.fromInt(this.toInt()).xyzInViewingConditions(t),r=_.fromXyzInViewingConditions(e[0],e[1],e[2],w.make());return v.from(r.hue,r.chroma,P(e[1]))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{static isDisliked(t){let e=Math.round(t.hue)>=90&&111>=Math.round(t.hue),r=Math.round(t.chroma)>16,a=65>Math.round(t.tone);return e&&r&&a}static fixIfDisliked(t){return T.isDisliked(t)?v.from(t.hue,t.chroma,70):t}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static fromInt(t){let e=v.fromInt(t);return A.fromHct(e)}static fromHct(t){return new A(t.hue,t.chroma,t)}static fromHueAndChroma(t,e){let r=new x(t,e).create();return new A(t,e,r)}constructor(t,e,r){this.hue=t,this.chroma=e,this.keyColor=r,this.cache=new Map}tone(t){let e=this.cache.get(t);return void 0===e&&(e=v.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,e)),e}getHct(t){return v.fromInt(this.tone(t))}}class x{constructor(t,e){this.hue=t,this.requestedChroma=e,this.chromaCache=new Map,this.maxChromaValue=200}create(){let t=0,e=100;for(;t<e;){let r=Math.floor((t+e)/2),a=this.maxChroma(r)<this.maxChroma(r+1);if(this.maxChroma(r)>=this.requestedChroma-.01){if(Math.abs(t-50)<Math.abs(e-50))e=r;else{if(t===r)return v.from(this.hue,this.requestedChroma,t);t=r}}else a?t=r+1:e=r}return v.from(this.hue,this.requestedChroma,t)}maxChroma(t){if(this.chromaCache.has(t))return this.chromaCache.get(t);let e=v.from(this.hue,this.maxChromaValue,t).chroma;return this.chromaCache.set(t,e),e}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t,e,r,a){this.low=t,this.normal=e,this.medium=r,this.high=a}get(t){var e,r,a,n,o,i,s,h,u;return t<=-1?this.low:t<0?(e=this.low,r=this.normal,(1-(a=(t- -1)/1))*e+a*r):t<.5?(n=this.normal,o=this.medium,(1-(i=(t-0)/.5))*n+i*o):t<1?(s=this.medium,h=this.high,(1-(u=(t-.5)/.5))*s+u*h):this.high}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static ratioOfTones(t,e){return t=i(0,100,t),e=i(0,100,e),B.ratioOfYs(C(t),C(e))}static ratioOfYs(t,e){let r=t>e?t:e;return(r+5)/((r===e?t:e)+5)}static lighter(t,e){if(t<0||t>100)return -1;let r=C(t),a=e*(r+5)-5,n=B.ratioOfYs(a,r);if(n<e&&Math.abs(n-e)>.04)return -1;let o=P(a)+.4;return o<0||o>100?-1:o}static darker(t,e){if(t<0||t>100)return -1;let r=C(t),a=(r+5)/e-5,n=B.ratioOfYs(r,a);if(n<e&&Math.abs(n-e)>.04)return -1;let o=P(a)-.4;return o<0||o>100?-1:o}static lighterUnsafe(t,e){let r=B.lighter(t,e);return r<0?100:r}static darkerUnsafe(t,e){let r=B.darker(t,e);return r<0?0:r}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromPalette(t){return new F(t.name??"",t.palette,t.tone,t.isBackground??!1,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}constructor(t,e,r,a,n,o,i,s){if(this.name=t,this.palette=e,this.tone=r,this.isBackground=a,this.background=n,this.secondBackground=o,this.contrastCurve=i,this.toneDeltaPair=s,this.hctCache=new Map,!n&&o)throw Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);if(!n&&i)throw Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);if(n&&!i)throw Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(t){return this.getHct(t).toInt()}getHct(t){let e=this.hctCache.get(t);if(null!=e)return e;let r=this.getTone(t),a=this.palette(t).getHct(r);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,a),a}getTone(t){let e=t.contrastLevel<0;if(this.toneDeltaPair){let r=this.toneDeltaPair(t),a=r.roleA,n=r.roleB,o=r.delta,s=r.polarity,h=r.stayTogether,u=this.background(t).getTone(t),c="nearer"===s||"lighter"===s&&!t.isDark||"darker"===s&&t.isDark,l=c?a:n,m=c?n:a,g=this.name===l.name,f=t.isDark?1:-1,d=l.contrastCurve.get(t.contrastLevel),y=m.contrastCurve.get(t.contrastLevel),p=l.tone(t),C=B.ratioOfTones(u,p)>=d?p:F.foregroundTone(u,d),P=m.tone(t),b=B.ratioOfTones(u,P)>=y?P:F.foregroundTone(u,y);return e&&(C=F.foregroundTone(u,d),b=F.foregroundTone(u,y)),(b-C)*f>=o||((b=i(0,100,C+o*f))-C)*f>=o||(C=i(0,100,b-o*f)),50<=C&&C<60?b=f>0?Math.max(b,(C=60)+o*f):Math.min(b,(C=49)+o*f):50<=b&&b<60&&(b=h?f>0?Math.max(b,(C=60)+o*f):Math.min(b,(C=49)+o*f):f>0?60:49),g?C:b}{let r=this.tone(t);if(null==this.background)return r;let a=this.background(t).getTone(t),n=this.contrastCurve.get(t.contrastLevel);if(B.ratioOfTones(a,r)>=n||(r=F.foregroundTone(a,n)),e&&(r=F.foregroundTone(a,n)),this.isBackground&&50<=r&&r<60&&(r=B.ratioOfTones(49,a)>=n?49:60),this.secondBackground){let[e,a]=[this.background,this.secondBackground],[o,i]=[e(t).getTone(t),a(t).getTone(t)],[s,h]=[Math.max(o,i),Math.min(o,i)];if(B.ratioOfTones(s,r)>=n&&B.ratioOfTones(h,r)>=n)return r;let u=B.lighter(s,n),c=B.darker(h,n),l=[];return(-1!==u&&l.push(u),-1!==c&&l.push(c),F.tonePrefersLightForeground(o)||F.tonePrefersLightForeground(i))?u<0?100:u:1===l.length?l[0]:c<0?0:c}return r}}static foregroundTone(t,e){let r=B.lighterUnsafe(t,e),a=B.darkerUnsafe(t,e),n=B.ratioOfTones(r,t),o=B.ratioOfTones(a,t);if(!F.tonePrefersLightForeground(t))return o>=e||o>=n?a:r;{let t=.1>Math.abs(n-o)&&n<e&&o<e;return n>=e||n>=o||t?r:a}}static tonePrefersLightForeground(t){return 60>Math.round(t)}static toneAllowsLightForeground(t){return 49>=Math.round(t)}static enableLightForeground(t){return F.tonePrefersLightForeground(t)&&!F.toneAllowsLightForeground(t)?49:t}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t,e,r,a,n){this.roleA=t,this.roleB=e,this.delta=r,this.polarity=a,this.stayTogether=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){return t.variant===a.FIDELITY||t.variant===a.CONTENT}function O(t){return t.variant===a.MONOCHROME}(n=a||(a={}))[n.MONOCHROME=0]="MONOCHROME",n[n.NEUTRAL=1]="NEUTRAL",n[n.TONAL_SPOT=2]="TONAL_SPOT",n[n.VIBRANT=3]="VIBRANT",n[n.EXPRESSIVE=4]="EXPRESSIVE",n[n.FIDELITY=5]="FIDELITY",n[n.CONTENT=6]="CONTENT",n[n.RAINBOW=7]="RAINBOW",n[n.FRUIT_SALAD=8]="FRUIT_SALAD";class S{static highestSurface(t){return t.isDark?S.surfaceBright:S.surfaceDim}}S.contentAccentToneDelta=15,S.primaryPaletteKeyColor=F.fromPalette({name:"primary_palette_key_color",palette:t=>t.primaryPalette,tone:t=>t.primaryPalette.keyColor.tone}),S.secondaryPaletteKeyColor=F.fromPalette({name:"secondary_palette_key_color",palette:t=>t.secondaryPalette,tone:t=>t.secondaryPalette.keyColor.tone}),S.tertiaryPaletteKeyColor=F.fromPalette({name:"tertiary_palette_key_color",palette:t=>t.tertiaryPalette,tone:t=>t.tertiaryPalette.keyColor.tone}),S.neutralPaletteKeyColor=F.fromPalette({name:"neutral_palette_key_color",palette:t=>t.neutralPalette,tone:t=>t.neutralPalette.keyColor.tone}),S.neutralVariantPaletteKeyColor=F.fromPalette({name:"neutral_variant_palette_key_color",palette:t=>t.neutralVariantPalette,tone:t=>t.neutralVariantPalette.keyColor.tone}),S.background=F.fromPalette({name:"background",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:98,isBackground:!0}),S.onBackground=F.fromPalette({name:"on_background",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:10,background:t=>S.background,contrastCurve:new I(3,3,4.5,7)}),S.surface=F.fromPalette({name:"surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:98,isBackground:!0}),S.surfaceDim=F.fromPalette({name:"surface_dim",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:new I(87,87,80,75).get(t.contrastLevel),isBackground:!0}),S.surfaceBright=F.fromPalette({name:"surface_bright",palette:t=>t.neutralPalette,tone:t=>t.isDark?new I(24,24,29,34).get(t.contrastLevel):98,isBackground:!0}),S.surfaceContainerLowest=F.fromPalette({name:"surface_container_lowest",palette:t=>t.neutralPalette,tone:t=>t.isDark?new I(4,4,2,0).get(t.contrastLevel):100,isBackground:!0}),S.surfaceContainerLow=F.fromPalette({name:"surface_container_low",palette:t=>t.neutralPalette,tone:t=>t.isDark?new I(10,10,11,12).get(t.contrastLevel):new I(96,96,96,95).get(t.contrastLevel),isBackground:!0}),S.surfaceContainer=F.fromPalette({name:"surface_container",palette:t=>t.neutralPalette,tone:t=>t.isDark?new I(12,12,16,20).get(t.contrastLevel):new I(94,94,92,90).get(t.contrastLevel),isBackground:!0}),S.surfaceContainerHigh=F.fromPalette({name:"surface_container_high",palette:t=>t.neutralPalette,tone:t=>t.isDark?new I(17,17,21,25).get(t.contrastLevel):new I(92,92,88,85).get(t.contrastLevel),isBackground:!0}),S.surfaceContainerHighest=F.fromPalette({name:"surface_container_highest",palette:t=>t.neutralPalette,tone:t=>t.isDark?new I(22,22,26,30).get(t.contrastLevel):new I(90,90,84,80).get(t.contrastLevel),isBackground:!0}),S.onSurface=F.fromPalette({name:"on_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:10,background:t=>S.highestSurface(t),contrastCurve:new I(4.5,7,11,21)}),S.surfaceVariant=F.fromPalette({name:"surface_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?30:90,isBackground:!0}),S.onSurfaceVariant=F.fromPalette({name:"on_surface_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?80:30,background:t=>S.highestSurface(t),contrastCurve:new I(3,4.5,7,11)}),S.inverseSurface=F.fromPalette({name:"inverse_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:20}),S.inverseOnSurface=F.fromPalette({name:"inverse_on_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?20:95,background:t=>S.inverseSurface,contrastCurve:new I(4.5,7,11,21)}),S.outline=F.fromPalette({name:"outline",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?60:50,background:t=>S.highestSurface(t),contrastCurve:new I(1.5,3,4.5,7)}),S.outlineVariant=F.fromPalette({name:"outline_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?30:80,background:t=>S.highestSurface(t),contrastCurve:new I(1,1,3,4.5)}),S.shadow=F.fromPalette({name:"shadow",palette:t=>t.neutralPalette,tone:t=>0}),S.scrim=F.fromPalette({name:"scrim",palette:t=>t.neutralPalette,tone:t=>0}),S.surfaceTint=F.fromPalette({name:"surface_tint",palette:t=>t.primaryPalette,tone:t=>t.isDark?80:40,isBackground:!0}),S.primary=F.fromPalette({name:"primary",palette:t=>t.primaryPalette,tone:t=>O(t)?t.isDark?100:0:t.isDark?80:40,isBackground:!0,background:t=>S.highestSurface(t),contrastCurve:new I(3,4.5,7,7),toneDeltaPair:t=>new R(S.primaryContainer,S.primary,10,"nearer",!1)}),S.onPrimary=F.fromPalette({name:"on_primary",palette:t=>t.primaryPalette,tone:t=>O(t)?t.isDark?10:90:t.isDark?20:100,background:t=>S.primary,contrastCurve:new I(4.5,7,11,21)}),S.primaryContainer=F.fromPalette({name:"primary_container",palette:t=>t.primaryPalette,tone:t=>H(t)?t.sourceColorHct.tone:O(t)?t.isDark?85:25:t.isDark?30:90,isBackground:!0,background:t=>S.highestSurface(t),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:t=>new R(S.primaryContainer,S.primary,10,"nearer",!1)}),S.onPrimaryContainer=F.fromPalette({name:"on_primary_container",palette:t=>t.primaryPalette,tone:t=>H(t)?F.foregroundTone(S.primaryContainer.tone(t),4.5):O(t)?t.isDark?0:100:t.isDark?90:30,background:t=>S.primaryContainer,contrastCurve:new I(3,4.5,7,11)}),S.inversePrimary=F.fromPalette({name:"inverse_primary",palette:t=>t.primaryPalette,tone:t=>t.isDark?40:80,background:t=>S.inverseSurface,contrastCurve:new I(3,4.5,7,7)}),S.secondary=F.fromPalette({name:"secondary",palette:t=>t.secondaryPalette,tone:t=>t.isDark?80:40,isBackground:!0,background:t=>S.highestSurface(t),contrastCurve:new I(3,4.5,7,7),toneDeltaPair:t=>new R(S.secondaryContainer,S.secondary,10,"nearer",!1)}),S.onSecondary=F.fromPalette({name:"on_secondary",palette:t=>t.secondaryPalette,tone:t=>O(t)?t.isDark?10:100:t.isDark?20:100,background:t=>S.secondary,contrastCurve:new I(4.5,7,11,21)}),S.secondaryContainer=F.fromPalette({name:"secondary_container",palette:t=>t.secondaryPalette,tone:t=>{let e=t.isDark?30:90;return O(t)?t.isDark?30:85:H(t)?function(t,e,r,a){let n=r,o=v.from(t,e,r);if(o.chroma<e){let r=o.chroma;for(;o.chroma<e;){n+=a?-1:1;let i=v.from(t,e,n);if(r>i.chroma||.4>Math.abs(i.chroma-e))break;Math.abs(i.chroma-e)<Math.abs(o.chroma-e)&&(o=i),r=Math.max(r,i.chroma)}}return n}(t.secondaryPalette.hue,t.secondaryPalette.chroma,e,!t.isDark):e},isBackground:!0,background:t=>S.highestSurface(t),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:t=>new R(S.secondaryContainer,S.secondary,10,"nearer",!1)}),S.onSecondaryContainer=F.fromPalette({name:"on_secondary_container",palette:t=>t.secondaryPalette,tone:t=>O(t)?t.isDark?90:10:H(t)?F.foregroundTone(S.secondaryContainer.tone(t),4.5):t.isDark?90:30,background:t=>S.secondaryContainer,contrastCurve:new I(3,4.5,7,11)}),S.tertiary=F.fromPalette({name:"tertiary",palette:t=>t.tertiaryPalette,tone:t=>O(t)?t.isDark?90:25:t.isDark?80:40,isBackground:!0,background:t=>S.highestSurface(t),contrastCurve:new I(3,4.5,7,7),toneDeltaPair:t=>new R(S.tertiaryContainer,S.tertiary,10,"nearer",!1)}),S.onTertiary=F.fromPalette({name:"on_tertiary",palette:t=>t.tertiaryPalette,tone:t=>O(t)?t.isDark?10:90:t.isDark?20:100,background:t=>S.tertiary,contrastCurve:new I(4.5,7,11,21)}),S.tertiaryContainer=F.fromPalette({name:"tertiary_container",palette:t=>t.tertiaryPalette,tone:t=>{if(O(t))return t.isDark?60:49;if(!H(t))return t.isDark?30:90;let e=t.tertiaryPalette.getHct(t.sourceColorHct.tone);return T.fixIfDisliked(e).tone},isBackground:!0,background:t=>S.highestSurface(t),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:t=>new R(S.tertiaryContainer,S.tertiary,10,"nearer",!1)}),S.onTertiaryContainer=F.fromPalette({name:"on_tertiary_container",palette:t=>t.tertiaryPalette,tone:t=>O(t)?t.isDark?0:100:H(t)?F.foregroundTone(S.tertiaryContainer.tone(t),4.5):t.isDark?90:30,background:t=>S.tertiaryContainer,contrastCurve:new I(3,4.5,7,11)}),S.error=F.fromPalette({name:"error",palette:t=>t.errorPalette,tone:t=>t.isDark?80:40,isBackground:!0,background:t=>S.highestSurface(t),contrastCurve:new I(3,4.5,7,7),toneDeltaPair:t=>new R(S.errorContainer,S.error,10,"nearer",!1)}),S.onError=F.fromPalette({name:"on_error",palette:t=>t.errorPalette,tone:t=>t.isDark?20:100,background:t=>S.error,contrastCurve:new I(4.5,7,11,21)}),S.errorContainer=F.fromPalette({name:"error_container",palette:t=>t.errorPalette,tone:t=>t.isDark?30:90,isBackground:!0,background:t=>S.highestSurface(t),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:t=>new R(S.errorContainer,S.error,10,"nearer",!1)}),S.onErrorContainer=F.fromPalette({name:"on_error_container",palette:t=>t.errorPalette,tone:t=>O(t)?t.isDark?90:10:t.isDark?90:30,background:t=>S.errorContainer,contrastCurve:new I(3,4.5,7,11)}),S.primaryFixed=F.fromPalette({name:"primary_fixed",palette:t=>t.primaryPalette,tone:t=>O(t)?40:90,isBackground:!0,background:t=>S.highestSurface(t),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:t=>new R(S.primaryFixed,S.primaryFixedDim,10,"lighter",!0)}),S.primaryFixedDim=F.fromPalette({name:"primary_fixed_dim",palette:t=>t.primaryPalette,tone:t=>O(t)?30:80,isBackground:!0,background:t=>S.highestSurface(t),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:t=>new R(S.primaryFixed,S.primaryFixedDim,10,"lighter",!0)}),S.onPrimaryFixed=F.fromPalette({name:"on_primary_fixed",palette:t=>t.primaryPalette,tone:t=>O(t)?100:10,background:t=>S.primaryFixedDim,secondBackground:t=>S.primaryFixed,contrastCurve:new I(4.5,7,11,21)}),S.onPrimaryFixedVariant=F.fromPalette({name:"on_primary_fixed_variant",palette:t=>t.primaryPalette,tone:t=>O(t)?90:30,background:t=>S.primaryFixedDim,secondBackground:t=>S.primaryFixed,contrastCurve:new I(3,4.5,7,11)}),S.secondaryFixed=F.fromPalette({name:"secondary_fixed",palette:t=>t.secondaryPalette,tone:t=>O(t)?80:90,isBackground:!0,background:t=>S.highestSurface(t),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:t=>new R(S.secondaryFixed,S.secondaryFixedDim,10,"lighter",!0)}),S.secondaryFixedDim=F.fromPalette({name:"secondary_fixed_dim",palette:t=>t.secondaryPalette,tone:t=>O(t)?70:80,isBackground:!0,background:t=>S.highestSurface(t),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:t=>new R(S.secondaryFixed,S.secondaryFixedDim,10,"lighter",!0)}),S.onSecondaryFixed=F.fromPalette({name:"on_secondary_fixed",palette:t=>t.secondaryPalette,tone:t=>10,background:t=>S.secondaryFixedDim,secondBackground:t=>S.secondaryFixed,contrastCurve:new I(4.5,7,11,21)}),S.onSecondaryFixedVariant=F.fromPalette({name:"on_secondary_fixed_variant",palette:t=>t.secondaryPalette,tone:t=>O(t)?25:30,background:t=>S.secondaryFixedDim,secondBackground:t=>S.secondaryFixed,contrastCurve:new I(3,4.5,7,11)}),S.tertiaryFixed=F.fromPalette({name:"tertiary_fixed",palette:t=>t.tertiaryPalette,tone:t=>O(t)?40:90,isBackground:!0,background:t=>S.highestSurface(t),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:t=>new R(S.tertiaryFixed,S.tertiaryFixedDim,10,"lighter",!0)}),S.tertiaryFixedDim=F.fromPalette({name:"tertiary_fixed_dim",palette:t=>t.tertiaryPalette,tone:t=>O(t)?30:80,isBackground:!0,background:t=>S.highestSurface(t),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:t=>new R(S.tertiaryFixed,S.tertiaryFixedDim,10,"lighter",!0)}),S.onTertiaryFixed=F.fromPalette({name:"on_tertiary_fixed",palette:t=>t.tertiaryPalette,tone:t=>O(t)?100:10,background:t=>S.tertiaryFixedDim,secondBackground:t=>S.tertiaryFixed,contrastCurve:new I(4.5,7,11,21)}),S.onTertiaryFixedVariant=F.fromPalette({name:"on_tertiary_fixed_variant",palette:t=>t.tertiaryPalette,tone:t=>O(t)?90:30,background:t=>S.tertiaryFixedDim,secondBackground:t=>S.tertiaryFixed,contrastCurve:new I(3,4.5,7,11)});/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.sourceColorArgb=t.sourceColorArgb,this.variant=t.variant,this.contrastLevel=t.contrastLevel,this.isDark=t.isDark,this.sourceColorHct=v.fromInt(t.sourceColorArgb),this.primaryPalette=t.primaryPalette,this.secondaryPalette=t.secondaryPalette,this.tertiaryPalette=t.tertiaryPalette,this.neutralPalette=t.neutralPalette,this.neutralVariantPalette=t.neutralVariantPalette,this.errorPalette=A.fromHueAndChroma(25,84)}static getRotatedHue(t,e,r){let a=t.hue;if(e.length!==r.length)throw Error(`mismatch between hue length ${e.length} & rotations ${r.length}`);if(1===r.length)return h(t.hue+r[0]);let n=e.length;for(let t=0;t<=n-2;t++){let n=e[t],o=e[t+1];if(n<a&&a<o)return h(a+r[t])}return a}getArgb(t){return t.getArgb(this)}getHct(t){return t.getHct(this)}get primaryPaletteKeyColor(){return this.getArgb(S.primaryPaletteKeyColor)}get secondaryPaletteKeyColor(){return this.getArgb(S.secondaryPaletteKeyColor)}get tertiaryPaletteKeyColor(){return this.getArgb(S.tertiaryPaletteKeyColor)}get neutralPaletteKeyColor(){return this.getArgb(S.neutralPaletteKeyColor)}get neutralVariantPaletteKeyColor(){return this.getArgb(S.neutralVariantPaletteKeyColor)}get background(){return this.getArgb(S.background)}get onBackground(){return this.getArgb(S.onBackground)}get surface(){return this.getArgb(S.surface)}get surfaceDim(){return this.getArgb(S.surfaceDim)}get surfaceBright(){return this.getArgb(S.surfaceBright)}get surfaceContainerLowest(){return this.getArgb(S.surfaceContainerLowest)}get surfaceContainerLow(){return this.getArgb(S.surfaceContainerLow)}get surfaceContainer(){return this.getArgb(S.surfaceContainer)}get surfaceContainerHigh(){return this.getArgb(S.surfaceContainerHigh)}get surfaceContainerHighest(){return this.getArgb(S.surfaceContainerHighest)}get onSurface(){return this.getArgb(S.onSurface)}get surfaceVariant(){return this.getArgb(S.surfaceVariant)}get onSurfaceVariant(){return this.getArgb(S.onSurfaceVariant)}get inverseSurface(){return this.getArgb(S.inverseSurface)}get inverseOnSurface(){return this.getArgb(S.inverseOnSurface)}get outline(){return this.getArgb(S.outline)}get outlineVariant(){return this.getArgb(S.outlineVariant)}get shadow(){return this.getArgb(S.shadow)}get scrim(){return this.getArgb(S.scrim)}get surfaceTint(){return this.getArgb(S.surfaceTint)}get primary(){return this.getArgb(S.primary)}get onPrimary(){return this.getArgb(S.onPrimary)}get primaryContainer(){return this.getArgb(S.primaryContainer)}get onPrimaryContainer(){return this.getArgb(S.onPrimaryContainer)}get inversePrimary(){return this.getArgb(S.inversePrimary)}get secondary(){return this.getArgb(S.secondary)}get onSecondary(){return this.getArgb(S.onSecondary)}get secondaryContainer(){return this.getArgb(S.secondaryContainer)}get onSecondaryContainer(){return this.getArgb(S.onSecondaryContainer)}get tertiary(){return this.getArgb(S.tertiary)}get onTertiary(){return this.getArgb(S.onTertiary)}get tertiaryContainer(){return this.getArgb(S.tertiaryContainer)}get onTertiaryContainer(){return this.getArgb(S.onTertiaryContainer)}get error(){return this.getArgb(S.error)}get onError(){return this.getArgb(S.onError)}get errorContainer(){return this.getArgb(S.errorContainer)}get onErrorContainer(){return this.getArgb(S.onErrorContainer)}get primaryFixed(){return this.getArgb(S.primaryFixed)}get primaryFixedDim(){return this.getArgb(S.primaryFixedDim)}get onPrimaryFixed(){return this.getArgb(S.onPrimaryFixed)}get onPrimaryFixedVariant(){return this.getArgb(S.onPrimaryFixedVariant)}get secondaryFixed(){return this.getArgb(S.secondaryFixed)}get secondaryFixedDim(){return this.getArgb(S.secondaryFixedDim)}get onSecondaryFixed(){return this.getArgb(S.onSecondaryFixed)}get onSecondaryFixedVariant(){return this.getArgb(S.onSecondaryFixedVariant)}get tertiaryFixed(){return this.getArgb(S.tertiaryFixed)}get tertiaryFixedDim(){return this.getArgb(S.tertiaryFixedDim)}get onTertiaryFixed(){return this.getArgb(S.onTertiaryFixed)}get onTertiaryFixedVariant(){return this.getArgb(S.onTertiaryFixedVariant)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.input=t,this.hctsByTempCache=[],this.hctsByHueCache=[],this.tempsByHctCache=new Map,this.inputRelativeTemperatureCache=-1,this.complementCache=null}get hctsByTemp(){if(this.hctsByTempCache.length>0)return this.hctsByTempCache;let t=this.hctsByHue.concat([this.input]),e=this.tempsByHct;return t.sort((t,r)=>e.get(t)-e.get(r)),this.hctsByTempCache=t,t}get warmest(){return this.hctsByTemp[this.hctsByTemp.length-1]}get coldest(){return this.hctsByTemp[0]}analogous(t=5,e=12){let r=Math.round(this.input.hue),a=this.hctsByHue[r],n=this.relativeTemperature(a),o=[a],i=0;for(let t=0;t<360;t++){let e=s(r+t),a=this.hctsByHue[e],o=this.relativeTemperature(a),h=Math.abs(o-n);n=o,i+=h}let h=1,u=i/e,c=0;for(n=this.relativeTemperature(a);o.length<e;){let t=s(r+h),a=this.hctsByHue[t],i=this.relativeTemperature(a),l=(c+=Math.abs(i-n))>=o.length*u,m=1;for(;l&&o.length<e;)o.push(a),l=c>=(o.length+m)*u,m++;if(n=i,++h>360){for(;o.length<e;)o.push(a);break}}let l=[this.input],m=Math.floor((t-1)/2);for(let t=1;t<m+1;t++){let e=0-t;for(;e<0;)e=o.length+e;e>=o.length&&(e%=o.length),l.splice(0,0,o[e])}let g=t-m-1;for(let t=1;t<g+1;t++){let e=t;for(;e<0;)e=o.length+e;e>=o.length&&(e%=o.length),l.push(o[e])}return l}get complement(){if(null!=this.complementCache)return this.complementCache;let t=this.coldest.hue,e=this.tempsByHct.get(this.coldest),r=this.warmest.hue,a=this.tempsByHct.get(this.warmest)-e,n=E.isBetween(this.input.hue,t,r),o=n?r:t,i=n?t:r,s=1e3,u=this.hctsByHue[Math.round(this.input.hue)],c=1-this.inputRelativeTemperature;for(let t=0;t<=360;t+=1){let r=h(o+1*t);if(!E.isBetween(r,o,i))continue;let n=this.hctsByHue[Math.round(r)],l=Math.abs(c-(this.tempsByHct.get(n)-e)/a);l<s&&(s=l,u=n)}return this.complementCache=u,this.complementCache}relativeTemperature(t){let e=this.tempsByHct.get(this.warmest)-this.tempsByHct.get(this.coldest),r=this.tempsByHct.get(t)-this.tempsByHct.get(this.coldest);return 0===e?.5:r/e}get inputRelativeTemperature(){return this.inputRelativeTemperatureCache>=0||(this.inputRelativeTemperatureCache=this.relativeTemperature(this.input)),this.inputRelativeTemperatureCache}get tempsByHct(){if(this.tempsByHctCache.size>0)return this.tempsByHctCache;let t=this.hctsByHue.concat([this.input]),e=new Map;for(let r of t)e.set(r,E.rawTemperature(r));return this.tempsByHctCache=e,e}get hctsByHue(){if(this.hctsByHueCache.length>0)return this.hctsByHueCache;let t=[];for(let e=0;e<=360;e+=1){let r=v.from(e,this.input.chroma,this.input.tone);t.push(r)}return this.hctsByHueCache=t,this.hctsByHueCache}static isBetween(t,e,r){return e<r?e<=t&&t<=r:e<=t||t<=r}static rawTemperature(t){let e=function(t){let e=b(d(t)),r=b(y(t)),a=b(255&t),n=c[0][0]*e+c[0][1]*r+c[0][2]*a,o=c[1][0]*e+c[1][1]*r+c[1][2]*a,i=c[2][0]*e+c[2][1]*r+c[2][2]*a,s=k(n/95.047),h=k(o/100);return[116*h-16,500*(s-h),200*(h-k(i/108.883))]}(t.toInt()),r=h(180*Math.atan2(e[2],e[1])/Math.PI);return -.5+.02*Math.pow(Math.sqrt(e[1]*e[1]+e[2]*e[2]),1.07)*Math.cos(h(r-50)*Math.PI/180)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V extends L{constructor(t,e,r){super({sourceColorArgb:t.toInt(),variant:a.CONTENT,contrastLevel:r,isDark:e,primaryPalette:A.fromHueAndChroma(t.hue,t.chroma),secondaryPalette:A.fromHueAndChroma(t.hue,Math.max(t.chroma-32,.5*t.chroma)),tertiaryPalette:A.fromInt(T.fixIfDisliked(new E(t).analogous(3,6)[2]).toInt()),neutralPalette:A.fromHueAndChroma(t.hue,t.chroma/8),neutralVariantPalette:A.fromHueAndChroma(t.hue,t.chroma/8+4)})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N extends L{constructor(t,e,r){super({sourceColorArgb:t.toInt(),variant:a.EXPRESSIVE,contrastLevel:r,isDark:e,primaryPalette:A.fromHueAndChroma(h(t.hue+240),40),secondaryPalette:A.fromHueAndChroma(L.getRotatedHue(t,N.hues,N.secondaryRotations),24),tertiaryPalette:A.fromHueAndChroma(L.getRotatedHue(t,N.hues,N.tertiaryRotations),32),neutralPalette:A.fromHueAndChroma(t.hue+15,8),neutralVariantPalette:A.fromHueAndChroma(t.hue+15,12)})}}N.hues=[0,21,51,121,151,191,271,321,360],N.secondaryRotations=[45,95,45,20,45,90,45,45,45],N.tertiaryRotations=[120,120,20,45,20,15,20,120,120];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z extends L{constructor(t,e,r){super({sourceColorArgb:t.toInt(),variant:a.VIBRANT,contrastLevel:r,isDark:e,primaryPalette:A.fromHueAndChroma(t.hue,200),secondaryPalette:A.fromHueAndChroma(L.getRotatedHue(t,z.hues,z.secondaryRotations),24),tertiaryPalette:A.fromHueAndChroma(L.getRotatedHue(t,z.hues,z.tertiaryRotations),32),neutralPalette:A.fromHueAndChroma(t.hue,10),neutralVariantPalette:A.fromHueAndChroma(t.hue,12)})}}z.hues=[0,41,61,101,131,181,251,301,360],z.secondaryRotations=[18,15,10,12,15,18,15,12,12],z.tertiaryRotations=[35,30,20,25,30,35,30,25,25];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let U={desired:4,fallbackColorARGB:4282549748,filter:!0};function q(t,e){return t.score>e.score?-1:t.score<e.score?1:0}class Z{constructor(){}static score(t,e){let{desired:r,fallbackColorARGB:a,filter:n}={...U,...e},o=[],i=Array(360).fill(0),h=0;for(let[e,r]of t.entries()){let t=v.fromInt(e);o.push(t);let a=Math.floor(t.hue);i[a]+=r,h+=r}let u=Array(360).fill(0);for(let t=0;t<360;t++){let e=i[t]/h;for(let r=t-14;r<t+16;r++){let t=s(r);u[t]+=e}}let c=[];for(let t of o){let e=u[s(Math.round(t.hue))];if(n&&(t.chroma<Z.CUTOFF_CHROMA||e<=Z.CUTOFF_EXCITED_PROPORTION))continue;let r=100*e*Z.WEIGHT_PROPORTION,a=t.chroma<Z.TARGET_CHROMA?Z.WEIGHT_CHROMA_BELOW:Z.WEIGHT_CHROMA_ABOVE,o=r+(t.chroma-Z.TARGET_CHROMA)*a;c.push({hct:t,score:o})}c.sort(q);let l=[];for(let t=90;t>=15;t--){for(let{hct:e}of(l.length=0,c))if(l.find(r=>180-Math.abs(Math.abs(e.hue-r.hue)-180)<t)||l.push(e),l.length>=r)break;if(l.length>=r)break}let m=[];for(let t of(0===l.length&&m.push(a),l))m.push(t.toInt());return m}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t){let e=d(t),r=y(t),a=255&t,n=[e.toString(16),r.toString(16),a.toString(16)];for(let[t,e]of n.entries())1===e.length&&(n[t]="0"+e);return"#"+n.join("")}Z.TARGET_CHROMA=48,Z.WEIGHT_PROPORTION=.7,Z.WEIGHT_CHROMA_ABOVE=.3,Z.WEIGHT_CHROMA_BELOW=.1,Z.CUTOFF_CHROMA=5,Z.CUTOFF_EXCITED_PROPORTION=.01;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}]);