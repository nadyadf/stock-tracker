const About = {
  async render() {
    return `
    <div class="about-container">
      <section class="about">
        <h2>Apa itu Cari Dulu?</h2>
        <p>Cari Dulu adalah sebuah platform online yang mempermudah pengguna dalam mencari informasi persediaan produk yang dijual di sekitar dengan cepat dan akurat. Kami juga menyediakan wadah bagi penjual untuk menjangkau toko mereka secara lebih luas melalui platform kami.</p>
      </section>

      <section class="features">
        <h2>Fitur Utama</h2>
        <ul>
          <li><i class="bi-search"></i> Pencarian Produk</li>
          <li><i class="bi-geo-alt-fill"></i> Lokasi Toko</li>
          <li><i class="bi-tags-fill"></i> Informasi Persediaan</li>
          <li><i class="bi-chat-left-dots"></i> Ulasan Pengguna</li>
        </ul>
      </section>

      <section class="team">
        <h2>Tim Pengembang</h2>
      </section>
    </div>
    `;
  },

  async afterRender() {
    const teamContainer = document.querySelector('.team');
    teamContainer.innerHTML = `
      <div class="member">
        <img src="/img/developers/nadya-large.jpg" alt="nadyadf">
        <h3>Nadya Devi Febita</h3>
        <p>Full Stack Developer</p>
      </div>
      <div class="member">
        <img src="/img/developers/dimas-large.jpg" alt="dimasfa">
        <h3>Dimas Fany Azzuzi</h3>
        <p>Back-End Developer</p>
      </div>
      <div class="member">
        <img src="/img/developers/syanda-large.jpg" alt="syandawp">
        <h3>Syanda Whisnu Pradana</h3>
        <p>Front-end Developer</p>
      </div>
      <div class="member">
        <img src="/img/developers/aslam-large.jpg" alt="aslam">
        <h3>Aslam</h3>
        <p>Front-end Developer</p>
      </div>
    `;
  },
};

export default About;
