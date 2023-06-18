const DistanceCounter = (marketLat, marketLng, unit) => {
  const currentLat = sessionStorage.getItem('latitude');
  const currentLng = sessionStorage.getItem('longitude');

  if ((currentLat === marketLat) && (currentLng === marketLng)) {
    return 0;
  } else {
    const radCurrentLat = (Math.PI * currentLat) / 180;
    const radMarketLat = (Math.PI * marketLat) / 180;
    const theta = currentLng - marketLng;
    const radTheta = (Math.PI * theta) / 180;
    let dist = Math.sin(radCurrentLat)
        * Math.sin(radMarketLat)
        + Math.cos(radCurrentLat)
        * Math.cos(radMarketLat)
        * Math.cos(radTheta);

    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515; // statute miles
    if (unit === 'K') { dist *= 1.609344; } // kilometer
    if (unit === 'N') { dist *= 0.8684; } // nautical miles
    return dist.toFixed(2);
  }
};

export default DistanceCounter;
