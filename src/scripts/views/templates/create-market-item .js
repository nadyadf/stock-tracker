import DistanceCounter from '../../utils/distance-counter';

const CreateMarketItem = (market) => `
  <div class="card market">
    <div class="card-body">
<<<<<<< HEAD
      <a class="card-title" href="/#/detail_market?market_id=${market.id}">${market.market_name}</a>
      <p class="card-address">${market.address}</p>
=======
      <a class="card-title" href="/#/detail_market?market_id=${market.market_id}">${market.market_name}</a>
      <p class="card-subtitle">${market.address}</p>
>>>>>>> ec02cd269388eb807cd9910baef395fda04c2930
      <p class="card-text">${market.market_type}</p>
      <p class="card-text">${market.rating}</p>
      <p class="card-text">${DistanceCounter(market.latitude, market.longitude, 'K')}km </p>
    </div>
  </div>
`;

export default CreateMarketItem;
