// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    myFunction()
};

// Get the header
var header = document.getElementById("myHeader");
var bg = document.getElementById("stick-bg");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        //header.classList.add("stick-bg");
        //bg.style.height = "80px";
    } else {
        header.classList.remove("sticky");
        //header.classList.remove("stick-bg");
        //bg.style.height = 0;
    }
}