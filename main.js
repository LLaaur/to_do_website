(()=>{"use strict";!function(){const e=document.getElementById("darkmode-toggle"),t=document.querySelector(".side-menu"),n=document.querySelector(".right-panel");e.addEventListener("input",(()=>{const l=document.querySelector(".navbar");e.checked?(l.style.backgroundColor="#202025",l.style.color="white",t.style.backgroundColor="#2b2b2e",t.style.color="white",n.style.backgroundColor="#1a1a1b",n.style.color="white"):(l.style.backgroundColor="#FAF6F5",l.style.color="black",t.style.backgroundColor="#F7F8F3",t.style.color="black",n.style.backgroundColor="#f8f3f0",n.style.color="black")})),document.querySelector(".menu-button").addEventListener("click",(()=>{t.classList.toggle("minimize"),n.style.width="100%"}));const l=document.querySelector(".add-task"),o=document.createElement("div"),d=document.querySelector(".current-task"),s=document.getElementById("add-task-popup"),c=document.querySelector(".add-or-cancel-task-buttons");l.addEventListener("click",(()=>{s.style.display="block",s.value="",l.style.display="none",c.style.display="flex"})),document.querySelector(".cancel-task-button").addEventListener("click",(()=>{s.style.display="none",c.style.display="none",l.style.display="flex"}));const a=document.querySelector(".add-task-button"),r=document.querySelector(".tasks"),i=document.querySelector("ul"),y=document.querySelector(".inbox"),u=document.querySelector(".today"),m=document.querySelector(".tomorrow"),p=document.querySelector(".this-week"),k=document.querySelector(".task-list");y.addEventListener("click",(()=>{d.textContent=y.textContent,l.style.display="flex",k.style.display="flex",o.style.display="flex"})),u.addEventListener("click",(()=>{d.textContent=u.textContent,l.style.display="none",o.style.display="none"})),m.addEventListener("click",(()=>{d.textContent=m.textContent,l.style.display="none",o.style.display="none"})),p.addEventListener("click",(()=>{d.textContent=p.textContent,l.style.display="none",o.style.display="none"})),a.addEventListener("click",(function(){const e=document.createElement("li"),t=document.createElement("div"),n=document.createElement("i");n.classList.add("fa-regular"),n.classList.add("fa-circle");const l=document.createElement("h3");if(""==s.value)return void alert("Tasks must have a name");l.textContent=s.value;const o=document.createElement("div"),d=document.createElement("h3");d.textContent="No date";const c=document.createElement("i");c.classList.add("fa-solid"),c.classList.add("fa-xmark"),t.appendChild(n),t.appendChild(l),t.classList.add("left-side"),o.appendChild(d),o.appendChild(c),o.classList.add("right-side"),e.appendChild(t),e.appendChild(o),e.classList.add("task"),r.style.display="flex",i.style.display="flex",i.style.flexDirection="column",i.appendChild(e),n.addEventListener("click",(e=>{e.currentTarget.parentNode.style.opacity="0.6",d.style.opacity="0.6",e.currentTarget.style.background="green",e.currentTarget.style.borderRadius="50%"})),c.addEventListener("click",(()=>{i.removeChild(e)}));const a=document.createElement("div"),y=document.createElement("h3");y.textContent="Today";const u=document.createElement("h3");u.textContent="Tomorrow";const m=document.createElement("h3");m.textContent="Next week";const p=document.createElement("h3");p.textContent="No due date",a.appendChild(y),a.appendChild(u),a.appendChild(m),a.appendChild(p),d.addEventListener("click",(e=>{o.appendChild(a),a.classList.add("set-date"),o.style.flexDirection="column",y.addEventListener("click",(()=>{d.textContent="Today",a.style.display="none",o.style.flexDirection="column-reverse",d.style.pointerEvents="none"})),u.addEventListener("click",(()=>{d.textContent="Tomorrow",a.style.display="none",o.style.flexDirection="column-reverse",d.style.pointerEvents="none"})),m.addEventListener("click",(()=>{d.textContent="Next week",a.style.display="none",o.style.flexDirection="column-reverse",d.style.pointerEvents="none"})),p.addEventListener("click",(()=>{d.textContent="No due date",a.style.display="none",o.style.flexDirection="column-reverse",d.style.pointerEvents="none"}))}))})),a.addEventListener("click",(function(){l.style.display="flex",s.style.display="none",s.value="",c.style.display="none",k.style.display="flex"}))}()})();