(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();function c(t,e){t.classList.contains(e)?t.classList.remove(e):t.classList.add(e)}function m(t){return/^[0-9]*\.?[0-9]*$/.test(t)&&t.trim()!==""}function g(t){return[/^([0-9]{1,2}):([0-5][0-9]):([0-5][0-9])$/,/^([0-9]{1,2}):([0-5][0-9])$/].some(a=>a.test(t))}function x(t){return/^(\d{1,2}):([0-5]\d)$/.test(t)}function S(t){const e=localStorage.getItem("trainr_events");return e?JSON.parse(e).some(s=>s.user_id===t):!1}function y(t,e){const[a,s,n]=t.split(":").map(Number),o=a*3600+s*60+n,r=typeof e=="string"?parseFloat(e):e;if(isNaN(o)||isNaN(r)||r<=0)return"Invalid input";const i=o/r,u=Math.floor(i/60),d=Math.round(i%60),l=v=>v.toString().padStart(2,"0");return`${l(u)}:${l(d)}`}function h(t){const e=t.split(":").map(r=>Number(r));if(e.some(isNaN)||e.length<2||e.length>3)return"Invalid time format";let a=0,s=0,n=0;e.length===3?[a,s,n]=e:[s,n]=e;const o=r=>r.toString().padStart(2,"0");return a>0?`${a}:${s}:${o(n)}`:`${s}:${o(n)}`}function _(t){const e=t.split(":").map(o=>o.padStart(2,"0"));let a="00",s="00",n="00";if(e.length===3)[a,s,n]=e;else if(e.length===2)[s,n]=e;else return"00:00:00";return`${a}:${s}:${n}`}function b(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}function I(){window.location.href="/my-account"}function N(){window.location.href="/my-schedule"}function O(t){const e=localStorage.getItem("trainr_events");return e?JSON.parse(e).find(s=>s.user_id===t)??null:null}function L(t){const e=localStorage.getItem("trainr_events");if(!e)return null;const s=JSON.parse(e).find(n=>n.user_id===t);return s?s.event_name:null}function M(t){const e=localStorage.getItem("trainr_events");if(!e)return null;const s=JSON.parse(e).find(n=>n.event_id===t);return(s==null?void 0:s.event_name)??null}function w(t){const e=localStorage.getItem("trainr_events");return e?JSON.parse(e).find(s=>s.event_id===t)??null:null}function E(t,e){const a=localStorage.getItem("trainr_events");if(!a)return;const s=JSON.parse(a),n=s.findIndex(o=>o.event_id===t);n!==-1&&(s[n].user_id=e,localStorage.setItem("trainr_events",JSON.stringify(s)))}function J(t,e){const a=localStorage.getItem("trainr_events");if(!a)return;let s=JSON.parse(a);s=s.filter(o=>!(o.user_id===e&&o.event_id!==t));const n=s.find(o=>o.event_id===t);n&&(n.user_id=e),localStorage.setItem("trainr_events",JSON.stringify(s))}function $(t){sessionStorage.removeItem(t)}function P(t,e){const a=localStorage.getItem("trainr_events");if(!a)return null;const n=JSON.parse(a).find(o=>o.event_id===t);if(!n||!n.workout_plan)return null;for(const o of n.workout_plan){const r=o.find(i=>i.workout_id===e);if(r)return r}return null}function p(t="nav-placeholder"){const e=`
      <div class="nav-desktop">
        <div class="nav-menu">
          <a class="nav-menu-option" href="/my-schedule" title="My Schedule">
            <p class="nav-menu-copy">My Schedule</p>
          </a>
          <a class="nav-menu-option" href="/generate-plan" title="Generate Plan">
            <p class="nav-menu-copy">Generate Plan</p>
          </a>
          <div class="nav-menu-option expandable-option">
            <div class="expandable-header">
              <p class="nav-menu-copy">More</p>
              <img class="nav-expand-icon" src="./src/assets/icons/show.svg" />
            </div>
            <div class="expandable-body">
              <a class="nav-menu-option" href="/pace-calculator" title="Pace Calculator">
                <p class="nav-menu-copy">Pace Calculator</p>
              </a>
              <a class="nav-menu-option" href="/workout-types" title="Workout Types">
                <p class="nav-menu-copy">Workout Types</p>
              </a>
            </div>
          </div>
        </div>
        <a class="nav-logo" href="/" title="trainr home">
          <img class="nav-logo-img" src="./src/assets/icons/trainr.svg" alt="trainr logo" />
        </a>
        <div class="nav-right-container">
          <a class="nav-cta active-nav-account-button" id="nav_sign_in_button" href="/sign-in">
            <p class="nav-cta-text">Sign In</p>
          </a>
          <a class="nav-cta" id="nav_my_account_button" href="/my-account">
            <p class="nav-cta-text">My Account</p>
          </a>
        </div>
      </div>
      <div class="nav-mobile">
        <a class="nav-logo" href="/" title="trainr home">
          <img class="nav-logo-img" src="./src/assets/icons/trainr.svg" alt="trainr logo" />
        </a>
        <div class="nav-mobile-button">
          <img class="nav-open-icon" src="./src/assets/icons/burger.svg" title="open nav">
        </div>
      </div>
    `,a=document.getElementById(t);if(a){a.innerHTML=e,sessionStorage.getItem("user_id")&&a.querySelectorAll(".nav-cta").forEach(i=>{c(i,"active-nav-account-button")});const n=window.location.pathname;a.querySelectorAll("a").forEach(r=>{r.getAttribute("href")===n&&r.classList.add("active-nav-option")})}f()}function f(){const t=document.querySelector(".nav-mobile-button"),e=document.querySelector(".nav-desktop"),a=document.querySelector(".expandable-header"),s=document.querySelector(".expandable-option");t==null||t.addEventListener("click",function(){t.classList.contains("nav-button-active")&&s.classList.contains("nav-option-expanded")&&s.classList.remove("nav-option-expanded"),c(t,"nav-button-active"),c(e,"nav-mobile-active")}),a==null||a.addEventListener("click",function(){c(s,"nav-option-expanded")})}window.addEventListener("DOMContentLoaded",()=>{p()});export{y as a,L as b,h as c,S as d,b as e,w as f,O as g,P as h,g as i,m as j,x as k,M as l,$ as m,_ as n,I as o,J as p,N as r,c as t,E as u};
