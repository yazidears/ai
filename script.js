// script.js
window.addEventListener('scroll', function() {
    const video = document.getElementById('background-video');
    let scrollPosition = window.scrollY;
    let blurValue = (scrollPosition > 100) ? (scrollPosition - 100) * 0.1 : 0;
    video.style.filter = `blur(${Math.min(blurValue, 10)}px)`;
});
