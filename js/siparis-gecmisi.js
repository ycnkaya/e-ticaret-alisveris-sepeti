/**
 * ========================
 * SİPARİŞ GEÇMİŞİ SAYFASI (siparis-gecmisi.js)
 * ========================
 *
 * Sprint 2: Siparişleri listeleme ve istatistikler
 */

console.log("Sipariş geçmişi sayfası yükleniyor...");

// Sayfa yüklendiğinde siparişleri göster
document.addEventListener("DOMContentLoaded", function () {
  displayOrders();
  displayOrdersSummary();
});

/**
 * SPRINT 2: Tüm siparişleri listele
 *
 * Yapılacaklar:
 * 1. getAllOrders() çağrı
 * 2. Eğer siparış yoksa "Sipariş yok" mesajı göster
 * 3. Her sipariş için kart/satır oluştur
 * 4. Sipariş detaylarını göster (tarih, ürünler, toplam, durum)
 *
 * Not:
 * Bu sayfa demo veriyle değil, `getAllOrders()` ile çalışmalıdır.
 */
function displayOrders() {
  const ordersContainer = document.getElementById("ordersContainer");
  const noOrders = document.getElementById("noOrders");

  if (!ordersContainer) {
    console.error("Siparişler container bulunamadı!");
    return;
  }

  // TODO: getAllOrders() çağrı
  // const userOrders = getAllOrders();

  // Şimdilik örnek siparişler (demo amaçlı)
  // Gerçek çözümde bu satırı kaldırıp getAllOrders() sonucunu kullan.
  const userOrders = [];

  // Siparişleri temizle
  ordersContainer.innerHTML = "";

  if (userOrders.length === 0) {
    if (noOrders) noOrders.style.display = "block";
    return;
  }

  if (noOrders) noOrders.style.display = "none";

  // Her sipariş için kart oluştur
  userOrders.forEach((order) => {
    // TODO: Sipariş kartı HTML'sini oluştur

    // Örnek yapı:
    /*
        <div class="order-card">
            <h3>Sipariş #${order.orderId}</h3>
            <p>Tarih: ${order.date}</p>
            <p>Durum: ${order.status}</p>
            <p>Toplam: ₺${order.totalAmount}</p>
            <button class="view-details-btn" data-order-id="${order.orderId}">
                Detayları Gör
            </button>
        </div>
        */

    const orderHTML = `
            <div class="order-card">
                <h3>Sipariş #${order.orderId}</h3>
                <p><strong>Tarih:</strong> ${order.date}</p>
                <p><strong>Durum:</strong> <span class="status-${order.status}">${order.status}</span></p>
                <p><strong>Toplam:</strong> ₺${order.totalAmount.toFixed(2)}</p>
            </div>
        `;

    // HTML'ye ekle
    // ordersContainer.innerHTML += orderHTML;
  });
}

/**
 * SPRINT 2: Sipariş özeti istatistiklerini göster (reduce metodu)
 *
 * Yapılacaklar:
 * 1. calculateTotalSpent() - reduce ile
 * 2. getOrderCount()
 * 3. calculateAverageOrderAmount()
 * 4. getTopProduct()
 * 5. Bu değerleri HTML'deki elemanlara ekle
 */
function displayOrdersSummary() {
  // TODO: İstatistik fonksiyonlarını çağrı

  const orderCountElement = document.getElementById("summaryOrderCount");
  const totalSpentElement = document.getElementById("summaryTotalSpent");
  const avgOrderElement = document.getElementById("summaryAvgOrder");
  const topProductElement = document.getElementById("summaryTopProduct");

  // Şimdilik 0 göster (daha sonra doldurulacak)
  if (orderCountElement) orderCountElement.textContent = "0";
  if (totalSpentElement) totalSpentElement.textContent = "₺0.00";
  if (avgOrderElement) avgOrderElement.textContent = "₺0.00";
  if (topProductElement) topProductElement.textContent = "-";

  // TODO: Gerçek değerler:
  // if (orderCountElement) orderCountElement.textContent = getOrderCount();
  // if (totalSpentElement) totalSpentElement.textContent = `₺${calculateTotalSpent().toFixed(2)}`;
  // const avgAmount = calculateAverageOrderAmount();
  // if (avgOrderElement) avgOrderElement.textContent = `₺${avgAmount.toFixed(2)}`;
  // const topProduct = getTopProduct();
  // if (topProduct && topProductElement) {
  //     topProductElement.textContent = topProduct.name;
  // }
}

// Sprint 2 tamamlama noktası
