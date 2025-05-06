(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();function c(t,e){t.classList.contains(e)?t.classList.remove(e):t.classList.add(e)}function m(t){return/^[0-9]*\.?[0-9]*$/.test(t)&&t.trim()!==""}function g(t){return[/^([0-9]{1,2}):([0-5][0-9]):([0-5][0-9])$/,/^([0-9]{1,2}):([0-5][0-9])$/].some(o=>o.test(t))}function x(t){return/^(\d{1,2}):([0-5]\d)$/.test(t)}function S(t){const e=localStorage.getItem("trainr_events");return e?JSON.parse(e).some(a=>a.user_id===t):!1}function y(t,e){const[o,a,n]=t.split(":").map(Number),s=o*3600+a*60+n,r=typeof e=="string"?parseFloat(e):e;if(isNaN(s)||isNaN(r)||r<=0)return"Invalid input";const i=s/r,u=Math.floor(i/60),d=Math.round(i%60),l=v=>v.toString().padStart(2,"0");return`${l(u)}:${l(d)}`}function h(t){const e=t.split(":").map(r=>Number(r));if(e.some(isNaN)||e.length<2||e.length>3)return"Invalid time format";let o=0,a=0,n=0;e.length===3?[o,a,n]=e:[a,n]=e;const s=r=>r.toString().padStart(2,"0");return o>0?`${o}:${a}:${s(n)}`:`${a}:${s(n)}`}function _(t){const e=t.split(":").map(s=>s.padStart(2,"0"));let o="00",a="00",n="00";if(e.length===3)[o,a,n]=e;else if(e.length===2)[a,n]=e;else return"00:00:00";return`${o}:${a}:${n}`}function b(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}function I(){window.location.href="/my-account"}function N(){window.location.href="/my-schedule"}function O(t){const e=localStorage.getItem("trainr_events");return e?JSON.parse(e).find(a=>a.user_id===t)??null:null}function L(t){const e=localStorage.getItem("trainr_events");if(!e)return null;const a=JSON.parse(e).find(n=>n.user_id===t);return a?a.event_name:null}function M(t){const e=localStorage.getItem("trainr_events");if(!e)return null;const a=JSON.parse(e).find(n=>n.event_id===t);return(a==null?void 0:a.event_name)??null}function w(t){const e=localStorage.getItem("trainr_events");return e?JSON.parse(e).find(a=>a.event_id===t)??null:null}function E(t,e){const o=localStorage.getItem("trainr_events");if(!o)return;const a=JSON.parse(o),n=a.findIndex(s=>s.event_id===t);n!==-1&&(a[n].user_id=e,localStorage.setItem("trainr_events",JSON.stringify(a)))}function J(t,e){const o=localStorage.getItem("trainr_events");if(!o)return;let a=JSON.parse(o);a=a.filter(s=>!(s.user_id===e&&s.event_id!==t));const n=a.find(s=>s.event_id===t);n&&(n.user_id=e),localStorage.setItem("trainr_events",JSON.stringify(a))}function $(t){sessionStorage.removeItem(t)}function P(t,e){const o=localStorage.getItem("trainr_events");if(!o)return null;const n=JSON.parse(o).find(s=>s.event_id===t);if(!n||!n.workout_plan)return null;for(const s of n.workout_plan){const r=s.find(i=>i.workout_id===e);if(r)return r}return null}function p(t="nav-placeholder"){const e=`
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
              <img class="nav-expand-icon" src="/public/show.svg" />
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
          <img class="nav-logo-img" src="/public/trainr.svg" alt="trainr logo" />
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
          <img class="nav-logo-img" src="/public/trainr.svg" alt="trainr logo" />
        </a>
        <div class="nav-mobile-button">
          <img class="nav-open-icon" src="/public/burger.svg" title="open nav">
        </div>
      </div>
    `,o=document.getElementById(t);if(o){o.innerHTML=e,sessionStorage.getItem("user_id")&&o.querySelectorAll(".nav-cta").forEach(i=>{c(i,"active-nav-account-button")});const n=window.location.pathname;o.querySelectorAll("a").forEach(r=>{r.getAttribute("href")===n&&r.classList.add("active-nav-option")})}f()}function f(){const t=document.querySelector(".nav-mobile-button"),e=document.querySelector(".nav-desktop"),o=document.querySelector(".expandable-header"),a=document.querySelector(".expandable-option");t==null||t.addEventListener("click",function(){t.classList.contains("nav-button-active")&&a.classList.contains("nav-option-expanded")&&a.classList.remove("nav-option-expanded"),c(t,"nav-button-active"),c(e,"nav-mobile-active")}),o==null||o.addEventListener("click",function(){c(a,"nav-option-expanded")})}window.addEventListener("DOMContentLoaded",()=>{p()});export{y as a,L as b,h as c,S as d,b as e,w as f,O as g,P as h,g as i,m as j,x as k,M as l,$ as m,_ as n,I as o,J as p,N as r,c as t,E as u};
