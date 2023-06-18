import CONFIG from './config';

const REST_API_ENDPOINT = {
  SEARCH_PRODUCTS: (keyword) => `${CONFIG.BASE_URL}search_products?keyword=${keyword}`,
  PRODUCT_CATEGORIES: `${CONFIG.BASE_URL}product_categories`,
  PRODUCTS_BY_CATEGORY: (categoryId) => `${CONFIG.BASE_URL}get_products_by_category?categoryId=${categoryId}`,
  SORT_PRODUCTS_BY_PRICE: (searchType, value) => `${CONFIG.BASE_URL}sort_products_by_price?${searchType}=${value}`,
  SORT_PRODUCTS_BY_STOCK: (searchType, value) => `${CONFIG.BASE_URL}sort_products_by_stock?${searchType}=${value}`,
  SORT_PRODUCTS_BY_DATE: (searchType, value) => `${CONFIG.BASE_URL}sort_products_by_date?${searchType}=${value}`,
  GET_PRODUCT_DETAIL: (id) => `${CONFIG.BASE_URL}get_product_detail?id=${id}`,
  GET_MARKET: `${CONFIG.BASE_URL}get_market`,
};

export default REST_API_ENDPOINT;
