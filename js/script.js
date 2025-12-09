  // Ambil semua tombol & badge keranjang
  const cartButtons = document.querySelectorAll('[data-cart-button]');
  const cartCountBadges = document.querySelectorAll('[data-cart-count]');
  const mobileMenu = document.getElementById('mobileMenu');

  function updateCartBadges() {
    const count = (window.cart || []).reduce((a, b) => a + b.qty, 0);
    cartCountBadges.forEach(el => el.textContent = count);
  }

  function openCart() {
    document.getElementById('cart-panel').classList.remove('translate-x-full');
  }

  // Klik tombol keranjang → buka panel & tutup menu mobile bila terbuka
  cartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
      // pastikan renderCart() dan update badge dipanggil
      if (typeof renderCart === 'function') renderCart();
      openCart();
      if (typeof updateCartBadges === 'function') updateCartBadges();
    });
  });

  // Pastikan fungsi updateCartBadges dipanggil setiap cart berubah:
  // - setelah addToCart(), changeQty(), removeItem(), renderCart()
  // Contoh (tambahkan di fungsi kamu):
  //   saveCart(); renderCart(); updateCartBadges();

  // ---------- DATA PRODUK ----------
  const products = [
    {
      id: 'madilog-1',
      title: "Madilog Cetakan Pertama",
      img: "https://assets.kompasiana.com/items/album/2024/09/30/madilog-66fa13d6ed6415285518e612.jpg?t=o&v=740&x=416",
      desc: "Madilog merupakan sintesis pemikiran materialisme dialektis yang menjembatani filsafat Barat dengan kondisi Indonesia.",
      price: 15000000
    },
    {
      id: 'mona-2',
      title: "Lukisan Mona Lisa",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
      desc: "Lukisan minyak di atas kayu oleh Leonardo da Vinci pada abad ke-16.",
      price: 20000000
    },
    {
      id: 'vangogh-3',
      title: "Lukisan Van Gogh",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      desc: "Karya pelukis pasca-Impresionis Belanda, Vincent van Gogh.",
      price: 99000000
    },
    {
      id: 'clock-4',
      title: "Jam Dinding Kuno",
      img: "https://p2.piqsels.com/preview/384/964/985/wall-clock-clock-antique-pendulum-clock-clock-face.jpg",
      desc: "Jam dinding klasik berusia lebih dari setengah abad.",
      price: 50000000
    },
    {
      id: 'kantong-5',
      title: "Kantong-Semar",
      img: "https://usaharumahan.id/wp-content/uploads/2019/04/Barang_Antik_Kantong_Semar_Emas.jpg",
      desc: "Wadah yang berbentuk menyerupai kantong semar yang antik.",
      price: 78000000
    },
    {
      id: 'teko-6',
      title: "Teko India",
      img: "https://i.etsystatic.com/36599786/r/il/f1b2a1/5562125860/il_1588xN.5562125860_bdl3.jpg",
      desc: "Wadah India Kuningan Berpola dengan Tutup Engsel VTG Warna Emas",
      price: 50000000
    },
    {
      id: 'gamophone-7',
      title: "Gramophone",
      img: "https://down-id.img.susercontent.com/file/id-11134207-7rasb-m5ddvd5o78jq54",
      desc: "Alat pemutar musik pada abad-18 dengan piring hitam .",
      price: 90000000
    },
    {
      id: 'uangkuno-8',
      title: "Uang Kuno 1000 rupiah",
      img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/107/MTA-63167984/no-brand_uang-kuno-10000-rupiah-rp-th-1992-uang-kuno-uang-kertas-lama_full01.jpg",
      desc: "Uang 1000 Rupiah yang digunakan pada tahun 1992.",
      price: 50000000
    },
    {
      id: 'telepon-9',
      title: "Telepon putar antik Bakelite",
      img: "https://www.chezpluie.com/cdn/shop/products/DSC_6776_899804f9-7bf0-4d48-ad6b-2e4718e989ea.jpg?v=1565598794&width=1000",
      desc: "Sebuah telepon antik yang luar biasa dari awal abad ke-20. Dibuat di Singapura dari bakelit, logam, dan tembaga. Hanya untuk keperluan dekoratif.",
      price: 87000000
    },
    {
      id: 'buku-10',
      title: "Buku Soeharto",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1266068843i/7725825._UY630_SR1200,630_.jpg",
      desc: "“10 Dosa Besar Soeharto” mengulas kepemimpinan Soeharto secara kritis, menyoroti sepuluh persoalan utama dalam kebijakan dan politiknya serta dampaknya bagi masyarakat Indonesia.",
      price: 900000
    },
    {
      id: 'radio-11',
      title: "Telesonic radio",
      img: "https://images.tokopedia.net/img/cache/500-square/product-1/2020/8/28/7644457/7644457_437735e6-eee9-4e06-a1fa-9b502402fdd4_1080_1080",
      desc: " Radio Telesonic Tempo Doeloe Display Only, dijual sebagai Barang Pajangan / Display Koleksi Barang Antik Agan.",
      price: 96000000
    },
    {
      id: 'TV-12',
      title: "TV Kuno",
      img: "https://www.tagar.id/Asset/uploads2019/1570006320032-tv-jadul.jpg",
      desc: "Televisi yang sudah berumur satu abad, bisa digunakan untuk pajangan pada ruang tamu.",
      price: 56700000
    },
    {
      id: 'MesinKetik-13',
      title: "Mesin Ketik",
      img: "https://1.bp.blogspot.com/-sh44HEyavlI/WdgJwpMQ4KI/AAAAAAAAABM/uc9_uHEUVfYj5LKD8GyzcXOKjxKZLUD6ACK4BGAYYCw/s1600/Mesin%2BKetik.jpg",
      desc: "seuah mesin ketik yang digunakan untuk mengetik pada tempo dulu seblum adanya komputer seperti pada zaman saat ini.",
      price: 89000000
    },
  ];

  // ---------- UTIL ----------
  const rupiah = (n) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })
      .format(n).replace('IDR', 'Rp').trim();

  // ---------- RENDER GRID ----------
  const container = document.getElementById("product-list");
  function renderProducts() {
    container.innerHTML = "";
    products.forEach(p => {
      const card = document.createElement("div");
      card.className = "bg-white shadow-lg rounded-lg overflow-hidden flex flex-col cursor-pointer group";
      card.innerHTML = `
        <img src="${p.img}" alt="${p.title}" class="w-full h-60 object-cover group-hover:scale-[1.02] transition">
        <div class="p-4 flex flex-col flex-grow">
          <h4 class="font-bold text-lg mb-2">${p.title}</h4>
          <p class="text-gray-600 text-sm mb-3 flex-grow line-clamp-3">${p.desc}</p>
          <button class="block w-full bg-yellow-400 text-white p-2 rounded-md text-sm font-medium transition hover:scale-105">
            ${rupiah(p.price)}
          </button>
        </div>
      `;
      // klik di mana saja pada card => buka modal
      card.addEventListener('click', (e) => {
        // kalau tombol harga diklik, tetap buka modal (biarin default)
        openModal(p);
      });
      container.appendChild(card);
    });
  }
  renderProducts();

  // ---------- MODAL ----------
  const modal = document.getElementById('product-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const btnAddToCart = document.getElementById('btn-add-to-cart');

  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalPrice = document.getElementById('modal-price');

  let selectedProduct = null;

  function openModal(p) {
    selectedProduct = p;
    modalImg.src = p.img;
    modalImg.alt = p.title;
    modalTitle.textContent = p.title;
    modalDesc.textContent = p.desc;
    modalPrice.textContent = rupiah(p.price);

    modal.classList.remove('hidden');
    // sederhana: lock scroll
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    selectedProduct = null;
  }

  modalBackdrop.addEventListener('click', closeModal);
  btnCloseModal.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
  });

  // ---------- KERANJANG ----------
  const btnCart = document.getElementById('btn-cart');
  const cartPanel = document.getElementById('cart-panel');
  const btnCloseCart = document.getElementById('btn-close-cart');
  const cartItemsEl = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total');
  const cartCountEl = document.getElementById('cart-count');

  // load dari localStorage
  let cart = JSON.parse(localStorage.getItem('cart-antique') || '[]');

  function saveCart() {
    localStorage.setItem('cart-antique', JSON.stringify(cart));
  }

  function cartCount() {
    return cart.reduce((a, b) => a + b.qty, 0);
  }

  function cartTotal() {
    return cart.reduce((a, b) => a + b.price * b.qty, 0);
  }

  function updateCartBadge() {
    cartCountEl.textContent = cartCount();
  }

  function renderCart() {
    if (cart.length === 0) {
      cartItemsEl.innerHTML = `<div class="p-4 text-sm text-gray-500">Keranjang kosong.</div>`;
    } else {
      cartItemsEl.innerHTML = cart.map(item => `
        <div class="p-4 flex gap-3 items-center">
          <img src="${item.img}" alt="${item.title}" class="w-14 h-14 object-cover rounded">
          <div class="flex-1">
            <div class="text-sm font-medium">${item.title}</div>
            <div class="text-xs text-gray-500">${rupiah(item.price)}</div>
            <div class="mt-2 flex items-center gap-2">
              <button data-dec="${item.id}" class="px-2 border rounded">-</button>
              <span class="min-w-6 text-center">${item.qty}</span>
              <button data-inc="${item.id}" class="px-2 border rounded">+</button>
              <button data-del="${item.id}" class="ml-auto text-xs text-red-600 hover:underline">Hapus</button>
            </div>
          </div>
        </div>
      `).join('');
    }
    cartTotalEl.textContent = rupiah(cartTotal());
    updateCartBadge();

    // delegasi event +/-/hapus
    cartItemsEl.querySelectorAll('[data-inc]').forEach(btn => {
      btn.addEventListener('click', () => changeQty(btn.dataset.inc, 1));
    });
    cartItemsEl.querySelectorAll('[data-dec]').forEach(btn => {
      btn.addEventListener('click', () => changeQty(btn.dataset.dec, -1));
    });
    cartItemsEl.querySelectorAll('[data-del]').forEach(btn => {
      btn.addEventListener('click', () => removeItem(btn.dataset.del));
    });
  }

  function changeQty(id, delta) {
    const idx = cart.findIndex(i => i.id === id);
    if (idx >= 0) {
      cart[idx].qty += delta;
      if (cart[idx].qty <= 0) cart.splice(idx, 1);
      saveCart();
      renderCart();
    }
  }

  function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
  }

  function addToCart(p) {
    const exist = cart.find(i => i.id === p.id);
    if (exist) exist.qty += 1;
    else cart.push({ id: p.id, title: p.title, img: p.img, price: p.price, qty: 1 });
    saveCart();
    renderCart();
    updateCartBadge();
  }

  // tombol di modal
  btnAddToCart.addEventListener('click', () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
      closeModal();
      openCart(); // langsung buka keranjang agar terlihat
    }
  });

  function openCart() {
    cartPanel.classList.remove('translate-x-full');
  }
  function closeCart() {
    cartPanel.classList.add('translate-x-full');
  }
  btnCart.addEventListener('click', () => { renderCart(); openCart(); });
  btnCloseCart.addEventListener('click', closeCart);

  // init
  renderCart();
