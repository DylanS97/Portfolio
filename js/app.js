// Open and Close Navigation
$('.initial').on('click', () => {
    $('.initial').hide();
    const $nav = $('.nav-container');
    const $close = $('.close-nav');
    $nav.addClass('nav-show');
    $close.addClass('close-nav-show').width(30);
    $('.close-nav').on('click', () => {
        $nav.removeClass('nav-show');
        $close.removeClass('close-nav-show').width(0);
        $('.initial').show(300);
    });
});

