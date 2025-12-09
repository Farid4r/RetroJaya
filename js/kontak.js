  document.getElementById("waForm").addEventListener("submit", function(event) {
    event.preventDefault(); // cegah submit default

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    const nomorTujuan = "6285892250401";

    const teks = `Halo, saya ${nama},Email: ${email}, Pesan saya ${pesan}`;
    const encodedText = encodeURIComponent(teks);
    const waURL = `https://wa.me/${nomorTujuan}?text=${encodedText}`;

    window.open(waURL, "_blank");
  });

  // Menangani event klik pada tombol menu mobile
  document.getElementById('menuBtn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    // Menyembunyikan atau menampilkan menu mobile
    mobileMenu.classList.toggle('hidden');
  });

