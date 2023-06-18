const CreateCategoryLabel = (categories) => `
  <div class="category-item">
    <a href="/#/hasil_pencarian?category_id=${categories.id}">${categories.category_name}</a>
  </div>
`;

export default CreateCategoryLabel;
