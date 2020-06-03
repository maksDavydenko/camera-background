const menuBtn = document.querySelector('.menu');
const menuLine = document.querySelector('.menu__line');
const menuList = document.querySelector('.header__nav');

menuBtn.addEventListener('click', () => {
    menuLine.classList.toggle('active');
    menuList.style.height = menuList.style.height === '190px' ?
        '0' : '190px';
});
