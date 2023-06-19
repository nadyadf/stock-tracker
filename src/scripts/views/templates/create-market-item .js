import DistanceCounter from '../../utils/distance-counter';

const CreateMarketItem = (market) => `
  <div class="card market">
    <div class="card-body">
      <a class="card-title" href="/#/detail_market?market_id=${market.id}">${market.market_name}</a>
      <p class="card-address">${market.address}</p>
      <p class="card-text">${market.market_type}</p>
      <p class="card-text">${market.rating}</p>
      <p class="card-text">${DistanceCounter(market.latitude, market.longitude, 'K')}km </p>
    </div>
  </div>
`;

export default CreateMarketItem;
