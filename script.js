/* ================= LOADING ================= */

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.display = "none";

}, 1200);

});

/* ================= SCROLL BUTTON ================= */

function scrollToProducts(){

document.getElementById("products")
.scrollIntoView({
behavior:"smooth"
});

}

/* ================= BUY FUNCTION ================= */

function buyProduct(productName){

showToast();

setTimeout(()=>{

const message =
`Xin chào, tôi muốn mua ${productName}`;

const discordLink =
`https://discord.com/users/YOUR_USER_ID`;

window.open(discordLink,"_blank");

},1500);

}

/* ================= TOAST ================= */

function showToast(){

const toast =
document.getElementById("toast");

toast.style.opacity = "1";

setTimeout(()=>{

toast.style.opacity = "0";

},2000);

}

/* ================= SCROLL ANIMATION ================= */

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document
.querySelectorAll(".fade-in")
.forEach(el=>observer.observe(el));
