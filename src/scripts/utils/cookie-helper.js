/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */

const getCookie = (cname) => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

const checkCookie = () => {
  const user = getCookie('username');
  const loginbutton = document.querySelector('#btn-login');
  if (user) {
    loginbutton.style.display = 'none';
    return;
  }
  window.location.replace('#/masuk');
};

const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 1000));
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path:/`;
};

export { getCookie, checkCookie, setCookie };
