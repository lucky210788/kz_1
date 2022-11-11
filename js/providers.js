const btnProviders = document.querySelector('.btn-providers');
const providersBlock = document.querySelector('.providers-block');
const btnProvidersModal = document.querySelector('.providers-block-header__close');
const body = document.querySelector('body');

if(btnProviders) {
    showProwiders(btnProviders);
    showProwiders(btnProvidersModal);
}

function showProwiders(btn) {
    btn.addEventListener('click', function (){
        btnProviders.classList.toggle('btn-providers__open');
        providersBlock.classList.toggle('providers-block_open');
        body.classList.toggle('o-hidden');
    });
}
