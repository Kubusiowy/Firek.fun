const box = document.getElementById('hoverBox');

document.addEventListener('mousemove', (e) => {
    const rect = box.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const rotateX = (deltaY / window.innerHeight) * 60;
    const rotateY = -(deltaX / window.innerWidth) * 60;

    box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.addEventListener('mouseleave', () => {
    box.style.transform = `rotateX(0deg) rotateY(0deg)`;
});