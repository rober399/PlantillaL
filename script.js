function showHearts() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        heart.innerText = '💖';
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

