import 'regenerator-runtime';
import '../styles/css/main.css';
import '../styles/scss/styles.scss';
import '../styles/css/variables.css';
import '../styles/css/responsive.css';
import '../styles/css/styles.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './views/app';

const app = new App({
  className: 'responsive',
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
