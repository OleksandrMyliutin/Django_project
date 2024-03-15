var slideCont = document.querySelector(".slides-container")
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    makeTimer();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    makeTimer();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
var timer = 0;
makeTimer();
function makeTimer(){
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function(){
        slideIndex++;
        showSlides(slideIndex);
    },6000);
}

slideCont.addEventListener("mouseenter", function() {
    clearInterval(timer)
});

slideCont.addEventListener("mouseleave", function() {
    makeTimer()
});