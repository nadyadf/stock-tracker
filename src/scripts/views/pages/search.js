import { checkCookie } from '../../utils/cookie-helper';

const Search = {
  async render() {
    return `
      <section id="search">
        <div class="search-container">
        <h2>Temukan produk di sekitarmu!</h2>
        <div class="input-group mb-3">
          <input type="text" name="keyword" id="keyword" class="form-control" placeholder="Masukkan kata kunci [contoh: Good Day, Kopi Kapal Api]" aria-label="" aria-describedby="basic-addon2" autocomplete="off">
          <div class="input-group-append">
            <button class="bi-search btn-search" type="submit"></button>
          </div>
        </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    checkCookie();

    const successCallback = async (position) => {
      const currentLat = position.coords.latitude;
      const currentLng = position.coords.longitude;
      sessionStorage.setItem('latitude', currentLat);
      sessionStorage.setItem('longitude', currentLng);
    };

    const errorCallback = (err) => {
      console.log(err);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    document.querySelector('.bi-search').addEventListener('click', (e) => {
      e.preventDefault();
      const currentUrl = window.location.href;
      const keyword = document.querySelector('.form-control').value;
      if (keyword === '') {
        return;
      }
      window.location.replace(`${currentUrl}#/hasil_pencarian?keyword=${keyword}`);
    });
  },
};

export default Search;
