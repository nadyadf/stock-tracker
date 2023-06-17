import REST_API_ENDPOINT from '../globals/rest-api-endpoint';

class StockTrackerResource {
  static async searchProductResult(keyword) {
    const response = await fetch(REST_API_ENDPOINT.SEARCH_PRODUCTS(keyword));
    const responseJson = await response.json();
    return responseJson;
  }

  static async showAllCategories() {
    const response = await fetch(REST_API_ENDPOINT.PRODUCT_CATEGORIES);
    const responseJson = await response.json();
    return responseJson;
  }

  static async getProductsByCategory(categoryId) {
    const response = await fetch(REST_API_ENDPOINT.PRODUCTS_BY_CATEGORY(categoryId));
    const responseJson = await response.json();
    return responseJson;
  }

  static async sortProductsByPrice(searchType, value) {
    const response = await fetch(REST_API_ENDPOINT.SORT_PRODUCTS_BY_PRICE(searchType, value));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default StockTrackerResource;
