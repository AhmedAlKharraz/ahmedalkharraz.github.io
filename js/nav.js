let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main .div");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY + 400;
    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        console.log(link.hash);
        if (section.offsetTop < fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add("clicked");
        } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            document.getElementById("portfolio-section").classList.remove("clicked");
            document.getElementById("aboutme-section").classList.remove("clicked");
            document.getElementById("last-section").classList.add("clicked");
        } else {
            link.classList.remove("clicked");

        }
    });
});