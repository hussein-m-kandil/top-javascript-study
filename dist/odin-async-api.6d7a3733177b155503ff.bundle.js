!function(){"use strict";const e=document.querySelector("#query"),t=document.querySelector("#search-btn"),n=document.querySelector("#spinner"),o=document.querySelector("#result"),r=document.querySelector("#result>img"),i=document.querySelector("#result>figcaption"),l=document.querySelector("#error"),s=t=>{""!==e.value&&("click"===t.type||"keydown"===t.type&&"Enter"===t.key)&&(n.style.display="block",o.style.display="none",l.style.display="none",fetch(`https://api.giphy.com/v1/gifs/translate?api_key=7owj2JRjYLJ9J1aasGLlFN0sfYtuvMAC&s=${e.value}`,{mode:"cors"}).then((e=>{if(!e.ok)throw Error("Cannot get GIF from 'Giphy'! Try again later.");return e.json()})).then((e=>{(e=>{let{data:t}=e;if(!t.images||!t.images.fixed_height&&!t.images.original)throw Error("No matching GIF!");const l=t.images.fixed_height||t.images.original;r.loading="eager",r.src=l.url,r.width=l.width,r.height=l.height,r.alt=t.alt_text,i.textContent=t.title,r.addEventListener("load",(()=>{n.style.display="none",o.style.display="block"}))})(e)})).catch((e=>{l.textContent=e.message,o.style.display="none",n.style.display="none",l.style.display="block"})))};e.addEventListener("keydown",s),t.addEventListener("click",s)}();
//# sourceMappingURL=odin-async-api.6d7a3733177b155503ff.bundle.js.map