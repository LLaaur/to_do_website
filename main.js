(()=>{"use strict";!function(){const e=document.getElementById("darkmode-toggle"),t=document.querySelector(".navbar"),o=document.querySelector(".side-menu"),l=document.querySelector(".right-panel"),c=document.querySelector(".menu-button"),n=document.querySelector(".add-project"),d=(document.getElementById("project-popup"),document.getElementById("add-project-popup")),r=document.querySelector(".add-or-cancel-buttons"),a=document.querySelector(".cancel-project-button"),s=document.querySelector(".add-project-button"),u=document.querySelector(".projects-list");e.addEventListener("input",(()=>{e.checked?(t.style.backgroundColor="#202025",t.style.color="white",o.style.backgroundColor="#2b2b2e",o.style.color="white",l.style.backgroundColor="#1a1a1b",l.style.color="white"):(t.style.backgroundColor="#FAF6F5",t.style.color="black",o.style.backgroundColor="#F7F8F3",o.style.color="black",l.style.backgroundColor="#f8f3f0",l.style.color="black")})),c.addEventListener("click",(()=>{o.classList.toggle("minimize"),l.style.width="100%"})),n.addEventListener("click",(()=>{d.style.display="block",d.value="",r.style.display="flex"})),a.addEventListener("click",(()=>{d.style.display="none",r.style.display="none"})),s.addEventListener("click",(()=>{u.style.display="flex";const e=document.createElement("div");e.classList.add("project"),e.innerHTML+='<i class="fa-solid fa-check-double"></i>';const t=document.createElement("h3");""!=d.value?(t.textContent=d.value,e.innerHTML+='<i class="fa-solid fa-xmark"></i>',e.appendChild(t),u.appendChild(e),d.value="",d.style.display="none",r.style.display="none"):alert("Projects must have a name")}))}()})();