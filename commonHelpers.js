import{A as P,S as w,K as L,M as A,a as _,i as S}from"./assets/vendor-6e66b841.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const g of r.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();document.getElementById("profile-link").addEventListener("click",function(e){e.preventDefault(),document.getElementById("profile").classList.toggle("active");const t=document.getElementById("dropdown");t.classList.contains("active")?(t.classList.remove("active"),t.style.opacity=0):(t.classList.add("active"),setTimeout(()=>{t.style.opacity=1},10))});new P(".about-me-accordion-container",{openOnInit:[0],showMultiple:!0});const N=document.querySelectorAll(".about-me-ac-trigger");N.forEach(e=>{e.addEventListener("click",q)});function q(e){const t=e.currentTarget.firstElementChild,o=t.dataset.status,i=`<svg width="20" height="20">
                <use href="/portfolio_friendship_team_project_space/assets/sprite-5311fca3.svg#icon-arrow-down"></use>
              </svg>`,s=`<svg width="20" height="20">
                <use href="/portfolio_friendship_team_project_space/assets/sprite-5311fca3.svg#icon-arrow-up"></use>
              </svg>`;o==="open"?(t.innerHTML=i,t.dataset.status="close"):(t.innerHTML=s,t.dataset.status="open")}const j=document.querySelector(".about-me-swiper-next"),k=new w(".about-me-swiper",{modules:[L,A],keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},loop:!0,slidesPerView:2,slideActiveClass:"about-me-swiper-slide-active",breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});j.addEventListener("click",()=>k.slideNext());const m=document.querySelector(".project-swiper-button-prev"),p=document.querySelector(".project-swiper-button-next"),d=new w(".project-swiper",{direction:"horizontal",modules:[L],keyboard:{enabled:!0,onlyInViewport:!1},speed:400,spaceBetween:100});m.addEventListener("click",()=>{d.slidePrev().hideOnClick});p.addEventListener("click",()=>{d.slideNext()});d.on("fromEdge",()=>{m.classList.remove("project-btn-swap-disable"),p.classList.remove("project-btn-swap-disable")});d.on("reachBeginning",()=>{m.classList.add("project-btn-swap-disable"),p.classList.remove("project-btn-swap-disable")});d.on("reachEnd",()=>{p.classList.add("project-btn-swap-disable"),m.classList.remove("project-btn-swap-disable")});const O=document.querySelectorAll(".faq-accordion");O.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active")})});const D=document.querySelector(".covers"),I=document.querySelectorAll(".covers__image");console.log(I);const T=new IntersectionObserver(M);T.observe(D);function M(e){const t=e[0];I.forEach(o=>{t.isIntersecting?o.classList.add("active"):o.classList.remove("active")})}async function x(){const o="https://portfolio-js.b.goit.study/api/reviews";return(await _.get(o)).data}async function V(e){const i="https://portfolio-js.b.goit.study/api/requests";return await _.post(i,e)}const $=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,b="user-email",y="user-comment",h=document.querySelector(".footer-form"),n=document.getElementById("user-email"),a=document.getElementById("user-comment"),c=document.querySelector(".form-fields"),l=document.querySelector(".backdrop");z();n.addEventListener("input",C);a.addEventListener("input",F);h.addEventListener("submit",R);h.addEventListener("input",e=>{const t=n.value,o=a.value;U(t,o)});document.addEventListener("keydown",e=>{e.key==="Escape"&&l.classList.remove("is-open")});l.addEventListener("click",e=>{(e.target===l||e.target.closest(".modal-close-btn"))&&K()});function C(){$.test(n.value.trim())?(n.classList.remove("invalid"),n.classList.add("valid"),c.dataset.status="Success!",c.style.setProperty("--status-color","#3cbc81")):(n.classList.remove("valid"),n.classList.add("invalid"),c.dataset.status="Invalid email, try again",c.style.setProperty("--status-color","#e74a3b"))}function F(){a.value.trim().length>=3?(a.classList.remove("invalid"),a.classList.add("valid")):(a.classList.remove("valid"),a.classList.add("invalid"))}async function R(e){e.preventDefault();const t=e.target.elements.userEmail.value.trim().toLowerCase(),o=e.target.elements.userComment.value.trim();await V({email:t,comment:o}).then(()=>{H(),B(),l.classList.add("is-open")}).catch(s=>{S.error({position:"topRight",message:"An error occurred while sending the request. Try again."})})}function K(){B(),l.classList.remove("is-open")}function B(){c.dataset.status="",n.classList.remove("valid"),a.classList.remove("valid"),h.reset()}function U(e,t){localStorage.setItem(b,e),localStorage.setItem(y,t)}function z(){n.value=localStorage.getItem(b)??"",a.value=localStorage.getItem(y)??""}function H(){localStorage.removeItem(b),localStorage.removeItem(y)}const v=document.querySelector(".reviews__arrow-left"),f=document.querySelector(".reviews__arrow-right"),E=document.querySelector(".reviews__list");document.addEventListener("DOMContentLoaded",()=>{let e;x().then(t=>{e=t.map(o=>`
      <li class="reviews__item swiper-slide">
      <img
        width="48"
        class="reviews__img"
        src="${o.avatar_url}"
        alt="${o.author}"
      />
      <h3 class="reviews__h3">${o.author}</h3>
      <p class="reviews__descr">${o.review}</p>
    </li>`).join(""),E.insertAdjacentHTML("beforeend",e)}).catch(t=>{E.insertAdjacentHTML("beforeend",'<p class="non_info">NOT FOUND</p>'),S.error({position:"topRight",message:"Sorry, there are no reviews. Please reload your page!"}),console.log(t)})});const u=new w(".reviews__swiper",{modules:[L],keyboard:{enabled:!0,onlyInViewport:!1},speed:400,spaceBetween:100,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});v.addEventListener("click",()=>{u.slidePrev()});f.addEventListener("click",()=>{u.slideNext()});u.on("fromEdge",()=>{v.classList.remove("disabled_btn"),f.classList.remove("disabled_btn")});u.on("reachBeginning",()=>{v.classList.add("disabled_btn"),f.classList.remove("disabled_btn")});u.on("reachEnd",()=>{f.classList.add("disabled_btn"),v.classList.remove("disabled_btn")});
//# sourceMappingURL=commonHelpers.js.map
