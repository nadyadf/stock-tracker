import DistanceCounter from '../../utils/distance-counter';

const CreateProductItem = (product) => `
  <div class="card product">
    <img class="card-img-top product-img" src="./img/products/medium/${product.image_url}" alt="${product.name}">
    <div class="card-body">
      <a class="card-title" href="/#/detail_produk?product_id=${product.product_id}">${product.name}</a>
      <p class="card-subtitle">${product.price}</p>
      <p class="card-text">Stok: ${product.stock} ${product.stock_unit}</p>
      <p class="card-text">${DistanceCounter(product.latitude, product.longitude, 'K')}km </p>
    </div>
  </div>
`;

// ${DistanceCounter(product.latitude, product.longitude, 'K')}

export default CreateProductItem;
