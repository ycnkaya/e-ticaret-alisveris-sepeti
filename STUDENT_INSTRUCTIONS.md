# E-Ticaret Sepeti Projesi - Ogrenci Talimatlari

Bu klasor, ogrenciye verilecek baslangic paketidir. Projeyi bu klasorun icindeki dosyalarla tamamlayacaksin.

Bu dosya tek basina yeterli olacak sekilde hazirlandi.
Projeye baslamadan once bunu bastan sona bir kez oku.

## 1. Bu pakette neler hazir?

Hazir gelenler:

- `index.html`, `profil.html`, `siparis-gecmisi.html`
- `css/style.css` ve `css/responsive.css`
- `js/products.js` icinde ornek urun verileri
- `js/` klasorunde tamamlaman icin birakilmis TODO'lar

Senin tamamlayacagin ana dosyalar:

- `js/cart.js`
- `js/ui.js`
- `js/user.js`
- `js/discounts.js`
- `js/orders.js`
- `js/profil.js`
- `js/siparis-gecmisi.js`

## 2. Projenin amaci

Tam islevsel bir e-ticaret arayuzu olusturacaksin:

- Urunler listelenecek
- Sepete urun eklenecek
- Sepetten urun silinecek
- Miktar artirilip azaltilacak
- Toplam tutar hesaplanacak
- Indirim kodu uygulanacak
- Siparis tamamlanacak
- Profil sayfasi calisacak
- Siparis gecmisi sayfasi calisacak

Not:

- Ayri bir `urunler.html` sayfasi yok.
- Urun listesi ana sayfa olan `index.html` icinde yer alir.

## 3. Cok onemli notlar

Bu projede en cok hata cikan yerler bunlar:

1. HTML'deki `id` ve `class` isimlerini degistirme.
2. Fonksiyon isimlerini degistirme.
3. Veri yapilarini dokumanlarda yazdigi sekilde kullan.
4. `cart.js`, `user.js`, `orders.js`, `discounts.js` veri tarafidir.
5. `ui.js`, `profil.js`, `siparis-gecmisi.js` ekrana basma tarafidir.
6. Sprint 2'de sayfalar arasi veri kaybolmamali. Bunun icin `localStorage` kullanman beklenir.

Kisa kural:

- Veri hesaplama ve guncelleme -> ilgili JS modulu
- DOM guncelleme -> `ui.js`, `profil.js`, `siparis-gecmisi.js`

## 4. Neden localStorage gerekli?

`index.html`, `profil.html` ve `siparis-gecmisi.html` ayri sayfalardir.
Sadece degisken kullanirsan sayfa degisince veriler sifirlanir.

Bu nedenle Sprint 2'de en az sunlari tarayicida saklamalisin:

- `cart`
- `user`
- `orders`
- gerekirse `appliedDiscount`

Beklenen davranis:

- Anasayfada siparis olusturuldugunda siparis gecmisinde gozukmeli
- Profilde kullanici bilgisi guncellendiginde tekrar acinca korunmali
- Siparis istatistikleri sayfa yenilense de kaybolmamali

## 5. Onerilen yapim sirasi

Asagidaki sirayla gidersen proje daha rahat tamamlanir.

## 5A. Projeyi nasil calistiracaksin?

En kolay yol:

1. `index.html` dosyasini ac
2. Mumkunse Live Server kullan
3. Tarayicida gelistirici konsolunu ac

Alternatif:

```bash
python3 -m http.server 8000
```

Sonra tarayicida `http://localhost:8000` adresine git.

### Sprint 1

1. `js/cart.js`
   - `findCartItem()`
   - `getCartItemCount()`
   - `addToCart()`
   - `removeFromCart()`
   - `updateQuantity()`
   - `calculateTotal()`
2. `js/ui.js`
   - `displayProducts()`
   - `displayCart()`
   - `updateTotalDisplay()`
   - `updateCartBadge()`
   - `setupEventListeners()`
3. `index.html` uzerinden test et

### Sprint 2

