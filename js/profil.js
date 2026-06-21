/**
 * ========================
 * PROFİL SAYFASI (profil.js)
 * ========================
 *
 * Sprint 2: Profil sayfası işlevleri
 */

console.log("Profil sayfası yükleniyor...");

// Sayfa yüklendiğinde profil verilerini göster
document.addEventListener("DOMContentLoaded", function () {
  displayUserProfile();
  displayUserStats();
  setupProfileEventListeners();
});

/**
 * Kullanıcı profil verilerini göster
 */
function displayUserProfile() {
  // TODO: HTML'deki input alanlarını user verisiyle doldur

  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const addressInput = document.getElementById("address");

  if (firstNameInput) firstNameInput.value = user.firstName;
  if (lastNameInput) lastNameInput.value = user.lastName;
  if (emailInput) emailInput.value = user.email;
  if (phoneInput) phoneInput.value = user.phone;
  if (addressInput) addressInput.value = user.address;
}

/**
 * SPRINT 2: Kullanıcı istatistiklerini göster (reduce kullanarak)
 *
 * Not:
 * Bu sayfa ayrı açıldığı için orders verisinin kalıcı bir kaynaktan gelmesi gerekir.
 */
function displayUserStats() {
  // TODO: calculateTotalSpent(), getOrderCount(), vb. kullan

  const totalSpentElement = document.getElementById("totalSpent");
  const orderCountElement = document.getElementById("orderCount");
  const avgOrderElement = document.getElementById("avgOrder");
  const joinDateElement = document.getElementById("joinDate");

  if (totalSpentElement) {
    // const total = calculateTotalSpent();
    // totalSpentElement.textContent = `₺${total.toFixed(2)}`;
  }

  if (orderCountElement) {
    // const count = getOrderCount();
    // orderCountElement.textContent = count;
  }

  if (avgOrderElement) {
    // const avg = calculateAverageOrderAmount();
    // avgOrderElement.textContent = `₺${avg.toFixed(2)}`;
  }

  if (joinDateElement) {
    joinDateElement.textContent = user.joinDate;
  }
}

/**
 * Profil güncellemesi event listener'ı
 */
function setupProfileEventListeners() {
  const updateBtn = document.getElementById("updateProfileBtn");

  if (updateBtn) {
    updateBtn.addEventListener("click", function () {
      // TODO: Form verilerini oku ve updateUser() çağır

      const updatedUser = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
      };

      // updateUser(updatedUser);

      // Başarı mesajı göster
      const message = document.getElementById("profileMessage");
      if (message) {
        message.textContent = "✅ Profil başarıyla güncellendi!";
        message.className = "message success";
      }
    });
  }

  // Geri Dön butonu
  const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
}

// Sprint 2 tamamlama noktası
