window.addEventListener('load', function() {
    new Glider(document.querySelector('.caroussel__list'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.caroussel__indicadores',
        arrows: {
            prev: '.caroussel__anterior',
            next: '.caroussel__siguiente'
        }
    })
});