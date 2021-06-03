
// Typing Effect
const length = document.querySelector('#typed-header > p').textContent.length;
const typeSpeed = 35;
const waitTime = ((typeSpeed + 10) * length);
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
    $nav.addClass('nav-show');
    $close.addClass('close-nav-show').width(30);
    $('.close-nav').on('click', () => {
        $('body').css({overflowY: "scroll"});
        $overlay.removeClass('overlay-show');
        $nav.removeClass('nav-show');
        $close.removeClass('close-nav-show').width(0);
        setTimeout(() => {
            $('.initial').show(200);
        }, 150);
    });
    $('.overlay').on('click', () => {
        $('body').css({overflowY: "scroll"});
        $overlay.removeClass('overlay-show');
        $nav.removeClass('nav-show');
        $close.removeClass('close-nav-show').width(0);
        setTimeout(() => {
            $('.initial').show(200);
        }, 150);
    });
});

// Form Validation
$('.submit-btn').on('click', () => {
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
        return;
    }
});


// Accordion
let columns = Array.prototype.slice.call(document.querySelectorAll('.column'));
let previous;

// Loop through the columns.
columns.forEach((column, index) => {
    column.addEventListener("click", function() {
        let width = window.innerWidth;
        if (width > 380) {
            return;
        }
        let accord = column.querySelector('.accordion');
        columns.forEach((col) => {
            let removeAccord = col.querySelector('.accordion');
            if (column !== col) {
                $(removeAccord).slideUp(300);
            }
        })

        $(accord).slideDown(300);

        if (previous === accord) {
            $(accord).slideUp(300);
            previous = null;
            return;
        }

        previous = accord;
    })
})
