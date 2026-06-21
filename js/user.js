/**
 * ========================
 * KULLANICI PROFİLİ (user.js)
 * ========================
 *
 * Sprint 2: Kullanıcı bilgileri ve profil yönetimi
 *
 * Görevler:
 * - Kullanıcı objesi oluşturma
 * - Profil güncelleme
 * - Profil bilgilerini almak
 * - Sayfa yenilemelerine karşı veriyi koruma
 */

// Sprint 2: Kullanıcı profili objesi
let user = {
  id: 1,
  firstName: "Ahmet",
  lastName: "Yılmaz",
  email: "ahmet@example.com",
  phone: "05551234567",
  address: "İstanbul, Türkiye",
  joinDate: "2024-01-15",
};

/*
 * Kullanıcı bilgilerini güncelle
 *
 * updates: güncellenecek alanları içeren bir obje
 * Örnek: updateUser({ firstName: "Mehmet", email: "mehmet@example.com" })
 *
 * Beklenti:
 * - Sadece gelen alanları güncelle
 * - Mümkünse güncel user bilgisini localStorage'a yaz
 */
function updateUser(updates) {
  // TODO: User objesi güncelle
  // Spread operatör kullanmayı düşün: user = { ...user, ...updates }
  console.log("Kullanıcı güncelleniyor...");
}

/*
 * Mevcut kullanıcıyı döndür
 */
function getUser() {
  return user;
}

/*
 * Kullanıcının tam adını döndür
 */
function getUserFullName() {
  return `${user.firstName} ${user.lastName}`;
}

/*
 * Kullanıcının katılım tarihini formatlı şekilde döndür
 *
 * Örnek çıktı:
 * 15.01.2024 veya 15 Ocak 2024
 */
function getFormattedJoinDate() {
  // TODO: Tarih formatlama
  return user.joinDate;
}

// Sprint 2: Daha fazla fonksiyon ekleyeceksin!
