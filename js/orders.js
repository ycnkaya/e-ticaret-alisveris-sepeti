/**
 * ========================
 * SİPARİŞ YÖNETİMİ (orders.js)
 * ========================
 *
 * Sprint 2: Sipariş geçmişi ve yönetimi
 *
 * Görevler:
 * - Siparişleri kaydetme
 * - Sipariş geçmişini yönetme
 * - İstatistik hesaplama (reduce)
 * - Sayfalar arası veri kaybolmaması için kalıcılık sağlama
 */

// Tüm siparişleri sakla
// Not: Sipariş geçmişi ayrı sayfada gösterileceği için
// Sprint 2'de localStorage desteği eklemen beklenir.
let orders = [];

// Sipariş ID üreteç
let nextOrderId = 1;

/*
 * Yeni sipariş oluştur ve kaydet
 *
 * cartItems: Sepetteki ürünler
 * totalAmount: Toplam tutar
 * discount: Uygulanan indirim (opsiyonel)
 *
 * Sipariş yapı örneği:
 * {
 *   orderId: 1,
 *   date: "2024-06-15",
 *   items: [...],
 *   totalAmount: 1000,
 *   discountCode: "SUMMER2024",
 *   discountedAmount: 850,
 *   status: "Pending"
 * }
 */
function createOrder(cartItems, totalAmount, discount = null) {
  // TODO: Bu fonksiyonu doldur

  console.log("Yeni sipariş oluşturuluyor...");

  // 1. Sipariş objesi oluştur
  // 2. Dizi'ye ekle
  // 3. Sepeti temizle (clearCart())
  // 4. Sipariş ID'sini artır
  // 5. Siparişleri kalıcı olarak kaydet

  // Beklenen:
  // - Fonksiyon yeni sipariş objesini return etsin
  // - `items` içine yalnızca gerekli alanları kopyalayabilirsin

  return null; // Şimdilik
}

/*
 * Tüm siparişleri listele
 */
function getAllOrders() {
  return orders;
}

/*
 * Belirli bir siparişi bul
 *
 * orderId: Sipariş ID'si
 *
 * İpucu:
 * orders.find(order => order.orderId === orderId)
 */
function getOrderById(orderId) {
  // TODO: Siparişi bul
  return null;
}

/*
 * SPRINT 2: Toplam harcama hesapla (reduce)
 *
 * İPUCU: orders.reduce((sum, order) => sum + order.totalAmount, 0)
 */
function calculateTotalSpent() {
  // TODO: reduce() ile hesapla
  console.log("Toplam harcama hesaplanıyor...");
  return 0;
}

/*
 * SPRINT 2: Sipariş sayısı
 */
function getOrderCount() {
  return orders.length;
}

/*
 * SPRINT 2: Ortalama sipariş tutarı (reduce)
 */
function calculateAverageOrderAmount() {
  // TODO: Toplam / Sipariş Sayısı
  if (orders.length === 0) return 0;
  return calculateTotalSpent() / orders.length;
}

/*
 * SPRINT 2: En çok satılan ürünü bul
 *
 * İPUCU: Tüm siparişlerdeki ürünleri say ve en çok satılanı bul
 *
 * Beklenen dönüş örneği:
 * { productId: 1, name: "Laptop Pro 15", totalSold: 4 }
 */
function getTopProduct() {
  // TODO: Tüm siparişlerdeki ürünleri say
  console.log("En çok satılan ürün aranıyor...");
  return null;
}

/*
 * SPRINT 2: Kategoriye göre harcama (reduce + filter)
 *
 * Örnek çıktı:
 * { electronics: 5000, clothing: 1500, books: 300 }
 */
function getSpendingByCategory() {
  // TODO: Kategoriye göre harcama hesapla
  console.log("Kategoriye göre harcama hesaplanıyor...");
  return {};
}

/*
 * Sipariş durumunu güncelle
 *
 * orderId: Sipariş ID'si
 * newStatus: Yeni durum ("Pending", "Shipped", "Delivered", "Cancelled")
 *
 * Not:
 * Durum değişirse kalıcı veriyi de güncelle.
 */
function updateOrderStatus(orderId, newStatus) {
  // TODO: Siparişi bul ve durumunu güncelle
  console.log(`Sipariş ${orderId} durumu ${newStatus} olarak güncelleniyor...`);
}

// Sprint 2'de daha fazla fonksiyon ekleyeceksin!
