// script.js

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach(item => {
    const plusBtn = item.querySelector(".plus");
    const minusBtn = item.querySelector(".minus");
    const qtySpan = item.querySelector(".quantity");

    plusBtn.addEventListener("click", () => {
      let qty = parseInt(qtySpan.textContent);
      qtySpan.textContent = qty + 1;
    });

    minusBtn.addEventListener("click", () => {
      let qty = parseInt(qtySpan.textContent);
      if (qty > 0) {
        qtySpan.textContent = qty - 1;
      }
    });
  });

  const bayarBtn = document.getElementById("bayarBtn");
  bayarBtn.addEventListener("click", () => {
    const pesanan = [];

    menuItems.forEach(item => {
      const name = item.dataset.name;
      const price = parseInt(item.dataset.price);
      const qty = parseInt(item.querySelector(".quantity").textContent);

      if (qty > 0) {
        pesanan.push({ name, price, qty });
      }
    });

    if (pesanan.length === 0) {
   Swal.fire({
    icon: 'warning',
    title: 'Tidak ada item dipilih',
    text: 'Harap pilih minimal 1 item sebelum melanjutkan!',
    confirmButtonText: 'Oke',
    confirmButtonColor: '#ff9800'
  });
  return;
    }

    // Simpan ke localStorage dan pindah ke halaman konfirmasi
    localStorage.setItem("pesanan", JSON.stringify(pesanan));
    window.location.href = "index2.html";
  });
});
