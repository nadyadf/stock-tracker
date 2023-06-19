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
        .innerJoin('table_market', 'table_product.market_id', 'table_market.id')
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
      const results = await db('table_product')
        .innerJoin('category', 'table_product.category_id', 'category.id')
        .innerJoin('table_market', 'table_product.market_id', 'table_market.id')
        .where('category_id', categoryId);
      const response = h.response(results);
      return response;
    },
  });

  server.route({
    method: 'GET',
    path: '/sort_products_by_price',
    handler: async (request, h) => {
      const { keyword, categoryId } = request.query;
      let results = '';
      let response = '';

      if (keyword) {
        results = await db('table_product')
          .innerJoin('table_market', 'table_product.market_id', 'table_market.id')
          .whereILike('name', `%${keyword}%`)
          .orderBy('price', 'asc');
        response = h.response(results);
      } else {
        results = await db('table_product')
          .innerJoin('category', 'table_product.category_id', 'category.id')
          .innerJoin('table_market', 'table_product.market_id', 'table_market.id')
          .where('category_id', categoryId)
          .orderBy('price', 'asc');
        response = h.response(results);
      }
      return response;
    },
  });

  server.route({
    method: 'GET',
    path: '/sort_products_by_stock',
    handler: async (request, h) => {
      const { keyword, categoryId } = request.query;
      let results = '';
      let response = '';

      if (keyword) {
        results = await db('table_product')
          .innerJoin('table_market', 'table_product.market_id', 'table_market.id')
          .whereILike('name', `%${keyword}%`)
          .orderBy('stock', 'desc');
        response = h.response(results);
      } else {
        results = await db('table_product')
          .innerJoin('category', 'table_product.category_id', 'category.id')
          .innerJoin('table_market', 'table_product.market_id', 'table_market.id')
          .where('category_id', categoryId)
          .orderBy('stock', 'desc');
        response = h.response(results);
      }
      return response;
    },
  });

  server.route({
    method: 'GET',
    path: '/sort_products_by_date',
    handler: async (request, h) => {
      const { keyword, categoryId } = request.query;
      let results = '';
      let response = '';

      if (keyword) {
        results = await db('table_product')
          .innerJoin('table_market', 'table_product.market_id', 'table_market.id')
          .whereILike('name', `%${keyword}%`)
          .orderBy('expired', 'desc');
        response = h.response(results);
      } else {
        results = await db('table_product')
          .innerJoin('category', 'table_product.category_id', 'category.id')
          .innerJoin('table_market', 'table_product.market_id', 'table_market.id')
          .where('category_id', categoryId)
          .orderBy('expired', 'desc');
        response = h.response(results);
      }
      return response;
    },
  });

  server.route({
    method: 'GET',
    path: '/get_market_detail',
    handler: async (request, h) => {
      const { marketId } = request.query;
      const results = await db('table_product')
        .innerJoin('table_market', 'table_product.market_id', 'table_market.id')
        .where('market_id', marketId);
      const response = h.response(results);
      return response;
    },
  });

  server.route({
    method: 'GET',
    path: '/get_product_detail',
    handler: async (request, h) => {
      const { id } = request.query;
      const result = await db('table_product')
        .innerJoin('category', 'table_product.category_id', 'category.id')
        .where('product_id', id);
      const response = h.response(result);
      return response;
    },
  });

  server.route({
    method: 'GET',
    path: '/get_market',
    handler: async (request, h) => {
      const results = await request.database('table_market');
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
