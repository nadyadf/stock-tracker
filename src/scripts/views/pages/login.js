const Login = {
  async render() {
    return `
      <section class="loginContainer">
        <form action="http://localhost:8000/login" method="POST">
          <label>
            Username
            <input type="text" name="username">
          </label>
          <label>
            Password
            <input type="password" name="password">
          </label>
          <button type="submit">Masuk</buttoon>
        </form>
      </section>
    `;
  },

  async afterRender() {
    const loginContainer = document.querySelector('.loginContainer');
  },
};

export default Login;
