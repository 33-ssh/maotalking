

// 漢堡按鈕和導覽列
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

// 漢堡按鈕點擊事件
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled'); // 如果頁面已滾動，變橘色
    } else {
        nav.classList.remove('scrolled'); // 置頂時打開漢堡按鈕保持透明
    }
});

// 滾動事件來變更背景色
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled'); // 當滾動超過 50px，背景變成橘色
        if (nav.classList.contains('active')) {
            nav.classList.add('scrolled'); // 如果漢堡打開，變橘色
        }
    } else {
        nav.classList.remove('scrolled'); // 滾回頂部時，背景恢復透明
        if (nav.classList.contains('active')) {
            nav.classList.remove('scrolled'); // 置頂時漢堡打開背景保持透明
        }
    }
});