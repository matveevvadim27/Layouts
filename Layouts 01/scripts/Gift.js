class Gift {
  selectors = {
    root: "[data-js-gift]",
    imgElement: "[data-js-gift-img]",
    buttonBox: "[data-js-buttons]",
    buttons: "[data-js-button]",
  };

  stateClasses = {
    isActive: "is-active",
  };

  filterStyles = {
    1: "",
    2: "hue-rotate(112deg) saturate(50%)",
    3: "hue-rotate(177deg)",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.buttonsBoxElement = this.rootElement.querySelector(
      this.selectors.buttonBox
    );
    this.imgElement = this.rootElement.querySelector(this.selectors.imgElement);
    this.buttonElements = this.rootElement.querySelectorAll(
      this.selectors.buttons
    );
    this.bindEvents();
  }

  bindEvents() {
    this.buttonsBoxElement.addEventListener("click", (event) => {
      if (event.target.matches(this.selectors.buttons)) {
        this.buttonElements.forEach((btn) =>
          btn.classList.remove(this.stateClasses.isActive)
        );

        event.target.classList.add(this.stateClasses.isActive);

        const buttonIndex =
          event.target.dataset.index ||
          [...this.buttonElements].indexOf(event.target) + 1;

        this.imgElement.style.filter = this.filterStyles[buttonIndex] || "";
      }
    });
  }
}

export default Gift;
