// script.js
window.addEventListener('scroll', function() {
    const video = document.getElementById('background-video');
    const content = document.getElementById('main-content');
    let scrollPosition = window.scrollY;
    let blurValue = scrollPosition * 0.05; // Controls the rate of blurring
    if (blurValue > 10) blurValue = 10; // Cap the blur effect
    video.style.filter = `blur(${blurValue}px)`;

    if (scrollPosition > 300) { // Adjust this value based on when you want the content to start appearing
        content.style.opacity = '1';
    } else {
        content.style.opacity = '0';
    }
});
