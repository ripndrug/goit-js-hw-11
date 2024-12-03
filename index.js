import{S as u,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();function d(r){return r.map(({webformatURL:e,largeImageURL:o,tags:i,likes:t,views:s,comments:n,downloads:l})=>`
        <li class='form-item'>
            <a href='${o}'><img src='${e}' alt='${i}' width='360' class='form-image'>
                <div class='stats-container'>
                    <div class='stats-info'>
                        <h2 class='stats-title'>Likes</h2>
                        <p class='stats-text'>${t}</p>
                    </div>
                    <div class='stats-info'>
                        <h2 class='stats-title'>Views</h2>
                        <p class='stats-text'>${s}</p>
                    </div>
                    <div class='stats-info'>
                        <h2 class='stats-title'>Comments</h2>
                        <p class='stats-text'>${n}</p>
                    </div>
                    <div class='stats-info'>
                        <h2 class='stats-title'>Downloads</h2>
                        <p class='stats-text'>${l}</p>
                    </div>
                </div>
            </a>
        </li>
        `).join("")}function m(r=BASE_URL){return fetch(r).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const p=document.querySelector("form"),a=document.querySelector(".container"),h="38646847-22fc34a8305fe75e48b944d63",g="https://pixabay.com/api/";p.addEventListener("submit",y);const c=new u(".container a");c.on("shown.simplelightbox",function(){c.options.captionsData="alt"});function y(r){r.preventDefault();const e=r.target.elements.input;if(e.value===""||!e.value.trim())return;a.innerHTML="";const o=document.createElement("span");o.classList.add("loader"),a.appendChild(o);const i=new URLSearchParams({key:h,q:e.value,image_type:"photo",orientation:"horizontal",safesearch:!0});m(`${g}?${i}`).then(t=>{t.total===0&&f.error({message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(t),a.innerHTML=d(t.hits),c.refresh()}).catch(t=>console.log(t)).finally(()=>{o.remove(),r.target.reset()})}
//# sourceMappingURL=index.js.map
