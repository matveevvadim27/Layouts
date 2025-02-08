class Combo {
  selectors = {
    root: "[data-js-combo]",
    slider: "[data-js-slider]",
    sliderLine: "[data-js-slider-line]",
    slide: "[data-js-slide]",
    nextButton: "[data-js-next]",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.sliderElement = this.rootElement.querySelector(this.selectors.slider);
    this.sliderLineElement = this.rootElement.querySelector(
      this.selectors.sliderLine
    );
    this.slideElements = this.rootElement.querySelectorAll(
      this.selectors.slide
    );
    this.nextButtonElement = this.rootElement.querySelector(
      this.selectors.nextButton
    );

    this.count = 0;
    this.width = 0;

    this.init = this.init.bind(this);
    this.rollSlider = this.rollSlider.bind(this);

    window.addEventListener("resize", this.init);

    this.bindEvents();
    this.init();
  }

  init() {
    this.width = this.sliderElement.offsetWidth;
    this.sliderLineElement.style.width =
      this.width * this.slideElements.length + "px";

    this.slideElements.forEach((item) => {
      if (this.width > 1000) {
        item.style.width = this.width / 3 + "px";
      } else if (this.width < 1100 && this.width > 700) {
        item.style.width = this.width / 3 + "px";
      } else if (this.width < 700 && this.width > 450) {
        item.style.width = this.width / 2 + "px";
      } else {
        item.style.width = this.width + "px";
      }
      item.style.height = "auto";
    });

    this.count = 0;
    this.rollSlider();
  }

  rollSlider() {
    let slideWidth = this.slideElements[0].offsetWidth;
    this.sliderLineElement.style.transform =
      "translate(-" + this.count * (slideWidth + 30) + "px)";
  }

  bindEvents() {
    this.nextButtonElement.addEventListener("click", () => {
      this.count++;
      if (this.width > 1000 && this.count >= 2) {
        this.count = 0;
      } else if (this.count >= 4) {
        this.count = 0;
      }
      this.rollSlider();
    });
  }
}

export default Combo;
