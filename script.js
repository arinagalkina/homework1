const menuHere = document.querySelector('.menu-here');
const menuBox = document.querySelector('.menu-box');

menuHere.addEventListener('mouseover', () => {
    menuBox.style.display = 'block';
});

menuBox.addEventListener('mouseleave', () => {
    menuBox.style.display = 'none';
});
