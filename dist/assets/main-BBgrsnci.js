(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();function c(t,e){t.classList.contains(e)?t.classList.remove(e):t.classList.add(e)}function m(t){return/^[0-9]*\.?[0-9]*$/.test(t)&&t.trim()!==""}function g(t){return[/^([0-9]{1,2}):([0-5][0-9]):([0-5][0-9])$/,/^([0-9]{1,2}):([0-5][0-9])$/].some(a=>a.test(t))}function x(t){return/^(\d{1,2}):([0-5]\d)$/.test(t)}function S(t){const e=localStorage.getItem("trainr_events");return e?JSON.parse(e).some(o=>o.user_id===t):!1}function h(t,e){const[a,o,n]=t.split(":").map(Number),s=a*3600+o*60+n,i=typeof e=="string"?parseFloat(e):e;if(isNaN(s)||isNaN(i)||i<=0)return"Invalid input";const r=s/i,u=Math.floor(r/60),d=Math.round(r%60),l=v=>v.toString().padStart(2,"0");return`${l(u)}:${l(d)}`}function y(t){const e=t.split(":").map(i=>Number(i));if(e.some(isNaN)||e.length<2||e.length>3)return"Invalid time format";let a=0,o=0,n=0;e.length===3?[a,o,n]=e:[o,n]=e;const s=i=>i.toString().padStart(2,"0");return a>0?`${a}:${o}:${s(n)}`:`${o}:${s(n)}`}function _(t){const e=t.split(":").map(s=>s.padStart(2,"0"));let a="00",o="00",n="00";if(e.length===3)[a,o,n]=e;else if(e.length===2)[o,n]=e;else return"00:00:00";return`${a}:${o}:${n}`}function b(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}function I(){window.location.href="/my-account"}function N(){window.location.href="/my-schedule"}function O(t){const e=localStorage.getItem("trainr_events");return e?JSON.parse(e).find(o=>o.user_id===t)??null:null}function L(t){const e=localStorage.getItem("trainr_events");if(!e)return null;const o=JSON.parse(e).find(n=>n.user_id===t);return o?o.event_name:null}function M(t){const e=localStorage.getItem("trainr_events");if(!e)return null;const o=JSON.parse(e).find(n=>n.event_id===t);return(o==null?void 0:o.event_name)??null}function w(t){const e=localStorage.getItem("trainr_events");return e?JSON.parse(e).find(o=>o.event_id===t)??null:null}function E(t,e){const a=localStorage.getItem("trainr_events");if(!a)return;const o=JSON.parse(a),n=o.findIndex(s=>s.event_id===t);n!==-1&&(o[n].user_id=e,localStorage.setItem("trainr_events",JSON.stringify(o)))}function J(t,e){const a=localStorage.getItem("trainr_events");if(!a)return;let o=JSON.parse(a);o=o.filter(s=>!(s.user_id===e&&s.event_id!==t));const n=o.find(s=>s.event_id===t);n&&(n.user_id=e),localStorage.setItem("trainr_events",JSON.stringify(o))}function $(t){sessionStorage.removeItem(t)}function P(t,e){const a=localStorage.getItem("trainr_events");if(!a)return null;const n=JSON.parse(a).find(s=>s.event_id===t);if(!n||!n.workout_plan)return null;for(const s of n.workout_plan){const i=s.find(r=>r.workout_id===e);if(i)return i}return null}function p(t="nav-placeholder"){const e=`
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
              <img class="nav-expand-icon" src="https://iili.io/3O0McRs.png" />
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
          <img class="nav-logo-img" src="https://iili.io/3O13twl.png" alt="trainr logo" />
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
          <img class="nav-logo-img" src="https://iili.io/3O13twl.png" alt="trainr logo" />
        </a>
        <div class="nav-mobile-button">
          <img class="nav-open-icon" src="https://iili.io/3O0WpHX.png" title="open nav">
        </div>
      </div>
    `,a=document.getElementById(t);if(a){a.innerHTML=e,sessionStorage.getItem("user_id")&&a.querySelectorAll(".nav-cta").forEach(r=>{c(r,"active-nav-account-button")});const n=window.location.pathname;a.querySelectorAll("a").forEach(i=>{i.getAttribute("href")===n&&i.classList.add("active-nav-option")})}f()}function f(){const t=document.querySelector(".nav-mobile-button"),e=document.querySelector(".nav-desktop"),a=document.querySelector(".expandable-header"),o=document.querySelector(".expandable-option");t==null||t.addEventListener("click",function(){t.classList.contains("nav-button-active")&&o.classList.contains("nav-option-expanded")&&o.classList.remove("nav-option-expanded"),c(t,"nav-button-active"),c(e,"nav-mobile-active")}),a==null||a.addEventListener("click",function(){c(o,"nav-option-expanded")})}window.addEventListener("DOMContentLoaded",()=>{p()});export{h as a,L as b,y as c,S as d,b as e,w as f,O as g,P as h,g as i,m as j,x as k,M as l,$ as m,_ as n,I as o,J as p,N as r,c as t,E as u};
