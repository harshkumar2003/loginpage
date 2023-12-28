function showSection(section) {
    document.querySelectorAll('.form-section').forEach(function (element) {
        element.classList.remove('live-section');
    });

    document.getElementById(section + '-section').classList.add('live-section');
}
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelector('.slides');

    let currentIndex = 0;

    function showSlide(index) {
        const transformValue = -index * 100 + '%';
        slides.style.transform = 'translateX(' + transformValue + ')';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 3; 
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000); 
});