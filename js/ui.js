/**
 * ========================
 * UI GÜNCELLEMELERI (ui.js)
 * ========================
 *
 * DOM manipülasyonu ve arayüz güncelleme işlemleri
 * Bu dosya ekrana veri basma ve event yönetimi içindir.
 * Hesaplama ve veri değiştirme mantığını ilgili veri dosyalarında çöz.
 *
 * Görevler:
 * - Ürünleri ekranda gösterme
 * - Sepeti ekranda gösterme
 * - Toplam fiyat güncelleme
 * - Event listeners ekleme
 */

/**
 * SPRINT 1: Ürün listesini ekranda göster
 *
 * Adımlar:
 * 1. #productsList elementini bul
 * 2. forEach veya for döngüsü ile ürünleri döngüle
 * 3. Her ürün için HTML kartı oluştur
 * 4. Stok durumuna göre renk ve buton durumu belirle
 * 5. Butonlara click event listener ekle
 *
 * İpucu:
 * `productsToDisplay` varsayılan olarak tüm ürünleri getirir.
 */
function displayProducts(productsToDisplay = products) {
  // TODO: Bu fonksiyonu doldur

  const productsList = document.getElementById("productsList");

  if (!productsList) {
    console.error("Ürün listesi elementi bulunamadı!");
    return;
  }

  // Ürünleri temizle
  productsList.innerHTML = "";

  // Her ürün için kartı oluştur
  productsToDisplay.forEach((product) => {
    // TODO: HTML kartı oluştur
    // Örnek HTML yapı:
    /*
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₺${product.price}</p>
            <p class="stock-status">${product.stock > 0 ? 'Stokta Var' : 'Stok Bitti'}</p>
            <button class="add-to-cart-btn" data-product-id="${product.id}">Sepete Ekle</button>
        </div>
        */
  });
}

/**
 * SPRINT 1: Sepeti ekranda göster
 *
 * Adımlar:
 * 1. #cartItemsList elementini bul
 * 2. Sepet boşsa "Sepet boş" mesajı göster
 * 3. Sepetteki her ürün için satır oluştur
 * 4. Miktar artırma/azaltma butonları ekle
 * 5. Sil butonları ekle
 *
 * Not:
 * Sepet item'ında ürün adı yoksa `products` dizisinden productId ile bulabilirsin.
 */
function displayCart() {
  // TODO: Bu fonksiyonu doldur

  const cartItemsList = document.getElementById("cartItemsList");
  const emptyMessage = document.getElementById("emptyCartMessage");

  if (!cartItemsList) {
    console.error("Sepet liste elementi bulunamadı!");
    return;
  }

  // Sepeti temizle
  cartItemsList.innerHTML = "";

  // Sepet boş kontrolü
  if (isCartEmpty()) {
    if (emptyMessage) emptyMessage.style.display = "block";
    return;
  }

  if (emptyMessage) emptyMessage.style.display = "none";

  // Her ürün için satır oluştur
  cart.forEach((item) => {
    // TODO: Sepet satırı HTML'si oluştur
    // Örnek yapı:
    /*
        <tr>
            <td>${productName}</td>
            <td>₺${item.price}</td>
            <td>
                <button class="qty-btn qty-minus" data-product-id="${item.productId}">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn qty-plus" data-product-id="${item.productId}">+</button>
            </td>
            <td>₺${item.quantity * item.price}</td>
            <td><button class="remove-btn" data-product-id="${item.productId}">Sil</button></td>
        </tr>
        */
  });

  // Toplam fiyatı güncelle
  updateTotalDisplay();
}

/**
 * SPRINT 1: Toplam fiyat ekranda güncelle
 *
 * Adımlar:
 * 1. calculateTotal() fonksiyonunu çağır
 * 2. #total elementini bul
 * 3. Tutarı güncelle
 * 4. Varsa indirim satırını da güncelle
 */
function updateTotalDisplay() {
  // TODO: Bu fonksiyonu doldur

  const total = document.getElementById("total");
  const subtotal = document.getElementById("subtotal");

  if (!total || !subtotal) {
    console.error("Toplam fiyat elemanları bulunamadı!");
    return;
  }

  // calculateTotal() çağrıp değeri göster
  // const totalAmount = calculateTotal();
  // subtotal.textContent = `₺${totalAmount.toFixed(2)}`;
}

/**
 * SPRINT 1: Sepet badge'ini güncelle (kaç ürün var)
 */
function updateCartBadge() {
  // TODO: Bu fonksiyonu doldur

  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    // Badge'i güncelleşme
    // cartCount.textContent = getCartItemCount();
  }
}

/**
 * Event listeners'ı ayarla
 *
 * Sprint 1:
 * - "Sepete Ekle" butonlarına click
 * - "-" / "+" butonlarına click
 * - "Sil" butonlarına click
 *
 * Sprint 2:
 * - Filtreleme dropdown'larına change
 * - İndirim kodu butonuna click
 * - Siparişi tamamla butonuna click
 *
 * En pratik yol:
 * - Tek bir `document.addEventListener("click", ...)` ile butonları yakala
 * - Gerekli yerlerde `event.target.closest(...)` kullan
 */
function setupEventListeners() {
  // TODO: Bu fonksiyonu doldur

  // Örnek:
  /*
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(event.target.dataset.productId);
            addToCart(productId);
            displayCart();
            updateTotalDisplay();
        }
    });
    */

  console.log("Event listeners ayarlanıyor...");
}

/*
 * Başarı mesajı göster (Toast)
 *
 * message: gösterilecek metin
 * type: "success", "error", "warning"
 */
function showMessage(message, type = "success") {
  // TODO: Mesaj göster (opsiyonel - toast notification)
  console.log(`[${type.toUpperCase()}] ${message}`);

  // Alert kullanabilirsin: alert(message);
  // Veya toast notification hazırlayabilirsin
}

/**
 * Sayfayı güncelle (tüm verileri yenile)
 */
function refreshPage() {
  displayProducts();
  displayCart();
  updateTotalDisplay();
  updateCartBadge();
}

// Sayfa yüklendiğinde çağrıl
document.addEventListener("DOMContentLoaded", function () {
  console.log("Sayfa yükleniyor...");

  // İnitialize
  refreshPage();
  setupEventListeners();
});

// Sprint 2'de daha fazla UI fonksiyonu ekleyeceksin!
