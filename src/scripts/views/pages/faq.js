import { checkCookie } from '../../utils/cookie-helper';

const Faq = {
  async render() {
    return `
    <section class="faq"></section>
    `;
  },

  async afterRender() {
    const faqContainer = document.querySelector('.faq');
    faqContainer.innerHTML = `
    <h2>Pertanyaan Umum</h2>
    <ul>
      <li>
        <h3>Apa itu Cari Dulu?</h3>
        <p>Cari Dulu adalah sebuah platform yang mempermudah pengguna dalam mencari informasi persediaan produk yang dijual di sekitar dengan cepat dan akurat. Platform ini juga dapat menjadi wadah bagi penjual untuk menjangkau toko mereka secara lebih luas.</p>
      </li>
      <li>
        <h3>Bagaimana cara menggunakan Cari Dulu?</h3>
        <p>Untuk menggunakan Platform, cukup kunjungi situs web kami dan gunakan fitur pencarian yang tersedia pada halaman utama untuk mencari produk yang Anda inginkan. Anda juga dapat memfilter hasil berdasarkan lokasi terdekat, stok terbanyak dan kadaluarsa produk terlama. Selain itu Anda juga dapat menampilkannya berdasarkan harga termurah.</p>
      </li>
      <li>
        <h3>Apakah Cari Dulu menyediakan fitur pembelian langsung?</h3>
        <p>Tidak, Cari Dulu hanya menyediakan informasi tentang stok barang di toko-toko terdaftar. Untuk melakukan pembelia, Anda perlu mengunjungi toko yang bersangkutan.</p>
      </li>
      <li>
        <h3>Bagaimana keakuratan informasi stok di Cari Dulu</h3>
        <p>Informasi stok yang ditampilkan di Cari Dulu diperbarui secara berkala oleh para penjual. Namun, keakuratan stok dapat bervariasi tergantung pada pembaruan yang dilakukan oleh penjual.</p>
      </li>
      <li>
        <h3>Apakah ada biaya yang harus dibayarkan untuk menggunakan Cari Dulu?</h3>
        <p>Tidak, Cari Dulu adalah platform yang gratis untuk digunakan oleh penjual maupun pembeli.</p>
      </li>
      <li>
        <h3>Apakah Cari Dulu memiliki fitur ulasan toko atau produk?</h3>
        <p>Cari Dulu saat ini belum menyediakan fitur ulasan toko atau produk. Namun, kami sedang mempertimbangkan untuk menghadirkannya di masa mendatang.</p>
      </li>
    </ul>
    `;

    checkCookie();
  },
};

export default Faq;
