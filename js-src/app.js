
// Typing Effect
const length = document.querySelector('#typed-header > p').textContent.length;
const typeSpeed = 30;
const waitTime = ((typeSpeed * 1.5) * length);
$('#typed-for-header').html("");
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
    $('body').css({overflowY: "hidden"});
    $('.initial').hide();
    const $nav = $('.nav-container');
    const $close = $('.close-nav');
    const $overlay = $('.overlay');
    $overlay.addClass('overlay-show');
    $overlay.addClass('overlay-nav');
    $nav.addClass('nav-show');
    $close.addClass('close-nav-show').width(30);
    $('.close-nav').on('click', () => {
        $('body').css({overflowY: "scroll"});
        $overlay.removeClass('overlay-show');
        $overlay.removeClass('overlay-nav');
        $nav.removeClass('nav-show');
        $close.removeClass('close-nav-show').width(0);
        setTimeout(() => {
            $('.initial').show(200);
        }, 150);
    });
    $('.overlay').on('click', () => {
        $('body').css({overflowY: "scroll"});
        $overlay.removeClass('overlay-show');
        $overlay.removeClass('overlay-nav');
        $nav.removeClass('nav-show');
        $close.removeClass('close-nav-show').width(0);
        setTimeout(() => {
            $('.initial').show(200);
        }, 150);
    });
});

// Form Validation
$('.submit-btn').on('click', (e) => {

    let empty = false;

    // Array that holds all of the input fields.
    let fields = [];
    fields[0] = $('.first-name');
    fields[1] = $('.last-name');
    fields[2] = $('.email-addr');
    fields[3] = $('.email-subject');
    fields[4] = $('.email-msg');

    // Checks if any of the input fields in the array are empty and changes the colour of empty fields to red.
    for (let i = 0; i < 5; i++) {
        if (fields[i].val() === "") {
            fields[i].addClass('error-col');
            empty = true;
        }
    }

    // Do nothing if any are empty.
    if (empty) {
        e.preventDefault();
        return;
    }
});

// Enlarged Example
let enlarge = Array.prototype.slice.call(document.querySelectorAll('.enlarge-img'));
let closeEnlarge = $(".close-enlarge");
let enlargeOpening = false;

// Loop through the enlarge buttons
enlarge.forEach((button, index) => {
    button.addEventListener("click", function() {
        const container = $(".enlarged-container");
        const imageSrc = $(`.get-img-source-${index}`).attr("src");
        const $overlay = $(".overlay");
        const text = document.querySelector(`.get-text-${index}`).innerHTML;
        enlargeOpening = true;

        if (imageSrc === undefined) {
            return;
        }

        $('body').css({overflowY: "hidden"});
        $overlay.addClass("overlay-show");
        container.addClass("enlarged-show");

        $(".enlarged-src").attr("src", imageSrc);
        document.querySelector(".take-text").innerHTML = text;

        $overlay.on("click", function(){
            $('body').css({overflowY: "scroll"});
            container.removeClass("enlarged-show");
            $overlay.removeClass("overlay-show");
        })
        closeEnlarge.on("click", function(){
            $('body').css({overflowY: "scroll"});
            container.removeClass("enlarged-show");
            $overlay.removeClass("overlay-show");
        })
    })
})