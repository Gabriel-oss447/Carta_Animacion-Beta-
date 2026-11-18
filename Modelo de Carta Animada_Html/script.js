function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const particleCount = 35; 
    for (let i = 0; i < particleCount; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
        heart.style.opacity = Math.random() * 0.4 + 0.1;
        heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
}
document.addEventListener('DOMContentLoaded', createParticles);
