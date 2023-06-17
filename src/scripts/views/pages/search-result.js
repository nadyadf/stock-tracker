import StockTrackerResource from '../../data/stocktracker-resource';
import UrlParser from '../../routes/url-parser';
import DrawerInitiator from '../../utils/drawer-initiator';
import { CreateProductItem, CreateCategoryLabel, CreateSortFeatureTemplate } from '../templates';

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
      <h2 class="title-section">Hasil Pencarian: <span id="search-type"></span></h2>
      <p class="result-total"></p>
      ${CreateSortFeatureTemplate()}
      <section class="result"></section>
    `;
  },

  async afterRender() {
    DrawerInitiator.init({
      className: 'show',
      button: document.querySelector('.btn-sort'),
      drawer: document.querySelector('.sort-mini-modal'),
      content: document.querySelector('#main'),
    });

    const resultContainer = document.querySelector('.result');

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { keyword, resource, categoryId } = url;

    if (keyword) {
      const keywordWithoutEncoding = keyword.replace('%20', ' ');

      document.querySelector('#keyword-input').value = keywordWithoutEncoding;
      document.querySelector('#search-type').innerText = keywordWithoutEncoding;

      // Fetch product from database by query params
      const searchResults = await StockTrackerResource.searchProductResult(keyword);

      document.querySelector('.result-total').innerText = `Total: ${searchResults.length}`;
      searchResults.forEach((product) => {
        resultContainer.innerHTML += CreateProductItem(product);
      });
    } else {
      // Fetch product from database by category
      const searchResults = await StockTrackerResource.getProductsByCategory(categoryId);
      const firstProduct = searchResults[0];
      const categoryName = firstProduct ? firstProduct.category_name : '';

      document.querySelector('#search-type').innerText = categoryName ? `kategori ${categoryName}` : '';

      document.querySelector('.result-total').innerText = `Total: ${searchResults.length}`;
      searchResults.forEach((product) => {
        resultContainer.innerHTML += CreateProductItem(product);
      });
    }

    // Show Categories
    const categoriesContainer = document.querySelector('.categories-container');
    const categories = await StockTrackerResource.showAllCategories();
    categories.forEach((category) => {
      categoriesContainer.innerHTML += CreateCategoryLabel(category);
    });

    document.querySelector('.bi-search').addEventListener('click', (e) => {
      e.preventDefault();
      const keywordInput = document.querySelector('.form-control').value;
      window.location.replace(`/#/${resource}?keyword=${keywordInput}`);
    });

    document.querySelector('.sort-item.price').addEventListener('click', async (e) => {
      e.preventDefault();
      resultContainer.innerHTML = '';

      if (keyword) {
        const searchResults = await StockTrackerResource.sortProductsByPrice('keyword', keyword);
        document.querySelector('.result-total').innerText = `Total: ${searchResults.length}`;

        searchResults.forEach((product) => {
          resultContainer.innerHTML += CreateProductItem(product);
        });
      } else {
        const searchResults = await StockTrackerResource.sortProductsByPrice('categoryId', categoryId);
        document.querySelector('.result-total').innerText = `Total: ${searchResults.length}`;

        searchResults.forEach((product) => {
          resultContainer.innerHTML += CreateProductItem(product);
        });
      }
    });
  },
};

export default SearchResult;