1. `js/user.js`
2. `js/discounts.js`
3. `js/orders.js`
4. `js/profil.js`
5. `js/siparis-gecmisi.js`
6. `js/ui.js` icinde filtreleme, indirim ve checkout olaylari
7. `localStorage` baglantilarini tamamla

## 6. Kullanman gereken veri yapilari

### Sepet ogesi

```javascript
{
  productId: 1,
  quantity: 2,
  price: 8999
}
```

### Kullanici

```javascript
{
  id: 1,
  firstName: "Ahmet",
  lastName: "Yilmaz",
  email: "ahmet@example.com",
  phone: "05551234567",
  address: "Istanbul, Turkiye",
  joinDate: "2024-01-15"
}
```

### Siparis

```javascript
{
  orderId: 1,
  date: "2024-06-15",
  items: [
    { productId: 1, name: "Laptop Pro 15", quantity: 1, price: 8999, category: "electronics" }
  ],
  totalAmount: 8999,
  discountCode: "SUMMER2024",
  discountedAmount: 7649.15,
  status: "Pending"
}
```

## 7. Dosya dosya ne yapacaksin?

### `js/cart.js`

Sorumluluk:

- Sepet verisini yonetmek
- Urun ekleme/silme
- Miktar guncelleme
- Toplam hesaplama

Beklenti:

- `addToCart()` stok kontrolu yapmali
- Ayni urun varsa tekrar yeni satir eklemek yerine miktar artirmali
- Miktar stoktan buyuk olamamali
- `updateQuantity()` 0'a dusurse urunu sepetten cikarmali
- `calculateTotal()` sayisal toplam dondurmeli

### `js/ui.js`

Sorumluluk:

- Urunleri ekrana basmak
- Sepeti tabloya yazmak
- Toplam tutari guncellemek
- Buton tiklamalarini yonetmek

Beklenti:

- Event delegation kullanabilirsin
- Her sepet isleminden sonra en az `displayCart()`, `updateTotalDisplay()`, `updateCartBadge()` yeniden calismali
- `checkoutBtn`, `applyDiscountBtn`, `filterBtn` icin de listener yazilmasi gerekir

### `js/user.js`

Sorumluluk:

- Kullanici verisini guncellemek
- Formatli tam ad ve tarih dondurmek
- Mumkunse `localStorage` ile saklamak

Beklenti:

- `updateUser()` user objesini guncellemeli
- `getFormattedJoinDate()` okunabilir tarih vermeli

### `js/discounts.js`

Sorumluluk:

- Indirim kodunu bulmak
- Gecerli mi, kullanildi mi kontrol etmek
- Indirimli tutari hesaplamak

Beklenti:

- Geri donus objesi anlamli olmali:

```javascript
{
  success: true,
  message: "Indirim uygulandi",
  discount: { ... }
}
```

Tasarim karari:

- Kod, siparis tamamlandiginda `used: true` yapilirsa daha dogru olur
- Sadece inputa yazildi diye tuketilmemeli

### `js/orders.js`

Sorumluluk:

- Siparis olusturmak
- Siparis listesini tutmak
- Istatistikleri hesaplamak

Beklenti:

- Siparis olusturunca sepet temizlenmeli
- `createOrder()` yeni siparisi dondurmeli
- `calculateTotalSpent()` reduce ile toplam harcamayi hesaplamali
- `getTopProduct()` en cok satilan urunu bulmali
- `orders` verisi `localStorage` ile korunmali

### `js/profil.js`

Sorumluluk:

- `user` verisini forma basmak
- Guncelleme butonunu baglamak
- Harcama ve siparis istatistiklerini gostermek

### `js/siparis-gecmisi.js`

Sorumluluk:

- Tum siparisleri listelemek
- Ozet kartlarini doldurmak
- Bos siparis durumunu gostermek

## 8. Sprint 1 bitti sayilmasi icin

Asagidaki senaryolar sorunsuz calismali:

1. Urunler ekranda listeleniyor
2. Stokta olmayan urunun butonu pasif
3. Urun sepete ekleniyor
4. Ayni urun tekrar eklenince miktari artiyor
5. `+` ve `-` butonlari calisiyor
6. `Sil` butonu calisiyor
7. Toplam fiyat dogru hesaplaniyor
8. Sepet badge sayisi guncelleniyor
9. Sepet bosken mesaj gorunuyor

