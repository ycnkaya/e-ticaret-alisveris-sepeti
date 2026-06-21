/**
 * ========================
 * SEPETİM IŞLEVLERI (cart.js)
 * ========================
 *
 * Sepet yönetimiyle ilgili tüm fonksiyonlar burada bulunmalıdır.
 * Bu dosya veri katmanıdır; doğrudan DOM manipülasyonu yapma.
 * UI güncellemeleri `ui.js` tarafında yapılmalıdır.
 *
 * Sprint 1 Görevleri:
 * - addToCart(): Sepete ürün ekleme
 * - removeFromCart(): Sepetten ürün çıkartma
 * - updateQuantity(): Miktar güncelleme
 * - calculateTotal(): Toplam fiyat hesaplama
 * - getCart(): Sepeti döndürme
 */

// Sepet array'i (başlangıçta boş)
// Beklenen item yapısı:
// { productId: 1, quantity: 2, price: 8999 }
let cart = [];

/*
 * SPRINT 1: Sepete ürün ekleme fonksiyonu
 *
 * productId: eklenecek ürünün ID'si
 * quantity: eklenecek miktar (varsayılan: 1)
 *
 * Beklenen davranış:
 * 1. Ürün ID'ye göre ürünü bul
 * 2. Stok kontrolü yap
 * 3. Eğer ürün zaten sepetteyse, miktarı artır
 * 4. Yok ise yeni ürün olarak ekle
 * 5. Gerekirse veriyi kaydet
 * 6. Başarı mesajını ui.js üzerinden göstermek için uygun sonuç üret
 */
function addToCart(productId, quantity = 1) {
  // TODO: Bu fonksiyonu doldur
  console.log(`Ürün ${productId} sepete ekleniyor...`);

  // 1. Ürünü bul

  // 2. Stok kontrolü yap

  // 3-4. Sepete ekle veya miktarı artır

  // 5. Kaydet / sonuç döndür
}

/*
 * SPRINT 1: Sepetten ürün çıkartma
 *
 * productId: çıkartılacak ürünün ID'si
 *
 * Beklenen davranış:
 * 1. Ürünü sepet array'ından bul ve sil
 * 2. Gerekirse veriyi kaydet
 */
function removeFromCart(productId) {
  // TODO: Bu fonksiyonu doldur
  console.log(`Ürün ${productId} sepetten çıkartılıyor...`);
}

/*
 * SPRINT 1: Sepetteki ürünün miktarını güncelleme
 *
 * productId: güncellenecek ürünün ID'si
 * newQuantity: yeni miktar
 *
 * Beklenen davranış:
 * 1. Miktarı güncelle (0'dan az olmasın)
 * 2. Eğer miktar 0 ise ürünü sil
 * 3. Miktar stoktan fazla olmasın
 * 4. Gerekirse veriyi kaydet
 */
function updateQuantity(productId, newQuantity) {
  // TODO: Bu fonksiyonu doldur
  console.log(
    `Ürün ${productId} miktarı ${newQuantity} olarak güncelleniyor...`,
  );
}

/*
 * SPRINT 1: Toplam fiyat hesaplama
 *
 * Beklenen davranış:
 * 1. Sepetteki tüm ürünlerin fiyatını hesapla
 * 2. reduce() metodu kullanmayı düşün
 * 3. Formül: (Miktar × Fiyat) toplam
 */
function calculateTotal() {
  // TODO: Bu fonksiyonu doldur
  // İPUCU: reduce() metodu ideal olur
  // cart.reduce((sum, item) => sum + (item.quantity * item.price), 0)

  console.log("Toplam hesaplanıyor...");
  return 0; // Şimdilik
}

/*
 * Sepeti döndürme
 */
function getCart() {
  return cart;
}

/*
 * Sepeti temizle
 */
function clearCart() {
  cart = [];
}

/*
 * Sepet boş mu kontrolü
 */
function isCartEmpty() {
  return cart.length === 0;
}

/*
 * Sepetteki ürün sayısı
 *
 * Not:
 * Satır sayısını değil, toplam adedi döndür.
 * Örnek: 2 farklı üründen 2 ve 3 adet varsa sonuç 5 olmalı.
 */
function getCartItemCount() {
  // TODO: Toplam miktar hesapla
  return 0;
}

/*
 * Belirli bir ürünü sepette bul
 *
 * productId: Aranan ürün ID'si
 *
 * İpucu:
 * cart.find(item => item.productId === productId)
 */
function findCartItem(productId) {
  // TODO: Cart array'inde ürünü bul
  return null;
}

// Sprint 2'de buraya daha fazla fonksiyon ekleyeceksin!
