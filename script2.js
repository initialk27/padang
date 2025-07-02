 const data = JSON.parse(localStorage.getItem('pesanan')) || [];
    const orderSummary = document.getElementById('orderSummary');
    const totalHarga = document.getElementById('totalHarga');
    const waLink = document.getElementById('waLink');

    let total = 0;
    let pesanText = "Halo! Saya ingin memesan:\n";

    data.forEach(item => {
      if (item.qty > 0) {
        const line = document.createElement('p');
        const hargaItem = item.qty * item.price;
        total += hargaItem;
        line.textContent = `${item.name} ${item.qty} x Rp${item.price.toLocaleString()} = Rp${hargaItem.toLocaleString()}`;
        orderSummary.appendChild(line);

        pesanText += `${item.name} ${item.qty} x Rp${item.price.toLocaleString()} = Rp${hargaItem.toLocaleString()}\n`;
      }
    });

    totalHarga.textContent = `Total: Rp${total.toLocaleString()}`;
    pesanText += `\nTotal: Rp${total.toLocaleString()}`;

    const encodedMessage = encodeURIComponent(pesanText);
    const waNumber = "6282280992344"; // ganti dengan nomor WhatsApp Anda
    waLink.href = `https://wa.me/${waNumber}?text=${encodedMessage}`;