class Header {
  selectors = {
    root: "[data-js-header]",
    overlay: "[data-js-overlay]",
    burgerButton: "[data-js-burger]",
    videoElement: "[data-js-video]",
    playButton: "[data-js-play-button]",
  };

  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
    isPlay: "playing",
    isHidden: "hidden",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement.querySelector(
      this.selectors.overlay
    );
    this.burgerButonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    );
    this.videoElement = this.rootElement.querySelector(
      this.selectors.videoElement
    );
    this.playButtonElement = this.rootElement.querySelector(
      this.selectors.playButton
    );
    this.bindEvents();
  }

  onBurgerButtonClick = () => {
    this.burgerButonElement.classList.toggle(this.stateClasses.isActive);
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  };

  playVideo = () => {
    try {
      this.videoElement.play();
      this.playButtonElement.classList.add(this.selectors.isPlay);
      this.playButtonElement.classList.add(this.stateClasses.isHidden);
    } catch (err) {
      this.playButtonElement.classList.remove(this.selectors.isPlay);
      console.error("Ошибка воспроизведения видео:", err);
    }
  };

  pauseVideo = () => {
    this.videoElement.pause();
    this.playButtonElement.classList.remove(this.stateClasses.isPlay);
    this.playButtonElement.classList.remove(this.stateClasses.isHidden);
  };

  toggleVideoPlayback = () => {
    if (this.videoElement.paused) {
      this.playVideo();
    } else {
      this.pauseVideo();
    }
  };

  onPlayButton = () => {
    this.toggleVideoPlayback();
  };

  onVideoClick = () => {
    this.toggleVideoPlayback();
  };

  bindEvents() {
    this.burgerButonElement.addEventListener("click", this.onBurgerButtonClick);
    this.playButtonElement.addEventListener("click", this.onPlayButton);
    this.videoElement.addEventListener("click", this.onVideoClick);
  }
}
export default Header;
