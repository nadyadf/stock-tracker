import StockTrackerResource from '../../data/stocktracker-resource';
import { setCookie } from '../../utils/cookie-helper';

const Login = {
  async render() {
    return `
      <section class="login-container">
          <div class="col-xs-12 col-sm-6">
            <form class="omb_loginForm" action="" autocomplete="off">
              <h3 class="omb_authTitle">Masuk atau <a href="#/daftar">Daftar</a> untuk menggunakan platform</h3>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input type="text" class="form-control" id="username" name="username" placeholder="masukkan nama pengguna">
              </div>
              <span class="help-block username"></span>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                <input type="password" class="form-control" id="password" name="password" placeholder="masukkan kata sandi">
              </div>
              <button class="btn btn-lg btn-primary btn-block submit-btn">Masuk</button>
              <span class="help-block password"></span>
            </form>
          </div>
      </section>
    `;
  },

  async afterRender() {
    const responseContainer = document.querySelector('.help-block.password');
    const submitButton = document.querySelector('.submit-btn');
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    let username = '';
    let password = '';

    submitButton.addEventListener('click', async (e) => {
      e.preventDefault();

      username = usernameInput.value.trim().toString();
      password = passwordInput.value.trim().toString();
      const response = await StockTrackerResource.loginAuth(username, password);
      responseContainer.innerHTML = response.message;
      if (!response.success) {
        return;
      }
      setCookie('username', username, 5);
      window.location.replace('/');
    });
  },
};

export default Login;
