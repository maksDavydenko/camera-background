const menuBtn = document.querySelector('.menu');
const menuLine = document.querySelector('.menu__line');
const menuList = document.querySelector('.header__nav');
const disapleLine = document.querySelector('.disable-line');

const wrapContent = document.querySelector('.wrap-content');
const bgBtn = document.querySelector('#bgBtn');

menuBtn.addEventListener('click', () => {
    menuLine.classList.toggle('active');
    menuList.style.height = menuList.style.height === '180px' ?
        '0' : '180px';
});

bgBtn.addEventListener('click', () => {
    if (wrapContent.style.backgroundColor !== 'rgb(0, 0, 0)') {
        wrapContent.style.backgroundColor = 'rgba(0, 0, 0, 1)'
        disapleLine.style.display = 'block';
    }
    else {
        wrapContent.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        disapleLine.style.display = 'none';

    }

})
