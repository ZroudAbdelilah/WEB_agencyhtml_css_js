//slide team//
let $owl = $('#owl-carousel-1');
$owl.children().each(function(index) {
    $(this).attr('data-position', index);
});
$owl.owlCarousel({
    center: true,
    loop: true,
    items: 3,
    nav: true,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        768: {
            items: 3
        }
    }
});
$(document).on('click', '.owl-item>div', function() {
    var $speed = 300;
    $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
});
$('.img-team').css({
    'max-height': $('.img-team').width()
});
// Slider clients
//slide team//
$owl = $('#owl-carousel-2');
$owl.children().each(function(index) {
    $(this).attr('data-position', index);
});
$owl.owlCarousel({
    center: true,
    loop: true,
    items: 3,
    nav: true,
    autoplay: true,
    dots: true,
    transitionStyle: "fade",
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        768: {
            items: 3
        }
    }
});
$(document).on('click', '.owl-item>div', function() {
    var $speed = 300;
    $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
});
$('.img-team').css({
    'max-height': $('.img-team').width()
});

function domCounter(element, number, duration) {
    let count = 0;
    const intervalDuration = duration / (number / 100)
    const interval = setInterval(() => {
        if (count <= number) {
            element.innerText = parseInt(count);
        } else {
            element.innerText = "+" + parseInt(number);
            clearInterval(interval)
        }
        const willAdd = Math.floor(Math.random() * number / 100);
        count += willAdd;
    }, intervalDuration);
}
let isCounted = false
window.addEventListener('scroll', function() {
    const learningSection = document.querySelector(".n-s-learning");
    // console.log('learningSection.getBoundingClientRect().top', learningSection.getBoundingClientRect().top);
    if (isCounted == false && (learningSection.getBoundingClientRect().top >= 0 && learningSection.getBoundingClientRect().bottom <= window.innerHeight)) {
        isCounted = true;
        domCounter($(".fa-download + a")[0], 4342);
        domCounter($(".fa-award + a")[0], 1533);
        domCounter($(".fa-heart + a")[0], 23423);
        domCounter($(".fa-star + a")[0], 1723);
    }
})