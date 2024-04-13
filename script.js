// script.js
window.addEventListener('scroll', function() {
    const video = document.getElementById('background-video');
    const content = document.getElementById('main-content');
    const maxBlur = 20; // Maximum blur value
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;
    let blurValue = (scrollPosition / (windowHeight * 1.5)) * maxBlur;

    blurValue = Math.min(blurValue, maxBlur); // Cap the blur effect
    video.style.filter = `blur(${blurValue}px)`;

    // Start showing content after 50% of maxBlur
    if (scrollPosition > (windowHeight * 0.75)) {
        content.style.opacity = Math.min((scrollPosition - (windowHeight * 0.75)) / (windowHeight * 0.25), 1);
    } else {
        content.style.opacity = 0;
    }
});
