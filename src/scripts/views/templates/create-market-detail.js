import DistanceCounter from '../../utils/distance-counter';

const CreateMarketDetail = (market) => `
  <div class="card product">
    <h1>${market.market_name}</h1>
    <div class="card-body">
      <p class="card-subtitle">${market.market_type}</p>
      <p class="card-text">Stok: ${market.address}</p>
      <p class="card-text">${DistanceCounter(market.latitude, market.longitude, 'K')}km </p>
    </div>
  </div>
`;

export default CreateMarketDetail;
