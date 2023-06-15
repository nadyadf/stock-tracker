import NotFoundPage from '../views/pages/not-found-page';
import Search from '../views/pages/search';
import SearchResult from '../views/pages/search-result';

const routes = {
  404: NotFoundPage,
  '/': Search,
  '/hasil-pencarian?keyword': SearchResult,
};

export default routes;
