function initCarousel(carousel) {
    const images = carousel.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    let timeout;

    function showImage(index) {
        images[currentIndex].style.display = 'none';
        images[index].style.display = 'block';
        currentIndex = index;
    }

    function showNextImage() {
        const nextIndex = (currentIndex + 1) % images.length;
        showImage(nextIndex);
    }

    function showPrevImage() {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(prevIndex);
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

    autoCycle();
}

window.onload = () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(initCarousel);
};
