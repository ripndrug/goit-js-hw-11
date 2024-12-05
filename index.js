import{S as f,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();function d(r){return r.map(({webformatURL:e,largeImageURL:a,tags:o,likes:t,views:s,comments:i,downloads:u})=>`
        <li class='form-item'>
            <a href='${a}'><img src='${e}' alt='${o}' width='360' class='form-image'>
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
                        <p class='stats-text'>${i}</p>
                    </div>
                    <div class='stats-info'>
                        <h2 class='stats-title'>Downloads</h2>
                        <p class='stats-text'>${u}</p>
                    </div>
                </div>
            </a>
        </li>
        `).join("")}function m(r=BASE_URL){return fetch(r).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const h=document.querySelector("form"),n=document.querySelector(".container"),p="38646847-22fc34a8305fe75e48b944d63",g="https://pixabay.com/api/";h.addEventListener("submit",y);const c=new f(".container a");c.on("shown.simplelightbox",function(){c.options.captionsData="alt"});function y(r){r.preventDefault();const e=r.target.elements.input;if(e.value===""||!e.value.trim())return;n.innerHTML="";const a=document.createElement("span");a.classList.add("loader"),n.appendChild(a);const o=new URLSearchParams({key:p,q:e.value,image_type:"photo",orientation:"horizontal",safesearch:!0});m(`${g}?${o}`).then(t=>{t.total===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML=d(t.hits),c.refresh()}).catch(t=>l.error({message:"Sorry, there are no images matching your search query. Please try again!"})).finally(()=>{a.remove(),r.target.reset()})}
//# sourceMappingURL=index.js.map
