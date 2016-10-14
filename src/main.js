import './styles.css';

$('.scroll-link').click((event) => {
    var anchor = $(event.currentTarget).attr('href');
    event.preventDefault();
    $('html, body').animate({ scrollTop: $( anchor ).offset().top }, 500);
});

$('.sc-btn-header, .sc-btn-redefine').click((event) => {
    event.preventDefault();
    $('html, body').animate({ scrollTop: $( '#services' ).offset().top }, 500);
});
