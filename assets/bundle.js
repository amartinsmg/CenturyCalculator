(()=>{"use strict";var e={211:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(142),a=n(882);t.default=function(e,t,n,o){const u=document.querySelector(e),d=document.querySelector(t),l=document.querySelector(n),s=document.querySelector(o),i=new Date;d.defaultValue=i.getFullYear().toString(),u.addEventListener("submit",(e=>{e.preventDefault();try{const e=parseInt(d.value),n=(t=e)%100==0?t/100:Math.floor(t/100)+1,o="en"===document.documentElement.lang?(0,r.default)(n):(0,a.default)(n);l.textContent=o}catch(e){l.textContent=null}var t})),d.addEventListener("keydown",(e=>{13===e.keyCode?u.classList.add("was-validated"):u.classList.remove("was-validated")})),s.addEventListener("click",(()=>{u.classList.add("was-validated")}))}},142:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=e%10,n=e%100;if(isNaN(e)||e%1||e<=0)throw"Enter a integer number greater than 0";if([11,12,13].includes(n))return`${e}th`;switch(t){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`;default:return`${e}th`}}},882:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=new Map([[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]]);let n="";if(isNaN(e)||e%1||e<=0||e>=4e3)throw"Enter an integer greater than 0 and less than 4000";for(;e>0;)for(let[r,a]of t)if(e>=r){n+=a,e-=r;break}return n}},698:(e,t,n)=>{n.r(t)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};(()=>{n(698);const e=n(211);window.addEventListener("load",(()=>(0,e.default)("#input-form","#year-input","#century-output","#submit-btn")))})()})();