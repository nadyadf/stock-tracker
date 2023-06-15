const NotFoundPage = {
  async render() {
    return `
      <section id="not-found">
      </section>
    `;
  },

  async afterRender() {
    const sectionContainer = document.getElementById('not-found');
    sectionContainer.innerHTML = `
      <h1>Halaman Tidak Ditemukan</h1>
    `;
  },
};

export default NotFoundPage;
