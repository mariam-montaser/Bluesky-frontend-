$(document).ready(function () {
    'use strict';

    // sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('nav').addClass('sticky');
            $('#logo').attr('src', './images/logo/logoLight.png');
            // $('header').css('padding-top', '200px');
        } else {
            $('nav').removeClass('sticky');
            $('#logo').attr('src', './images/logo/logoDark.png');
            //$('header').css('padding-top', '0');
        }
    });

    // navbar menu
    $('.nav-menu').on('click', function () {
        $('.nav-content').fadeIn(300).addClass('slide');
        $(this).fadeOut();
    });
    //close navbar menu
    $('.nav-content .close').on('click', function () {
        $('.nav-content').hide().removeClass('slide');
        $('.nav-menu').fadeIn();
    });

    //connected section
    $('.nav-content li a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('target')).offset().top - 90
        }, 700);
        $('.nav-content li').removeClass('active');
        $(this).parent('li').addClass('active');
    });

    //search-box popup
    $('.nav-content .search-icon').on("click", function () {
        $('.' + $(this).data('pop')).fadeIn();
    })

    $('.search-box').on('click', function () {
        $(this).fadeOut();
    })

    $('.search-box .inner').on('click', function (e) {
        e.stopPropagation();
    })

    //reservation link
    $('.nav-content a.book').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('target')).offset().top - 90
        }, 1000);
    });

    //login-box popup
    $('.nav-content .pop').on('click', function () {
        $('.' + $(this).data('popup')).fadeIn();
    })

    $('.login-box').on('click', function () {
        $(this).fadeOut();
    })

    $('.login-box .inner').on('click', function (e) {
        e.stopPropagation();
    })

    // $('.login-box button').on('click', function (e) {
    //     e.preventDefault();
    //     $(this).parents('.login-box').fadeOut();
    // }) 

    //swtich between login & sign up
    $('.login-box h2 span').on('click', function () {
        $(this).addClass('select').siblings().removeClass('select');
        $('.login-box form').hide();
        $('.' + $(this).data('class')).show();
    })





    // header auto slider
    var delay = 6000,
        fade = 300;
    (function autoSlider() {
        $('.slider .show').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(delay).fadeOut(fade, function () {
                    $(this).removeClass('show').next().addClass('show').fadeIn(fade);
                    autoSlider();
                });
            } else {
                $(this).delay(delay).fadeOut(fade, function () {
                    $(this).removeClass('show');
                    $('.slider .slider-slide').eq(0).addClass('show').fadeIn(fade);
                    autoSlider();
                });
            }
        });
    }());

    //choose recommrndation
    $('.thumbnails img').on('click', function () {
        var label = $('#meal-label'),
            value = $(this).attr('title');
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.master img').hide().attr('src', $(this).attr('src')).fadeIn(500);
        //console.log(label.innerHTML= value);
        label.text(value);
    });

    $('.master .fa-chevron-left').on('click', function () {
        if ($('.thumbnails .selected').is(':first-child')) {
            $('.thumbnails img:last').click();
        } else {
            $('.thumbnails .selected').prev().click();
        }
    })

    $('.master .fa-chevron-right').on('click', function () {
        if ($('.thumbnails .selected').is(':last-child')) {
            $('.thumbnails img').eq(0).click();
        } else {
            $('.thumbnails .selected').next().click();
        }
    })


    //adjust owl carousel

    // owl carousel for testimonials
    $('#testimonial').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: 1000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // owl carousel for team
    $('#team').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: 1000,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });


    //section menus
    // small screen tabs
    $('.meal-title a').on('click', function (e) {
        e.preventDefault();
        $('.menu-title a').each().removeClass('selected');
        $(this).addClass('selected');
        $('.' + $(this).data('class')).addClass('select').siblings().removeClass('select');
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('class')).parent().offset().top + 1
        }, 1000);
    });
    // selected link
    $('.menu-name li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.' + $(this).data('class')).addClass('select').siblings().removeClass('select');
    });


    // scroll to top
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.top').fadeIn(500);
        } else {
            $('.top').fadeOut(500);
        }
    });
    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    });
});

//loading page
$(window).on('load', function () {
    'use strict';
    $('.loading-page').fadeOut(1000, function () {
        $(this).remove();
    });
});
