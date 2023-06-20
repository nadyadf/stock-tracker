import StockTrackerResource from '../../data/stocktracker-resource';
import CreateMarketItem from '../templates/create-market-item ';

const AllMarket = {
  async render() {
    return `
        <section class="result">
        </section>
      `;
  },

  async afterRender() {
    const markets = await StockTrackerResource.showAllMarket();
    const markContainer = document.querySelector('.result');
    markets.forEach((market) => {
      markContainer.innerHTML += CreateMarketItem(market);
    });
  },
};

export default AllMarket;
