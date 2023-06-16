import 'regenerator-runtime';
// import '@popperjs/core';
// import 'bootstrap/js/dist/dropdown';
import '../styles/css/main.css';
import '../styles/scss/styles.scss';
import '../styles/css/variables.css';
import '../styles/css/responsive.css';
import '../styles/stylus/dist/styles.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './views/app';

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
