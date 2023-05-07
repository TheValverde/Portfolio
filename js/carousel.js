function initCarousel(carousel) {
    const images = carousel.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    let timeout;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function autoCycle() {
        showNextImage();
        timeout = setTimeout(autoCycle, 5000);
    }

    carousel.querySelector('.arrow-left').addEventListener('click', () => {
        clearTimeout(timeout);
        showPrevImage();
        timeout = setTimeout(autoCycle, 5000);
    });

    carousel.querySelector('.arrow-right').addEventListener('click', () => {
        clearTimeout(timeout);
        showNextImage();
        timeout = setTimeout(autoCycle, 5000);
    });

    showImage(currentIndex);
    timeout = setTimeout(autoCycle, 5000);
}

window.onload = () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(initCarousel);
};
