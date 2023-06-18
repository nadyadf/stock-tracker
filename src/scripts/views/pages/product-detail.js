import StockTrackerResource from '../../data/stocktracker-resource';
import UrlParser from '../../routes/url-parser';
import CreateProductDetailTemplate from '../templates/create-product-detail-template';

const ProductDetail = {
  async render() {
    return `
      <section class="product-detail-container">
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { productId } = url;
    const product = await StockTrackerResource.getProductDetail(productId);
    console.log(product);
    const detailContainer = document.querySelector('.product-detail-container');
    detailContainer.innerHTML = CreateProductDetailTemplate(product[0]);
  },
};

export default ProductDetail;
