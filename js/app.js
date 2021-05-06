
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

// Typing Effect
var typed = new Typed('#typed-for-header', {
    stringsElement: '#typed-header',
    typeSpeed: 30,
    showCursor: false
});
setTimeout(() => {
    var typed = new Typed('#typed-for-sub', {
        stringsElement: '#typed-sub',
        typeSpeed: 30,
        showCursor: false
    });
}, 1000);
