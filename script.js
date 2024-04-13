// script.js
window.addEventListener('scroll', function() {
    const video = document.getElementById('background-video');
    let scrollPosition = window.scrollY;
    let blurValue = scrollPosition / 100; // Adjust the denominator to control the blur speed
    if (blurValue > 10) blurValue = 10; // Cap the blur effect
    video.style.filter = `blur(${blurValue}px)`;
});
