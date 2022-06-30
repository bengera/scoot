class Footer extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">

    <div class="footer__top">
      <h2 class="footer__h2">Sign up and Scoot off today</h2>
      <div class="footer__buttons-container">
      <img src="src/assets/icons/app-store.svg" alt="apple-store-button" class="footer__img-app">
      <img src="src/assets/icons/google-play.svg" alt="google-play-button" class="footer__img-app">
    </div>
    </div>

    <div class="footer__bottom">

      <div class="footer__bottom-content">
      

      <ul class="footer__nav">
        <li class="footer_list-item"><a href="#" class="footer__list-link">About</a></li>
        <li class="footer__list-item"><a href="#" class="footer__list-link">Location</a></li>
        <li class="footer__list-item"><a href="#" class="footer__list-link">Careers</a></li>
      </ul>

      <div class="footer__social-container">
      <img src="src/assets/icons/facebook.svg" alt="facebook" class="footer__social-icon">
      <img src="src/assets/icons/twitter.svg" alt="twitter" class="footer__social-icon">
      <img src="src/assets/icons/instagram.svg" alt="instagram" class="footer__social-icon">
    </div>
    </div>
    </div>
 
</footer>
    `

  
  }

}

  customElements.define('footer-component', Footer);









