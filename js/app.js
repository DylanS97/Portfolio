
// Typing Effect
const length = document.querySelector('#typed-header > p').textContent.length;
const typeSpeed = 35;
const waitTime = ((typeSpeed + 10) * length);
var typed = new Typed('#typed-for-header', {
    stringsElement: '#typed-header',
    typeSpeed: typeSpeed,
    showCursor: false
});
setTimeout(function() {
    var typed = new Typed('#typed-for-sub', {
        stringsElement: '#typed-sub',
        typeSpeed: typeSpeed,
        showCursor: false
    });
}, waitTime);

// Open and Close Navigation
$('.initial').on('click', function() {
    $('.initial').hide();
    const $nav = $('.nav-container');
    const $close = $('.close-nav');
    $nav.addClass('nav-show');
    $close.addClass('close-nav-show').width(30);
    $('.close-nav').on('click', function() {
        $nav.removeClass('nav-show');
        $close.removeClass('close-nav-show').width(0);
        setTimeout(function() {
            $('.initial').show(200);
        }, 150);
    });
});