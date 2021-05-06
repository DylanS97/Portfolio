
// Typing Effect
const length = document.querySelector('#typed-header > p').textContent.length;
const typeSpeed = 35;
const waitTime = ((typeSpeed + 10) * length);
var typed = new Typed('#typed-for-header', {
    stringsElement: '#typed-header',
    typeSpeed: typeSpeed,
    showCursor: false
});
setTimeout(() => {
    var typed = new Typed('#typed-for-sub', {
        stringsElement: '#typed-sub',
        typeSpeed: typeSpeed,
        showCursor: false
    });
}, waitTime);

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
        setTimeout(() => {
            $('.initial').show(200);
        }, 150);
    });
});