## 9. Sprint 2 bitti sayilmasi icin

Asagidaki senaryolar sorunsuz calismali:

1. Profil bilgileri gorunuyor ve guncelleniyor
2. Filtreleme ve siralama calisiyor
3. Indirim kodu dogrulaniyor
4. Siparis tamamlanabiliyor
5. Siparis gecmisi sayfasinda siparisler gozukuyor
6. Profil sayfasinda istatistikler gozukuyor
7. Sayfa yenilense bile veriler kaybolmuyor

## 10. Test ederken kullan

Tarayici console'unda su testleri yap:

```javascript
getCart();
addToCart(1, 1);
addToCart(1, 1);
updateQuantity(1, 3);
removeFromCart(1);
calculateTotal();
getUser();
getAllOrders();
```

## 11. Sık yapilan hatalar

- `dataset.productId` degerini sayiya cevirmemek
- `toFixed()` sonucunu sayi sanmak
- `quantity` yerine string deger kullanmak
- DOM elementini bulamadan `innerHTML` yazmaya calismak
- Sayfa yenilenince verinin sifirlanmasini fark etmemek
- `cart` dizisinde ayni urunu birden fazla satir olarak tutmak

## 12. Teslimden once son kontrol

- Console error yok
- Tum butonlar calisiyor
- `index.html`, `profil.html`, `siparis-gecmisi.html` aciliyor
- Mobil gorunum bozulmuyor
- Kodda anlamsiz `console.log` kalmadiysa daha iyi
- `localStorage` ile veri korunuyor

## 13. Teknik gereksinimlerin kisa ozeti

### Sprint 1 zorunlu

- Urunler `products.js` verisinden dinamik olarak gosterilmeli
- `Sepete Ekle` butonu stok bitince pasif olmali
- Sepet bir dizi olarak tutulmali
- Ayni urun tekrar eklenirse miktar artmali
- `+`, `-` ve `Sil` islemleri calismali
- Toplam fiyat dogru hesaplanmali
- Sepet bosken bos mesaj gorunmeli
- Sepet badge guncellenmeli

### Sprint 2 zorunlu

- Profil bilgileri formda gozukmeli
- Profil guncelleme calismali
- Kategori ve fiyat filtreleri calismali
- Siralama secenekleri calismali:
  - `price-asc`
  - `price-desc`
  - `name-asc`
  - `name-desc`
- Indirim kodu kontrolu calismali
- Siparis tamamlanmali ve siparis gecmisi olusmali
- Toplam harcama ve ortalama siparis hesaplanmali
- Veriler sayfa yenilense de kaybolmamali

Beklenen JavaScript kullanimlari:

- `find()`
- `filter()`
- `sort()`
- `reduce()`
- spread operatoru

Degistirmemen gerekenler:

- HTML `id` ve `class` isimleri
- Dosya adlari
- Script yuklenme sirasi

## 14. Nasil degerlendirileceksin?

En cok bakilacak noktalar:

- Urun listeleme
- Sepete ekleme ve cikarma
- Miktar guncelleme
- Toplam hesaplama
- Stok kontrolu
- Profil yonetimi
- Filtreleme ve siralama
- Indirim kodlari
- Siparis yonetimi
- Istatistikler
- `localStorage` ile veri kaliciligi
- Temiz ve okunabilir kod

Puan dusurecek durumlar:

- Console error
- Calismayan buton
- Yanlis hesaplanan toplam
- Sayfa gecisinde verinin kaybolmasi
- HTML `id` veya `class` isimlerini bozmak

## 15. Hangi dosyadan baslamaliyim?

Kisa cevap:

1. Bu dosyayi bitir
2. `js/cart.js`
3. `js/ui.js`

Takildiginda:

- once bu dosyadaki ilgili bolume geri don
- sonra `js/` icindeki TODO yorumlarini takip et
- yine takilirsan egitmene sor
