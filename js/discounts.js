/**
 * ========================
 * İNDİRİM KODLARI (discounts.js)
 * ========================
 *
 * Sprint 2: İndirim kodları yönetimi
 *
 * Görevler:
 * - İndirim kodlarını tanımla
 * - Kod doğrulama
 * - İndirim hesaplaması
 * - Tek kullanım mantığını doğru yönetme
 */

// Sprint 2: İndirim kodları array'i
const discounts = [
  {
    code: "ILKYASAYISI20",
    percentage: 20,
    description: "İlk alışveriş için %20 indirim",
    valid: true,
    used: false,
  },
  {
    code: "SUMMER2024",
    percentage: 15,
    description: "Yaz kampanyası - %15 indirim",
    valid: true,
    used: false,
  },
  {
    code: "FREESHIP",
    percentage: 10,
    description: "Ücretsiz kargo için %10 indirim",
    valid: true,
    used: false,
  },
  {
    code: "EXPIRED2023",
    percentage: 30,
    description: "Süresi geçmiş kod",
    valid: false,
    used: false,
  },
];

// Mevcut uygulanan indirim kodu
let appliedDiscount = null;

/*
 * İndirim kodu doğrula ve uygula
 *
 * code: girilmiş indirim kodu
 *
 * Kontroller:
 * 1. Kod var mı?
 * 2. Kod geçerli mi?
 * 3. Kod daha önce kullanıldı mı?
 * 4. Tüm kontroller geçerse, kodu uygula
 *
 * Beklenen geri dönüş örneği:
 * { success: true, message: "İndirim uygulandı", discount: foundDiscount }
 */
function validateAndApplyDiscount(code) {
  // TODO: Bu fonksiyonu doldur

  console.log(`İndirim kodu doğrulanıyor: ${code}`);

  // 1. Kodu bul
  // const foundDiscount = discounts.find(d => d.code === code);

  // 2-4. Kontroller ve uygulama

  // Henüz başarısız döndür
  return {
    success: false,
    message: "Geçersiz indirim kodu",
    discount: null,
  };
}

/*
 * Mevcut indirim bilgisi
 */
function getAppliedDiscount() {
  return appliedDiscount;
}

/*
 * İndirim tutarını hesapla
 *
 * amount: orijinal tutar
 *
 * Formul: amount × (1 - (percentage / 100))
 *
 * Örnek:
 * 1000 TL ve %15 indirim -> 850 TL
 */
function calculateDiscountedAmount(amount) {
  if (!appliedDiscount) return amount;

  // TODO: İndirim hesabı yap
  console.log(
    `İndirim hesaplanıyor: ${amount} TL üzerinden %${appliedDiscount.percentage}`,
  );

  return amount;
}

/*
 * İndirim tutarını al
 *
 * amount: orijinal tutar
 */
function getDiscountAmount(amount) {
  if (!appliedDiscount) return 0;

  // TODO: İndirim tutarını hesapla
  const discounted = calculateDiscountedAmount(amount);
  return amount - discounted;
}

/**
 * İndirim kodunu iptal et
 *
 * Not:
 * `used: true` işaretini kod input'a yazıldığı anda değil,
 * sipariş gerçekten tamamlandığında vermek daha doğru olur.
 */
function removeDiscount() {
  appliedDiscount = null;
}

/*
 * Tüm indirim kodlarını listele (Admin için)
 */
function listAllDiscounts() {
  return discounts;
}

// Sprint 2'de daha fazla fonksiyon ekleyeceksin!
