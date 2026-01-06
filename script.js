function nextLayer(layerNum) {
    // Sembunyikan semua layer
    document.querySelectorAll('.layer').forEach(layer => {
        layer.classList.remove('active');
    });

    // Tampilkan layer yang dipilih
    document.getElementById('layer' + layerNum).classList.add('active');

    // Jika masuk ke layer 2 (Ultah), tembakkan confetti!
    if (layerNum === 2) {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FFD700', '#FF4500', '#FFFFFF']
        });
    }
}

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.querySelector('.btn-music');
    
    if (music.paused) {
        music.play();
        btn.innerText = "⏸ Matikan Musik";
    } else {
        music.pause();
        btn.innerText = "🎵 Putar Musik";
    }
}
