document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.ten.navbar-light');
    const brandElement = document.getElementById('brand');
    const skyTry = document.getElementsByClassName('sky');
    
    if (window.scrollY > 550) { // Change 710 to the scroll distance where you want the background to change
        navbar?.classList.add('scrolled');
        brandElement?.classList.add('scrolled');
        for (let i = 0; i < skyTry.length; i++) {
            skyTry[i].classList.add('scrolled');
        }
    } else {
        navbar?.classList.remove('scrolled');
        brandElement?.classList.remove('scrolled');
        for (let i = 0; i < skyTry.length; i++) {
            skyTry[i].classList.remove('scrolled');
        }
    }
});
