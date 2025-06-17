
    const texts = ["Welcome to Firek.fun ", "Made by Kubusiowy ", "Follow on GitHub ", "Android Developer ","Web Developer "];
    let count = 0;
    let index = 0;
    let currentText = '';
    let isDeleting = false;
    const typedText = document.getElementById("typed-text");

    function typeEffect() {
    const fullText = texts[count % texts.length];

    if (isDeleting) {
    currentText = fullText.substring(0, index--);
} else {
    currentText = fullText.substring(0, index++);
}

    typedText.textContent = currentText;

    let speed = isDeleting ? 60 : 100;

    if (!isDeleting && index === fullText.length) {
    speed = 2500;
    isDeleting = true;
} else if (isDeleting && index === 0) {
    isDeleting = false;
    count++;
    speed = 500;
}

    setTimeout(typeEffect, speed);
}

    document.addEventListener("DOMContentLoaded", typeEffect);
