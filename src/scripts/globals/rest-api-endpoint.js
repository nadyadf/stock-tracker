import CONFIG from './config';

const REST_API_ENDPOINT = {
  SEARCH_PRODUCTS: (keyword) => `${CONFIG.BASE_URL}search_products?keyword=${keyword}`,
  PRODUCT_CATEGORIES: `${CONFIG.BASE_URL}product_categories`,
};

export default REST_API_ENDPOINT;