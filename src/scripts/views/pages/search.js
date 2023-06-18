const Search = {
  async render() {
    return `
      <section id="search">
        <div class="search-container">
        <h2>Temukan produk di sekitarmu!</h2>
        <div class="input-group mb-3">
          <input type="text" name="keyword" id="keyword" class="form-control" placeholder="Masukkan kata kunci [contoh: Kispray amoris, Good Day Coffee]" aria-label="" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <button class="bi-search btn-search" type="submit"></button>
          </div>
        </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
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

  // _distance(currentLat, currentLng, unit) {
  //   const destinationLat = -6.991197;
  //   const destinationLng = 110.423756;

  //   if ((currentLat === destinationLat) && (currentLng === destinationLng)) {
  //     return 0;
  //   } else {
  //     const radCurrentLat = (Math.PI * currentLat) / 180;
  //     const radDestinationLat = (Math.PI * destinationLat) / 180;
  //     const theta = currentLng - destinationLng;
  //     const radTheta = (Math.PI * theta) / 180;
  //     let dist = Math.sin(radCurrentLat)
  //       * Math.sin(radDestinationLat)
  //       + Math.cos(radCurrentLat)
  //       * Math.cos(radDestinationLat)
  //       * Math.cos(radTheta);

  //     if (dist > 1) {
  //       dist = 1;
  //     }
  //     dist = Math.acos(dist);
  //     dist = (dist * 180) / Math.PI;
  //     dist = dist * 60 * 1.1515;
  //     if (unit === 'K') { dist *= 1.609344; }
  //     if (unit === 'N') { dist *= 0.8684; }
  //     return dist;
  //   }
  // },
};

export default Search;
