(()=>{const e=document.getElementById("darkmode-toggle"),o=document.querySelector(".navbar"),t=document.querySelector(".side-menu"),l=document.querySelector(".right-panel"),r=document.querySelector(".menu-button");e.addEventListener("input",(()=>{e.checked?(o.style.backgroundColor="#202025",o.style.color="white",t.style.backgroundColor="#2b2b2e",t.style.color="white",l.style.backgroundColor="#1a1a1b",l.style.color="white"):(o.style.backgroundColor="#FAF6F5",o.style.color="black",t.style.backgroundColor="#F7F8F3",t.style.color="black",l.style.backgroundColor="#f8f3f0",l.style.color="black")})),r.addEventListener("click",(()=>{t.classList.toggle("minimize"),l.style.width="100%"}))})();