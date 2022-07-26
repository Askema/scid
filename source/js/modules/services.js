const servicesBtn = document.querySelector('.services__button');
const servicesList = document.querySelector('.services__list');

if (servicesList) {
    servicesList.classList.add('services__list--hide');
}

if (servicesBtn) {
    servicesBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        servicesList.classList.remove('services__list--hide');
        servicesBtn.classList.add('services__button--none');
    });
}
