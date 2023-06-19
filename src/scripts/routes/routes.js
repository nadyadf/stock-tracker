import NotFoundPage from '../views/pages/not-found-page';
import ProductDetail from '../views/pages/product-detail';
import Search from '../views/pages/search';
import SearchResult from '../views/pages/search-result';
import AllMarket from '../views/pages/markets';
import Login from '../views/pages/login';

const routes = {
  404: NotFoundPage,
  '/': Search,
  '/hasil_pencarian?keyword': SearchResult,
  '/hasil_pencarian?category_id': SearchResult,
  '/detail_produk?product_id': ProductDetail,
  '/jelajah-toko': AllMarket,
  '/masuk': Login,
};

export default routes;
