(()=>{"use strict";const n="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDcyZTJhMDViODE4ODAwMTk1ZTgxMmEiLCJpYXQiOjE2ODUyNTA3MjB9.nRlNqnbmauv5Wk4BiMUbqUR1nqaSTDGJX-YALtHO7JU",a=async a=>{const e=a?`${n} ${a}`:"https://coding-challenge-api.aerolab.co/products";try{const a=(await fetch(e,{headers:{Authorization:n}})).json();return console.log(a),a}catch(n){console.log("Fetch Error",n)}},e=()=>'\n        <div class="Error404">\n            <h2>Error 404</h2>\n        </div>  \n    ',t=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",c={"/":async()=>`\n       <div class = "Product">\n        ${(await a()).map((n=>`\n            <article class = "product-items">\n\n                <a href="#/${n.id}/">\n                    <img src="${n.img.url}" alt= "${n.name}">\n                    <h2>${n.name}</h2>\n                </a>\n            </article>  \n            `)).join("")}    \n            \n       </div>\n    `,"/:id":async()=>{const n=(n=>{const a=t();return n.find((n=>n._id===a))||null})(t());return console.log(n),`\n\n         <div class = "Products-inner">\n            <article class = "Products-card">\n                <img src="${n.image}" alt="${n.name}">  \n                <h2>${n.name}</h2>\n            </article>\n\n            <article class = "Products-card">\n            <h3> name: <span>${n.name}</span></</h3>\n            <h3> cost: <span>${n.cost}</span></</h3>\n            <h3> category: <span>${n.category}</span></h3>\n            \n            </article>\n        </div>  \n        `},"/about":"about"},i=async()=>{const n=await a(),i=document.getElementById("header"),s=document.getElementById("content");i.innerHTML=await'\n        <div class="Header-main">\n            <div class="Header-logo">\n                <h1>\n                    <a href="/">Aerolab </a>\n                </h1>\n            </div>\n\n            <div class="Header-nav">\n                <a href="#/about/">\n                    About\n                </a>\n            </div>\n        </div>   \n    ';let o=t(),r=await(n=>n.length<=24?"/"===n?n:"/:id":`/${n}`)(o),d=c[r]?c[r]:e;s.innerHTML=await d(n)};window.addEventListener("load",i),window.addEventListener("hashchange",i)})();