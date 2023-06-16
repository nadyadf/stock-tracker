const CreateProductItem = (product) => `
  <div class="card product">
    <img class="card-img-top product-img" src="./img/products/medium/${product.image_url}" alt="${product.name}">
    <div class="card-body">
      <a class="card-title" href="#">${product.name}</a>
      <p class="card-subtitle">${product.price}</p>
      <p class="card-text">Stock: ${product.stock}</p>
    </div>
  </div>
`;

export default CreateProductItem;
