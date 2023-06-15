const Search = {
  async render() {
    return `
      <section id="search">
        <div class="search-container">
        <h2>Temukan produk di sekitarmu!</h2>
        <div class="input-group mb-3">
          <input type="text" name="keyword" id="keyword" class="form-control" placeholder="Masukkan kata kunci [contoh: Kispray amoris, Good Day Coffee]" aria-label="" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <button class="bi-search btn-search" type="submit"></button>
          </div>
        </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // const sectionContainer = document.querySelector('#search');

    document.querySelector('.bi-search').addEventListener('click', (e) => {
      e.preventDefault();
      const currentUrl = window.location.href;
      const keyword = document.querySelector('.form-control').value;
      window.location.replace(`${currentUrl}#/hasil-pencarian?keyword=${keyword}`);
    });
  },
};

export default Search;
