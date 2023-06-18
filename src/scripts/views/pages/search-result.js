import StockTrackerResource from '../../data/stocktracker-resource';
import UrlParser from '../../routes/url-parser';
import DrawerInitiator from '../../utils/drawer-initiator';
import {
  CreateProductItem, CreateCategoryLabel, CreateSortFeatureTemplate,
} from '../templates';

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
      <h2 class="title-section">Hasil Pencarian: <span id="search-key"></span></h2>
      <p class="result-total"></p>
      ${CreateSortFeatureTemplate()}
      <section class="result"></section>
    `;
  },

  async afterRender() {
    // Initialization
    DrawerInitiator.init({
      className: 'show',
      button: document.querySelector('.btn-sort'),
      drawer: document.querySelector('.sort-mini-modal'),
      content: document.querySelector('#main'),
    });
    const categoriesContainer = document.querySelector('.categories-container');
    const resultContainer = document.querySelector('.result');
    const searchInput = document.querySelector('#keyword-input');
    const btnSearch = document.querySelector('.bi-search');
    const searchKeyTitle = document.querySelector('#search-key');
    const resultTotal = document.querySelector('.result-total');
    const sortItemElements = document.querySelectorAll('.sort-item');

    let searchResults = '';

    // Show Categories
    const categories = await StockTrackerResource.showAllCategories();
    categories.forEach((category) => {
      categoriesContainer.innerHTML += CreateCategoryLabel(category);
    });

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { keyword, resource, categoryId } = url;

    if (keyword) {
      const keywordWithoutEncoding = keyword.replace('%20', ' ');

      searchInput.value = keywordWithoutEncoding;
      searchKeyTitle.innerText = keywordWithoutEncoding;

      // Fetch product from database by query params
      searchResults = await StockTrackerResource.searchProductResult(keyword);

      resultTotal.innerText = `Total: ${searchResults.length}`;
      searchResults.forEach((product) => {
        resultContainer.innerHTML += CreateProductItem(product);
      });
    } else {
      // Fetch product from database by category
      searchResults = await StockTrackerResource.getProductsByCategory(categoryId);
      const firstProduct = searchResults[0];
      const categoryName = firstProduct ? firstProduct.category_name : '';

      searchKeyTitle.innerText = categoryName ? `kategori ${categoryName}` : '';

      resultTotal.innerText = `Total: ${searchResults.length}`;
      searchResults.forEach((product) => {
        resultContainer.innerHTML += CreateProductItem(product);
      });
    }

    btnSearch.addEventListener('click', (e) => {
      e.preventDefault();
      const keywordInputValue = searchInput.value;
      window.location.replace(`/#/${resource}?keyword=${keywordInputValue}`);
    });

    // Sort by price button
    sortItemElements[0].addEventListener('click', async (e) => {
      e.preventDefault();
      resultContainer.innerHTML = '';

      if (keyword) {
        searchResults = await StockTrackerResource.sortProductsByPrice('keyword', keyword);
        resultTotal.innerText = `Total: ${searchResults.length}`;

        searchResults.forEach((product) => {
          resultContainer.innerHTML += CreateProductItem(product);
        });
      } else {
        searchResults = await StockTrackerResource.sortProductsByPrice('categoryId', categoryId);
        resultTotal.innerText = `Total: ${searchResults.length}`;

        searchResults.forEach((product) => {
          resultContainer.innerHTML += CreateProductItem(product);
        });
      }
    });

    // Sort by date button
    sortItemElements[2].addEventListener('click', async (e) => {
      e.preventDefault();
      resultContainer.innerHTML = '';

      if (keyword) {
        searchResults = await StockTrackerResource.sortProductsByDate('keyword', keyword);
        resultTotal.innerText = `Total: ${searchResults.length}`;

        searchResults.forEach((product) => {
          resultContainer.innerHTML += CreateProductItem(product);
        });
      } else {
        searchResults = await StockTrackerResource.sortProductsByDate('categoryId', categoryId);
        resultTotal.innerText = `Total: ${searchResults.length}`;

        searchResults.forEach((product) => {
          resultContainer.innerHTML += CreateProductItem(product);
        });
      }
    });

    // Sort by stock button
    sortItemElements[3].addEventListener('click', async (e) => {
      e.preventDefault();
      resultContainer.innerHTML = '';

      if (keyword) {
        searchResults = await StockTrackerResource.sortProductsByStock('keyword', keyword);
        resultTotal.innerText = `Total: ${searchResults.length}`;

        searchResults.forEach((product) => {
          resultContainer.innerHTML += CreateProductItem(product);
        });
      } else {
        searchResults = await StockTrackerResource.sortProductsByStock('categoryId', categoryId);
        resultTotal.innerText = `Total: ${searchResults.length}`;

        searchResults.forEach((product) => {
          resultContainer.innerHTML += CreateProductItem(product);
        });
      }
    });
  },
};

export default SearchResult;
