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
        <h3>Apa itu Platform?</h3>
        <p>Platform adalah sebuah platform online yang mempermudah pengguna dalam mencari informasi persediaan produk yang dijual di sekitar dengan cepat dan akurat. Kami juga menyediakan wadah bagi penjual untuk menjangkau toko mereka secara lebih luas melalui platform kami.</p>
      </li>
      <li>
        <h3>Bagaimana cara menggunakan Platform?</h3>
        <p>Untuk menggunakan Platform, cukup kunjungi situs web kami dan gunakan fitur pencarian untuk mencari produk yang Anda inginkan. Anda juga dapat memfilter hasil berdasarkan lokasi dan melihat informasi persediaan produk yang tersedia di toko terdekat.</p>
      </li>
      <li>
        <h3>Apakah Platform menyediakan aplikasi mobile?</h3>
        <p>Ya, kami menyediakan aplikasi mobile resmi untuk Platform yang dapat diunduh secara gratis di Google Play Store dan App Store. Aplikasi mobile kami memungkinkan Anda mengakses fitur-fitur Platform secara mudah dan nyaman melalui perangkat mobile Anda.</p>
      </li>
      <li>
        <h3>Bagaimana cara menghubungi tim dukungan Platform?</h3>
        <p>Untuk menghubungi tim dukungan Platform, Anda dapat mengirimkan email ke support@platform.com atau menggunakan formulir kontak yang tersedia di situs web kami. Tim dukungan kami siap membantu menjawab pertanyaan dan masalah yang Anda hadapi.</p>
      </li>
    </ul>
    `;
  },
};

export default Faq;
