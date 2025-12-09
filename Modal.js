  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");

  // Buka modal
  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Tutup modal
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Tutup jika klik area gelap (overlay)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
