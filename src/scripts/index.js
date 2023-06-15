import 'regenerator-runtime';
import '../styles/css/main.css';
import '../styles/scss/styles.scss';
import '../styles/css/variables.css';
import '../styles/stylus/dist/styles.css';
// import * as bootstrap from 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './views/app';
// import * as mdb from 'mdb-ui-kit';

// window.mdb = mdb;
// import AOS from 'aos/dist/aos';

// AOS.init();

const app = new App({
  button: document.querySelector('#app-bar--toggler'),
  drawer: document.querySelector('#app-bar'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
