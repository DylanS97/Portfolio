"use strict";

// Typing Effect
var length = document.querySelector('#typed-header > p').textContent.length;
var typeSpeed = 35;
var waitTime = (typeSpeed + 10) * length;
$('#typed-for-header').html("");
var typed = new Typed('#typed-for-header', {
  stringsElement: '#typed-header',
  typeSpeed: typeSpeed,
  showCursor: false
});
setTimeout(function () {
  var typed = new Typed('#typed-for-sub', {
    stringsElement: '#typed-sub',
    typeSpeed: typeSpeed,
    showCursor: false
  });
}, waitTime); // Open and Close Navigation

$('.initial').on('click', function () {
  $('body').css({
    overflowY: "hidden"
  });
  $('.initial').hide();
  var $nav = $('.nav-container');
  var $close = $('.close-nav');
  var $overlay = $('.overlay');
  $overlay.addClass('overlay-show');
  $nav.addClass('nav-show');
  $close.addClass('close-nav-show').width(30);
  $('.close-nav').on('click', function () {
    $('body').css({
      overflowY: "scroll"
    });
    $overlay.removeClass('overlay-show');
    $nav.removeClass('nav-show');
    $close.removeClass('close-nav-show').width(0);
    setTimeout(function () {
      $('.initial').show(200);
    }, 150);
  });
  $('.overlay').on('click', function () {
    $('body').css({
      overflowY: "scroll"
    });
    $overlay.removeClass('overlay-show');
    $nav.removeClass('nav-show');
    $close.removeClass('close-nav-show').width(0);
    setTimeout(function () {
      $('.initial').show(200);
    }, 150);
  });
}); // Form Validation

$('.submit-btn').on('click', function () {
  var empty = false; // Array that holds all of the input fields.

  var fields = [];
  fields[0] = $('.first-name');
  fields[1] = $('.last-name');
  fields[2] = $('.email-addr');
  fields[3] = $('.email-subject');
  fields[4] = $('.email-msg'); // Checks if any of the input fields in the array are empty and changes the colour of empty fields to red.

  for (var i = 0; i < 5; i++) {
    if (fields[i].val() === "") {
      fields[i].addClass('error-col');
      empty = true;
    }
  } // Do nothing if any are empty.


  if (empty) {
    return;
  }
}); // Enlarged Example

var enlarge = Array.prototype.slice.call(document.querySelectorAll('.enlarge-img'));
var closeEnlarge = $(".close-enlarge");
var enlargeOpening = false; // Loop through the enlarge buttons

enlarge.forEach(function (button, index) {
  button.addEventListener("click", function () {
    var container = $(".enlarged-container");
    var imageSrc = $(".get-img-source-".concat(index)).attr("src");
    var $overlay = $(".overlay");
    enlargeOpening = true;

    if (imageSrc === undefined) {
      return;
    }

    $overlay.addClass("overlay-show");
    container.addClass("enlarged-show");
    $(".enlarged-src").attr("src", imageSrc);
    closeEnlarge.on("click", function () {
      container.removeClass("enlarged-show");
      $overlay.removeClass("overlay-show");
    });
  });
}); // Accordion

var columns = Array.prototype.slice.call(document.querySelectorAll(".column"));
var previous; // Loop through the columns.

columns.forEach(function (column, index) {
  column.addEventListener("click", function () {
    var width = window.innerWidth;

    if (width > 768 || enlargeOpening) {
      enlargeOpening = false;
      return;
    }

    var accord = column.querySelector(".accordion");
    columns.forEach(function (col) {
      var removeAccord = col.querySelector(".accordion");

      if (column !== col) {
        $(removeAccord).slideUp(300);
      }
    });
    $(accord).slideDown(300);

    if (previous === accord) {
      $(accord).slideUp(300);
      previous = null;
      return;
    }

    previous = accord;
  });
});