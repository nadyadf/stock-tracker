/* eslint-disable arrow-body-style */
const Hapi = require('hapi');
const knex = require('knex');

const init = async () => {
  const server = Hapi.server({
    port: 8000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/search_products',
    handler: async (request, h) => {
      const { keyword } = request.query;
      const results = await db('table_product')
        .whereILike('name', `%${keyword}%`);
      const response = h.response(results);
      return response;
    },
  });

  server.route({
    method: 'GET',
    path: '/product_categories',
    handler: async (request, h) => {
      const categories = await db('category');
      const response = h.response(categories);
      return response;
    },
  });

  server.route({
    method: 'GET',
    path: '/get_products_by_category',
    handler: async (request, h) => {
      const { categoryId } = request.query;
      const results = await db
        .from('table_product')
        .innerJoin('category', 'table_product.category_id', 'category.id')
        .where('category_id', categoryId);
      const response = h.response(results);
      return response;
    },
  });

  const db = knex({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '',
      database: 'stock_tracker',
    },
  });

  server.decorate('request', 'database', db);

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
