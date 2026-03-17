import{a as d,S as m,i as s}from"./assets/vendor-dNBuWDsd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="55066757-aef92cd57a3265a375d263145",g="https://pixabay.com/api/";function h(i){return d.get(g,{params:{key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:f,downloads:p})=>`
<li class="gallery-item">
<a href="${a}">
<img src="${o}" alt="${e}" />
</a>
<div class="info">
<p><b>Likes</b> ${t}</p>
<p><b>Views</b> ${n}</p>
<p><b>Comments</b> ${f}</p>
<p><b>Downloads</b> ${p}</p>
</div>
</li>
`).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){c.innerHTML=""}function v(){l.classList.add("active")}function q(){l.classList.remove("active")}const u=document.querySelector(".form"),w=document.querySelector('input[name="search-text"]');u.addEventListener("submit",P);function P(i){i.preventDefault();const r=w.value.trim();if(!r){s.warning({message:"Please enter a search query!",position:"topRight"});return}S(),v(),h(r).then(o=>{if(o.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{s.error({message:"Something went wrong. Try again later!",position:"topRight"})}).finally(()=>{q(),u.reset()})}
//# sourceMappingURL=index.js.map
