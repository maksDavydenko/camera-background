const menuBtn = document.querySelector('.menu');
const menuLine = document.querySelector('.menu__line');
const menuList = document.querySelector('.header__nav');
const disapleLine = document.querySelector('.disable-line');

const wrapContent = document.querySelector('.wrap-content');
const bgBtn = document.querySelector('#bgBtn');

(async () => {
    try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        console.log("GOT CAM");
    } catch (e) {
        console.log("GOT ERROR : " + e);
        disapleLine.style.display = 'block';
        wrapContent.style.backgroundColor = 'rgba(0, 0, 0, 1)';

        bgBtn.setAttribute("disabled", "disabled");

        alert('you camera is disabled of your device not support :(')
    }
})();

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
