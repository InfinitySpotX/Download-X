// ===============================
// INFINITY STORE APP.JS
// ===============================

// Search
const searchInput = document.querySelector(".search input");
const cards = document.querySelectorAll(".card");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const text = card.querySelector("p").textContent.toLowerCase();

      if (title.includes(value) || text.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// ===============================
// CATEGORY BUTTONS
// ===============================

const categoryButtons = document.querySelectorAll(".categories button");

categoryButtons.forEach(button => {

button.addEventListener("click",()=>{

categoryButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

});

});

// ===============================
// DOWNLOAD BUTTON
// ===============================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",()=>{

if(button.innerText==="Download"){

button.innerText="Downloading...";

setTimeout(()=>{

button.innerText="Download";

},2000);

}

});

});

// ===============================
// BOTTOM NAVIGATION
// ===============================

const navItems=document.querySelectorAll(".bottom-nav a");

navItems.forEach(item=>{

item.addEventListener("click",()=>{

navItems.forEach(nav=>nav.classList.remove("active"));

item.classList.add("active");

});

});

// ===============================
// SCROLL TO TOP
// ===============================

const topButton=document.createElement("div");

topButton.className="fab";

topButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topButton);

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Hide & Show FAB

window.addEventListener("scroll",()=>{

if(window.scrollY>350){

topButton.style.opacity="1";

topButton.style.pointerEvents="auto";

}

else{

topButton.style.opacity="0";

topButton.style.pointerEvents="none";

}

});
// ===============================
// RIPPLE EFFECT
// ===============================

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        },600);

    });

});

// ===============================
// SCROLL REVEAL
// ===============================

const revealItems = document.querySelectorAll(
".card,.feature-card,.hero,.section-title"
);

const reveal = () => {

    const trigger = window.innerHeight - 100;

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();

// ===============================
// HERO PARALLAX
// ===============================

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    const y = window.scrollY;

    if(hero){

        hero.style.backgroundPosition =
        "center " + (y * 0.4) + "px";

    }

});

// ===============================
// LOADING EFFECT
// ===============================

window.addEventListener("load",()=>{

    document.body.style.opacity = "1";

});

// ===============================
// CARD HOVER
// ===============================

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(59,130,246,.18),
        rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background =
        "rgba(255,255,255,.05)";

    });

});

// ===============================
// IMAGE ZOOM
// ===============================

document.querySelectorAll(".card img").forEach(img=>{

    img.addEventListener("click",()=>{

        img.style.transform="scale(1.15)";

        setTimeout(()=>{

            img.style.transform="scale(1)";

        },250);

    });

});

// ===============================
// BUTTON ANIMATION
// ===============================

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-3px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0px)";

    });

});

// ===============================
// PERFORMANCE
// ===============================

window.addEventListener("contextmenu",e=>{

    e.preventDefault();

});

// ===============================
// INIT
// ===============================

console.log("InfinityStore Loaded Successfully");

// search ==========

const searchInput = document.querySelector(".search input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keydown", function(e) {

    if (e.key !== "Enter") return;

    const value = this.value.trim().toLowerCase();

    let found = false;

    cards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {

            card.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            found = true;
        }

    });

    if (!found) {
        alert("No app found");
    }

});

const title = card.querySelector("h3").textContent.toLowerCase();
