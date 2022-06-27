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
        <li class="nav-primary__list-item"><a href="#" class="nav-primary__list-link">About</a></li>
        <li class="nav-primary__list-item"><a href="#" class="nav-primary__list-link">Location</a></li>
        <li class="nav-primary__list-item"><a href="#" class="nav-primary__list-link">Careers</a></li>
      </ul>
      <button onclick="scrollDownload()" class="header__cta cta-nav">Get Scootin</button>
    </nav>
  </div>
    `

  
  }

}
  // 01 class keyword defines a class
  // 01 class declaration or expression to create a class as child of Footer
  // 02 special method of a class for creating and initializing and object instance of that class
  // 03 keyword used to access and call functions on an object's parent


  customElements.define('navigation-component', Navigation);









