(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const n={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),mobileMenuLinks:document.querySelectorAll(".console-mobile-menu-links")};n.openMenuBtn.addEventListener("click",o),n.closeMenuBtn.addEventListener("click",o);function o(){n.menu.classList.toggle("is-open")?document.body.style.overflow="hidden":document.body.style.overflow="visible"}n.mobileMenuLinks.forEach(s=>{s.addEventListener("click",r=>{r.preventDefault(),o();const e=r.target.getAttribute("href"),t=document.querySelector(e);t&&window.scrollTo({top:t.offsetTop,behavior:"smooth"})})})})();
//# sourceMappingURL=index.js.map
