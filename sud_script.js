// APNI KAKSHA JAVASCRIPT :-)

// VARIABLE USED :-)
let html = document.querySelector("html");
let first_section = document.getElementById("first_section");
let navigation = document.getElementById("navigation");
let nav = document.getElementById("nav");
let right_nav_div = document.getElementById("right_nav_div");
let hamburger = document.getElementById("hamburger");
let cross = document.getElementById("cross");
let apni_btn = document.querySelector(".apni_btn");


// LOGIC USED :-)

hamburger.addEventListener("click", ()=>{
    // html.style.overflow = "hidden";
    // first_section.classList.toggle("first_section_resposive");
    hamburger.style.display = "none";
    cross.style.display = "block";
    navigation.classList.toggle("navigation_responsive");
    navigation.classList.toggle("navigation");
    nav.classList.toggle("nav_responsive");
    right_nav_div.classList.toggle("right_nav_div_responsive");
    apni_btn.style.display = "none";
})

cross.addEventListener("click", ()=>{
    html.style.overflow = "visible";
    // first_section.classList.toggle("first_section_resposive");
    hamburger.style.display = "block";
    cross.style.display = "none";
    navigation.classList.toggle("navigation");
    navigation.classList.toggle("navigation_responsive");
    nav.classList.toggle('nav_responsive');
    right_nav_div.classList.toggle("right_nav_div_responsive");
    apni_btn.style.display = "block";
})



