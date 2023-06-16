const CreateSortFeatureTemplate = () => `
  <button type="button" class="btn-sort">
    Urutkan
  </button>
  <div class="sort-mini-modal">
    <h3>Urut berdasarkan</h3>
    <div class="sort-container">
      <a class="sort-item">
        <p>Harga termurah</p>
      </a>
      <a class="sort-item">
        <p>Jarak terdekat</p>
      </a>
      <a class="sort-item">
        <p>Expired terlama</p>
      </a>
      <a class="sort-item">
        <p>Stock terbanyak</p>
      </a>
    </div>
  </div>
`;

export default CreateSortFeatureTemplate;
