const hamMenu = document.querySelector('.hamburger-menu');
const navPrimary = document.querySelector('.nav-primary');

hamMenu.addEventListener('click',() => {
    console.log('toggle-menu');
    hamMenu.classList.toggle('active');
    navPrimary.classList.toggle('show');
    
    
});