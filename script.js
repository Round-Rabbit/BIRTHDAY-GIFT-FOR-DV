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

    // Jika masuk ke layer 3 (Harapan & Doa), mulai efek hujan Nailoong
    if (layerNum === 3) {
        startFallingNailoongs();
    } else {
        stopFallingNailoongs(); // Pastikan efek berhenti jika pindah dari layer 3
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

// --- Logika Efek Hujan Nailoong ---
const fallingObjects = [];
let fallingInterval;

function createFallingNailoong() {
    const container = document.getElementById('fallingNailoongs');
    const nailoong = document.createElement('div');
    nailoong.classList.add('falling-object');
    nailoong.style.backgroundImage = 'url("nailoong-mini.png")'; // Pastikan ada gambar mini Nailoong
    nailoong.style.left = Math.random() * 100 + 'vw'; // Posisi horizontal acak
    nailoong.style.animationDuration = (Math.random() * 2 + 3) + 's'; // Durasi jatuh acak (3-5 detik)
    nailoong.style.animationDelay = (Math.random() * 0.5) + 's'; // Penundaan acak
    
    container.appendChild(nailoong);
    fallingObjects.push(nailoong);

    // Hapus objek setelah selesai animasi untuk efisiensi
    nailoong.addEventListener('animationend', () => {
        nailoong.remove();
        fallingObjects.splice(fallingObjects.indexOf(nailoong), 1);
    });
}

function startFallingNailoongs() {
    // Hentikan interval sebelumnya jika ada
    stopFallingNailoongs(); 
    // Mulai menembakkan Nailoong setiap 200ms
    fallingInterval = setInterval(createFallingNailoong, 200);
}

function stopFallingNailoongs() {
    if (fallingInterval) {
        clearInterval(fallingInterval);
        fallingInterval = null;
    }
    // Hapus semua objek yang masih ada di layar
    document.querySelectorAll('.falling-object').forEach(obj => obj.remove());
    fallingObjects.length = 0; // Kosongkan array
}
