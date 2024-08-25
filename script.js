document.querySelector('.scroll-down').addEventListener('click', function() {
    window.scrollTo({
        top: document.querySelector('.about-me').offsetTop,
        behavior: 'smooth'
    });
});
