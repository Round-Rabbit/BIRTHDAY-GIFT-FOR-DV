function nextLayer(layerNum) {
    document.querySelectorAll('.layer').forEach(layer => {
        layer.classList.remove('active');
    });

    document.getElementById('layer' + layerNum).classList.add('active');

    const video = document.getElementById('ultahVideo');
    if (layerNum !== 3) { video.pause(); }

    if (layerNum === 2) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }

    if (layerNum === 4) {
        startFalling();
    }
}

function startFalling() {
    const container = document.getElementById('fallingNailoongs');
    
    // Fungsi ini membuat gambar jatuh setiap 300ms
    setInterval(() => {
        const nailoong = document.createElement('div');
        nailoong.classList.add('falling-object');
        
        // Gunakan path relatif yang jelas
        nailoong.style.backgroundImage = "url('./nailoong-mini.png')";
        
        nailoong.style.left = Math.random() * 100 + "vw";
        // Durasi jatuh acak antara 2 sampai 4 detik
        nailoong.style.animationDuration = (Math.random() * 2 + 2) + "s";
        
        container.appendChild(nailoong);

        // Hapus elemen setelah jatuh agar tidak memberatkan HP
        setTimeout(() => { nailoong.remove(); }, 4500);
    }, 300);
}
