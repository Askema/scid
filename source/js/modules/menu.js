const navList = document.querySelector('.nav__list');
const navButton = document.querySelector('.nav__toggle');

if (navList) {
    navList.classList.add('nav__list--closed');
}

const openMenu = function () {
    navList.classList.toggle('nav__list--closed');
    navButton.classList.toggle('nav__toggle--opened');
    navButton.classList.toggle('nav__toggle--closed');
};

if (navButton) {
    navButton.classList.add('nav__toggle--js');
    navButton.classList.add('nav__toggle--closed');

    navButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        openMenu();
    });
}
