import StockTrackerResource from '../../data/stocktracker-resource';
import UrlParser from '../../routes/url-parser';
import { CreateProductItem, CreateCategoryLabel, CreateDropdownFilter } from '../templates';

const SearchResult = {
  async render() {
    return `
      <section class="categories">
        <h2>Kategori</h2>
        <div class="categories-container"></div>
      </section>
      <section id="search-result--search">
        <div class="input-group mb-3">
          <input type="text" name="keyword" id="keyword-input" class="form-control" placeholder="Masukkan kata kunci [contoh: Kispray amoris, Good Day Coffee]" aria-label="" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <button class="bi-search btn-search" type="submit"></button>
          </div>
        </div>
      </section>
      <h2>Hasil Pencarian: <span id="keyword"></span></h2>
      <p class="result-total"></result>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
        </div>
      <section class="result"></section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { keyword, resource } = url;
    const keywordWithoutEncoding = keyword.replace('%20', ' ');

    // Show Categories
    const categoriesContainer = document.querySelector('.categories-container');
    const categories = await StockTrackerResource.showAllCategories();
    categories.forEach((category) => {
      categoriesContainer.innerHTML += CreateCategoryLabel(category);
    });

    document.querySelector('#keyword-input').value = keywordWithoutEncoding;
    document.querySelector('#keyword').innerText = keywordWithoutEncoding;

    // Fetch Product Data from Database
    const searchResults = await StockTrackerResource.searchProductResult(keyword);
    console.log(searchResults);
    const resultContainer = document.querySelector('.result');
    document.querySelector('.result-total').innerText = `Total: ${searchResults.length}`;
    searchResults.forEach((product) => {
      resultContainer.innerHTML += CreateProductItem(product);
    });

    document.querySelector('.bi-search').addEventListener('click', (e) => {
      e.preventDefault();
      const keywordInput = document.querySelector('.form-control').value;
      window.location.replace(`/#/${resource}?keyword=${keywordInput}`);
    });
  },
};

export default SearchResult;
