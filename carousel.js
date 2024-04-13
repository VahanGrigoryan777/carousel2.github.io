document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.display = "none";
        });
        slides[index].style.display = "block";
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function showPreviousSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    const prevButton = document.querySelector(".carouselButton");
    prevButton.addEventListener("click", showPreviousSlide);

    const nextButton = document.querySelector(".carouselButtonRight");
    nextButton.addEventListener("click", showNextSlide);
});