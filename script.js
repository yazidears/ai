// script.js
window.addEventListener('scroll', function() {
    const video = document.getElementById('background-video');
    const content = document.getElementById('content');
    let scrollPosition = window.scrollY;
    let blurValue = (scrollPosition > 100) ? (scrollPosition - 100) * 0.1 : 0; // Adjust blur calculation if needed
    video.style.filter = `blur(${Math.min(blurValue, 10)}px)`;

    content.style.opacity = (scrollPosition > 100) ? '1' : '0'; // Fade in content after 100px of scrolling
});
