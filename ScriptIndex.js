const text = "Witaj na Firek.fun...";
const typedText = document.getElementById("typed-text");
const hint = document.getElementById("enter-hint");
let index = 0;

function type() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50);
    } else {
        hint.style.display = "block";
    }
}

window.addEventListener("load", () => {
    type();
});


window.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && index >= text.length) {
        const preloader = document.getElementById("preloader");
        window.location.href = "main.html";
    }
});