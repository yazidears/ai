// script.js
window.addEventListener('scroll', function() {
    const video = document.getElementById('background-video');
    const content = document.getElementById('main-content');
    let scrollPosition = window.scrollY;
    let blurValue = (scrollPosition > 100) ? (scrollPosition - 100) * 0.05 : 0; // Delays blurring until 100px scroll
    blurValue = Math.min(blurValue, 10); // Cap the blur effect at 10px
    video.style.filter = `blur(${blurValue}px)`;

    content.style.opacity = (scrollPosition > 100) ? '1' : '0'; // Content fades in after 100px scroll
});
