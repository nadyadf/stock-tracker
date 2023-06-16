const DrawerInitiator = {
  init({
    className, button, drawer, content,
  }) {
    this._className = className;
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle(this._className);
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove(this._className);
  },
};

export default DrawerInitiator;
