import ProductDetail from '../views/pages/product-detail';
import Search from '../views/pages/search';
import SearchResult from '../views/pages/search-result';
import AllMarket from '../views/pages/markets';
import MarketDetail from '../views/pages/markets-detail';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import About from '../views/pages/about';
import Faq from '../views/pages/faq';

const routes = {
  '/': Search,
  '/hasil_pencarian?keyword': SearchResult,
  '/hasil_pencarian?category_id': SearchResult,
  '/detail_produk?product_id': ProductDetail,
  '/jelajah_toko': AllMarket,
  '/detail_market?market_id': MarketDetail,
  '/masuk': Login,
  '/daftar': Register,
  '/tentang_platform': About,
  '/faq': Faq,
};

export default routes;
