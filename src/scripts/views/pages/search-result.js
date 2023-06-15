import UrlParser from '../../routes/url-parser';

const SearchResult = {
  async render() {
    return `
      <section id="search-result--search">
        <div class="input-group mb-3">
          <input type="text" name="keyword" id="keyword" class="form-control" placeholder="Masukkan kata kunci [contoh: Kispray amoris, Good Day Coffee]" aria-label="" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <button class="bi-search btn-search" type="submit"></button>
          </div>
        </div>
      </section>
      <h1>Hasil Pencarian</h1>
      <section class="result"></section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { keyword } = url;
    document.querySelector('#keyword').value = keyword;
  },
};

export default SearchResult;
