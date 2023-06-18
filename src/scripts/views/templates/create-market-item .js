const CreateMarketItem = (market) => `
  <div class="card market">
    <div class="card-body">
      <a class="card-title" href="/#/detail_market?market_id=${market.market_id}">${market.market_name}</a>
      <p class="card-subtitle">${market.address}</p>
      <p class="card-text">${market.market_type}</p>
      <p class="card-text">${market.rating}</p>
    </div>
  </div>
`;

export default CreateMarketItem;
