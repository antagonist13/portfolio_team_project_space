import{A as h,S as v,K as f,M as E,a as y,i as L}from"./assets/vendor-6e66b841.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();document.getElementById("profile-link").addEventListener("click",function(e){e.preventDefault(),document.getElementById("profile").classList.toggle("active");const t=document.getElementById("dropdown");t.classList.contains("active")?(t.classList.remove("active"),t.style.opacity=0):(t.classList.add("active"),setTimeout(()=>{t.style.opacity=1},10))});(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("visually-hidden")}})();new h(".accordion-container",{openOnInit:[0],showMultiple:!0});const _=document.querySelector(".about-me-swiper-next"),S=new v(".about-me-swiper",{modules:[f,E],keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},loop:!0,slidesPerView:2,slideActiveClass:"about-me-swiper-slide-active",breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});_.addEventListener("click",()=>S.slideNext());const B=document.querySelectorAll(".faq-accordion");B.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active")})});async function P(){const o="https://portfolio-js.b.goit.study/api/reviews";return(await y.get(o)).data}async function q(e){const r="https://portfolio-js.b.goit.study/api/requests";return await y.post(r,e)}const N=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,w=document.querySelector(".footer-form"),i=document.getElementById("user-email"),a=document.querySelector(".form-fields"),c=document.querySelector(".backdrop"),A=document.querySelector(".modal-close-btn");i.addEventListener("input",I);w.addEventListener("submit",M);A.addEventListener("click",b);document.addEventListener("keydown",e=>{e.key==="Escape"&&c.classList.remove("is-open")});c.addEventListener("click",e=>{e.target===c&&b()});function I(){N.test(i.value.trim())?(i.classList.remove("invalid"),i.classList.add("valid"),a.dataset.status="Success!",a.style.setProperty("--status-color","#3cbc81")):(i.classList.remove("valid"),i.classList.add("invalid"),a.dataset.status="Invalid email, try again",a.style.setProperty("--status-color","#e74a3b"))}async function M(e){e.preventDefault();const t=e.target.elements.userEmail.value,o=e.target.elements.userComment.value,r={email:t.trim().toLowerCase(),comment:o.trim()};await q(r).then(()=>{g(),c.classList.add("is-open")}).catch(s=>{L.error({position:"topRight",message:"An error occurred while sending the request. Try again."})})}function b(){g(),c.classList.remove("is-open")}function g(){a.dataset.status="",i.classList.remove("valid"),w.reset()}const l=document.querySelector(".swiper-button-prev"),d=document.querySelector(".swiper-button-next"),p=document.querySelector(".reviews__list");document.addEventListener("DOMContentLoaded",()=>{let e;P().then(t=>{e=t.map(o=>`
      <li class="reviews__item swiper-slide">
      <img
        width="48"
        class="reviews__img"
        src="${o.avatar_url}"
        alt="${o.author}"
      />
      <h3 class="reviews__h3">${o.author}</h3>
      <p class="reviews__descr">${o.review}</p>
    </li>`).join(""),p.insertAdjacentHTML("beforeend",e)}).catch(t=>{p.insertAdjacentHTML("beforeend",'<p class="non_info">NOT FOUND</p>'),L.error({position:"topRight",message:"Sorry, there are no reviews. Please reload your page!"}),console.log(t)})});const u=new v(".reviews__swiper",{modules:[f],keyboard:{enabled:!0,onlyInViewport:!1},speed:400,spaceBetween:100,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});l.addEventListener("click",()=>{u.slidePrev(),d.classList.contains("disabled_btn")&&d.classList.remove("disabled_btn")});d.addEventListener("click",()=>{u.slideNext(),l.classList.contains("disabled_btn")&&l.classList.remove("disabled_btn")});u.on("reachBeginning",()=>{l.classList.add("disabled_btn"),d.classList.remove("disabled_btn")});u.on("reachEnd",()=>{d.classList.add("disabled_btn"),l.classList.remove("disabled_btn")});
//# sourceMappingURL=commonHelpers.js.map