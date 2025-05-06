(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();function i(t,a){t.classList.contains(a)?t.classList.remove(a):t.classList.add(a)}function l(t="nav-placeholder"){const a=`
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
    `,o=document.getElementById(t);if(o){o.innerHTML=a,sessionStorage.getItem("user_id")&&o.querySelectorAll(".nav-cta").forEach(r=>{i(r,"active-nav-account-button")});const e=window.location.pathname;o.querySelectorAll("a").forEach(c=>{c.getAttribute("href")===e&&c.classList.add("active-nav-option")})}d()}function d(){const t=document.querySelector(".nav-mobile-button"),a=document.querySelector(".nav-desktop"),o=document.querySelector(".expandable-header"),s=document.querySelector(".expandable-option");t==null||t.addEventListener("click",function(){t.classList.contains("nav-button-active")&&s.classList.contains("nav-option-expanded")&&s.classList.remove("nav-option-expanded"),i(t,"nav-button-active"),i(a,"nav-mobile-active")}),o==null||o.addEventListener("click",function(){i(s,"nav-option-expanded")})}window.addEventListener("DOMContentLoaded",()=>{l()});
