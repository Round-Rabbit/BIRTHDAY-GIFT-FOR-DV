function openGift() {
    // 1. Jalankan efek Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    // 2. Sembunyikan amplop
    document.getElementById('envelope').style.display = 'none';

    // 3. Tampilkan konten utama
    const content = document.getElementById('content');
    content.classList.remove('hidden');
    
    // 4. Ubah warna background agar lebih ceria
    document.body.style.backgroundColor = "#fff0f3";
}

function playMusic() {
    var audio = document.getElementById("birthdaySong");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
