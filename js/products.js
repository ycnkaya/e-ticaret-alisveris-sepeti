/**
 * ========================
 * ÜRÜN VERİTABANI (products.js)
 * ========================
 *
 * Bu dosya tüm ürünleri tanımlar.
 * Her ürün aşağıdaki özeliklere sahip olmalıdır:
 * - id: Ürünün benzersiz kimliği
 * - name: Ürün adı
 * - category: Kategori
 * - price: Fiyat
 * - stock: Stok durumu
 * - image: Resim URL'si
 * - description: Kısa açıklama
 */

// Sprint 1: Temel ürün listesi
const products = [
  {
    id: 1,
    name: "Laptop Pro 15",
    category: "electronics",
    price: 8999,
    stock: 5,
    image: "https://via.placeholder.com/300x200?text=Laptop+Pro",
    description: "Yüksek performanslı 15 inç laptop",
  },
  {
    id: 2,
    name: "Wireless Mouse",
    category: "electronics",
    price: 149,
    stock: 25,
    image: "https://via.placeholder.com/300x200?text=Mouse",
    description: "Ergonomik kablosuz fare",
  },
  {
    id: 3,
    name: "USB-C Şarj Kablosu",
    category: "electronics",
    price: 79,
    stock: 0,
    image: "https://via.placeholder.com/300x200?text=USB+Cable",
    description: "Hızlı şarj eden USB-C kablosu",
  },
  {
    id: 4,
    name: "T-Shirt Koyu Mavi",
    category: "clothing",
    price: 249,
    stock: 50,
    image: "https://via.placeholder.com/300x200?text=T-Shirt",
    description: "Günlük giyim için rahat tişört",
  },
  {
    id: 5,
    name: "Jeans Klasik Mavi",
    category: "clothing",
    price: 599,
    stock: 30,
    image: "https://via.placeholder.com/300x200?text=Jeans",
    description: "Kaliteli ve konforlu denim jeans",
  },
  {
    id: 6,
    name: "Şapka Spor Tasarım",
    category: "clothing",
    price: 179,
    stock: 3,
    image: "https://via.placeholder.com/300x200?text=Hat",
    description: "Sporcu tarzı şapka",
  },
  {
    id: 7,
    name: "JavaScript Başlangıç",
    category: "books",
    price: 89,
    stock: 15,
    image: "https://via.placeholder.com/300x200?text=JS+Book",
    description: "JavaScript öğrenme rehberi",
  },
  {
    id: 8,
    name: "Web Tasarımı Kitabı",
    category: "books",
    price: 129,
    stock: 20,
    image: "https://via.placeholder.com/300x200?text=Design+Book",
    description: "Profesyonel web tasarımı rehberi",
  },
  {
    id: 9,
    name: "Kablosuz Kulaklık",
    category: "electronics",
    price: 1299,
    stock: 12,
    image: "https://via.placeholder.com/300x200?text=Headphones",
    description: "Gürültü saptırıcı bluetooth kulaklık",
  },
  {
    id: 10,
    name: "USB Hub",
    category: "electronics",
    price: 199,
    stock: 8,
    image: "https://via.placeholder.com/300x200?text=USB+Hub",
    description: "7 portlu USB hub",
  },
];

// ÖÖNEMLİ: Daha fazla ürün eklemek için bu array'e yeni objeler ekleyin!
