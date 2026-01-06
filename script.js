let rainInterval = null;

function nextLayer(layerNum) {
    // Pindah Layer
    document.querySelectorAll('.layer').forEach(layer => {
        layer.classList.remove('active');
    });
    document.getElementById('layer' + layerNum).classList.add('active');

    // Confetti di Layer 2
    if (layerNum === 2) {
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    }

    // Efek Hujan di Layer 4
    if (layerNum === 4) {
        startFalling();
    } else {
        stopFalling();
    }
}

function startFalling() {
    if (rainInterval) return;
    const container = document.getElementById('fallingNailoongs');
    
    rainInterval = setInterval(() => {
        const nailoong = document.createElement('div');
        nailoong.classList.add('falling-object');
        // Pastikan file nailoong-mini.png ada di GitHub
        nailoong.style.backgroundImage = "url('./nailoong-mini.png')";
        nailoong.style.left = Math.random() * 100 + "vw";
        nailoong.style.animationDuration = (Math.random() * 2 + 2) + "s";
        
        container.appendChild(nailoong);
        setTimeout(() => { nailoong.remove(); }, 4000);
    }, 300);
}

function stopFalling() {
    clearInterval(rainInterval);
    rainInterval = null;
    document.querySelectorAll('.falling-object').forEach(el => el.remove());
}
