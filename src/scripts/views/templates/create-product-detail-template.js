import sqlDateTimeConverter from '../../utils/sql-datetime-converter';

const CreateProductDetailTemplate = (product) => `
  <div>
    <button class="save" type="button">
      <i class="bi bi-bookmarks"></i>
      Simpan produk
    </button>
    <img src="./img/products/large/${product.image_url}">
    <h3>${product.name}</h3>
    <p>Stok: ${product.stock}</p>
    <p>Kategori: ${product.category_name}</p>
    <p>Harga: ${product.price}</p>
    <p>Expired: ${sqlDateTimeConverter(product.expired)}</p>
    <p>Description: ${product.description}</p>
    <p>Rating: ${product.rating}</p>
  </div>
`;

export default CreateProductDetailTemplate;
