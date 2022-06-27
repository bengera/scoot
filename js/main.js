const hamMenu = document.querySelector('.hamburger-menu');
const navPrimary = document.querySelector('.nav-primary');

hamMenu.addEventListener('click',() => {
    console.log('toggle-menu');
    hamMenu.classList.toggle('active');
    navPrimary.classList.toggle('show');
    overlay.setAttribute("style", "display:block");

    if (hamMenu.classList.contains('active')) {
        console.log('menu-open');
        document.body.setAttribute("style", "position:fixed");

    } else {
        overlay.setAttribute("style", "display:none"); 
        document.body.setAttribute("style", "position:static");
    }
    
    
});


function scrollDownload() {
    resetMenu();
    let downloadSection = document.querySelector(".footer");
    downloadSection.scrollIntoView(true);
    
        
}


function resetMenu() {
    console.log('reset');
    document.body.setAttribute("style", "position:static");
    overlay.setAttribute("style", "display:none"); 
    navPrimary.classList.remove('show');
    

}