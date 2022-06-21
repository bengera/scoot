const hamMenu = document.querySelector('.hamburger-menu');
const navPrimary = document.querySelector('.nav-primary');

hamMenu.addEventListener('click',() => {
    console.log('toggle-menu');
    hamMenu.classList.toggle('active');
    navPrimary.classList.toggle('show');
    overlay.setAttribute("style", "display:block");

    if (hamMenu.classList.contains('active')) {
        console.log('menu-open');

    } else {
        overlay.setAttribute("style", "display:none"); 
        // resetMenu(); // reset drop-downs
    }
    
    
});