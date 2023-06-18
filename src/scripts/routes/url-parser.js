const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    // console.log(url);
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1);
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    const resource = urlsSplits[1];

    return {
      resource: resource ? resource.split('?')[0].toLowerCase() : null,
      keyword: resource ? resource.split('?keyword=')[1] : null,
      categoryId: resource ? resource.split('?category_id=')[1] : null,
      productId: resource ? resource.split('?product_id=')[1] : null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
    + (splitedUrl.keyword ? '?keyword' : '')
    + (splitedUrl.categoryId ? '?category_id' : '')
    + (splitedUrl.productId ? '?product_id' : '');
  },
};

export default UrlParser;
