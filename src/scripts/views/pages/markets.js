import StockTrackerResource from '../../data/stocktracker-resource';
import CreateMarketItem from '../templates/create-market-item ';

const AllMarket = {
  async render() {
    return `
        <div class="content">
            <h3>Jelajah <span>Toko</span> !!!</h3>
            <div id="market" class="card-market"></div>
        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const markets = await StockTrackerResource.showAllMarket();
    const markContainer = document.querySelector('#market');
    markets.forEach((market) => {
      markContainer.innerHTML += CreateMarketItem(market);
    });
  },
};

export default AllMarket;
