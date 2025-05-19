class Header {
  selectors = {
    root: "[data-header-js]",
    menu: "[data-menu-js]",
    burgerButton: "[data-burger-js]",
  };

  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
    mobile: "hidden-mobile",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.menuElement = this.rootElement.querySelector(this.selectors.menu);
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    );
    this.linkElement = this.rootElement.querySelectorAll(".header__link");
    this.htmlElement = document.querySelector("html");
    this.bindEvents();
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.menuElement.classList.toggle(this.stateClasses.mobile);
    this.menuElement.classList.toggle(this.stateClasses.isActive);
    this.htmlElement.classList.toggle(this.stateClasses.isLock);
    this.linkElement.forEach((item) =>
      item.addEventListener("click", this.onBurgerButtonClick)
    );
  };

  bindEvents() {
    this.burgerButtonElement.addEventListener(
      "click",
      this.onBurgerButtonClick
    );
  }
}

new Header();
