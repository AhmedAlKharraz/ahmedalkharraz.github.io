baguetteBox.run('.gallery'), {
    buttons: true
};


function myFunction() {
    // Declare variables
    var input, filter, imageContainer, img, i;
    input = document.getElementById('myInput');
    filter = input.value.toLowerCase();
    imageContainer = document.getElementById("gallery-grid");
    img = imageContainer.querySelectorAll('.picture');

    // Loop through all img items, and hide those who don't match the search query
    for (i = 0; i < img.length; i++) {
        txtValue = img[i].getElementsByTagName("img")[0].alt;
        txtValue2 = img[i].getElementsByTagName("a")[0].getAttribute("data-caption");;
        if (txtValue.toLowerCase().indexOf(filter) > -1 || txtValue2.toLowerCase().indexOf(filter) > -1) {
            img[i].style.display = "";
        } else {
            img[i].style.display = "none";
        }
    }
}