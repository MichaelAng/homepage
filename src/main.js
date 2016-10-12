import './styles.css';

$('.scroll-link').click(function (event) {
    var anchor = $(this).attr('href');

    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( anchor ).offset().top
    }, 500);
});

$('.sc-btn-header, .sc-btn-redefine').click(function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( '#services' ).offset().top
    }, 500);
});
