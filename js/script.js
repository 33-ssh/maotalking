window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {  // 當滾動超過50px時
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});