import StockTrackerResource from '../../data/stocktracker-resource';
import UrlParser from '../../routes/url-parser';
import { CreateProductItem } from '../templates';
import CreateMarketDetail from '../templates/create-market-detail';

const MarketDetail = {
  async render() {
    return `
      <section class="market-detail-container">
      </section>
      <section class="product-list-container"></section>
    `;
  },

  async afterRender() {
    const marketDetailContainer = document.querySelector('.market-detail-container');
    const productListContainer = document.querySelector('.product-list-container');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { marketId } = url;
    const market = await StockTrackerResource.getMarketDetail(marketId);
    console.log(market);
    if (market[0].product_id) {
      market.forEach((product) => {
        productListContainer.innerHTML += CreateProductItem(product);
      });
    }
    marketDetailContainer.innerHTML = CreateMarketDetail(market[0]);
  },
};

export default MarketDetail;
