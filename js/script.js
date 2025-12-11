jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
$('.sliders').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    prevArrow: '<i class="fa-solid fa-chevron-left prev"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right next"></i>',
});
new VenoBox({
    selector: '.my-video-links',
});