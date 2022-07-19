class Navigation extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
    <div class="navigation-container">

    <button class="hamburger-menu"></button>
    <img src="src/assets/logo.svg" alt="scoot logo" class="logo">

    <nav class="nav-primary">
      <ul class="nav-primary__list">
        <li class="nav-primary__list-item"><a href="/about.html" class="nav-primary__list-link">About</a></li>
        <li class="nav-primary__list-item"><a href="/location.html" class="nav-primary__list-link">Location</a></li>
        <li class="nav-primary__list-item"><a href="/careers.html" class="nav-primary__list-link">Careers</a></li>
      </ul>
      <button onclick="scrollDownload()" class="header__cta cta-nav">Get Scootin</button>
    </nav>
    <button onclick="scrollDownload()" class="header__cta cta-nav-big">Get Scootin</button>
  </div>
    `

  
  }

}


  customElements.define('navigation-component', Navigation);









