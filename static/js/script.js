/**
 * @function      Include
 * @description   Includes an external scripts to the page
 * @param         {string} scriptUrl
 */
function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}


/**
 * @function      Include
 * @description   Lazy script initialization
 */
function lazyInit(element, func) {
    var $win = jQuery(window),
        wh = $win.height();


    $win.on('load scroll', function () {
        var st = $(this).scrollTop();
        if (!element.hasClass('lazy-loaded')) {
            var et = element.offset().top,
                eb = element.offset().top + element.outerHeight();
            if (st + wh > et - 100 && st < eb + 100) {
                func.call();
                element.addClass('lazy-loaded'); 
            }
        }
    });
}

/**
 * @function      isIE
 * @description   checks if browser is an IE
 * @returns       {number} IE Version
 */
function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};


/**
 * @module       Copyright
 * @description  Evaluates the copyright year
 */
;
(function ($) {
    $(document).ready(function () {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);


/**
 * @module       IE Fall&Polyfill
 * @description  Adds some loosing functionality to old IE browsers
 */
;
(function ($) {
    if (isIE() && isIE() < 11) {
        $('html').addClass('lt-ie11');
        $(document).ready(function () {
            PointerEventsPolyfill.initialize({});
        });
    }

    if (isIE() && isIE() < 10) {
        $('html').addClass('lt-ie10');
    }
})(jQuery);


/**
 * @module       WOW Animation
 * @description  Enables scroll animation on the page
 */
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop') && o.hasClass("wow-animation") && $(".wow").length) {
        $(document).ready(function () {
            new WOW().init();
        });
    }
})(jQuery);


/**
 * @module       ToTop
 * @description  Enables ToTop Plugin
 */
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {

        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'ui-to-top fa fa-angle-up'
            });
        });
    }
})(jQuery);

/**
 * @module       Responsive Tabs
 * @description  Enables Easy Responsive Tabs Plugin
 */
;
(function ($) {
    var o = $('.responsive-tabs');
    if (o.length > 0) {
        $(document).ready(function () {
            o.each(function () {
                var $this = $(this);
                $this.easyResponsiveTabs({
                    type: $this.attr("data-type") === "accordion" ? "accordion" : "default"
                });
            })
        });
    }
})(jQuery);

/**
 * @module       RD Mailform
 * @description  Enables RD Mailform Plugin
 */
;
(function ($) {
    var o = $('.rd-mailform');
    if (o.length > 0) {
        $(document).ready(function () {
            var o = $('.rd-mailform');

            if (o.length) {
                o.rdMailForm({
                    validator: {
                        'constraints': {
                            '@LettersOnly': {
                                message: 'Please use only letters.'
                            },
                            '@NumbersOnly': {
                                message: 'Please use only numbers.'
                            },
                            '@NotEmpty': {
                                message: 'This field should not be empty.'
                            },
                            '@Email': {
                                message: 'Enter valid e-mail address.'
                            },
                            '@Phone': {
                                message: 'Enter valid phone number.'
                            },
                            '@Date': {
                                message: 'Use MM/DD/YYYY format.'
                            },
                            '@SelectRequired': {
                                message: 'Please choose an option.'
                            }
                        }
                    }
                }, {
                    'MF000': 'Sent',
                    'MF001': 'Recipients are not set.',
                    'MF002': 'Form will not work locally.',
                    'MF003': 'Please define email field in your form.',
                    'MF004': 'Please define the type of your form.',
                    'MF254': 'Something went wrong with PHPMailer.',
                    'MF255': 'There was an error submitting the form.'
                });
            }
        });
    }
})(jQuery);

/**
 * @module       RD Google Map
 * @description  Enables RD Google Map Plugin
 */

;
(function ($) {
    var o = $('#google-map');

    if (o.length) {
        include('//maps.google.com/maps/api/js');
        $(document).ready(function () {
            var head = document.getElementsByTagName('head')[0],
                insertBefore = head.insertBefore;

            head.insertBefore = function (newElement, referenceElement) {
                if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') != -1 || newElement.innerHTML.indexOf('gm-style') != -1) {
                    return;
                }
                insertBefore.call(head, newElement, referenceElement);
            };

            lazyInit(o, function () {
                o.googleMap({
                    styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
                });
            });



        });
    }
})(jQuery);

/**
 * @module       RD Navbar
 * @description  Enables RD Navbar Plugin
 */
;
(function ($) {
    var o = $('.rd-navbar');
    if (o.length > 0) {
        $(document).ready(function () {
            o.RDNavbar({
                stuckWidth: 768,
                stuckMorph: true,
                stuckLayout: "rd-navbar-static",
                responsive: {
                    0: {
                        layout: 'rd-navbar-fixed',
                        focusOnHover: false
                    },
                    768: {
                        layout: 'rd-navbar-fullwidth'
                    },
                    1200: {
                        layout: o.attr("data-rd-navbar-lg").split(" ")[0],
                    }
                },
                onepage: {
                    enable: false,
                    offset: 0,
                    speed: 400
                }
            });
        });
    }
})(jQuery);

/**
 * @module       RD Parallax 3
 * @description  Enables RD Parallax 3 Plugin
 */

;
(function ($) {
    var o = $('.rd-parallax');
    if (o.length) {
        $(document).ready(function () {
            o.each(function () {
                var p = $(this);
                if (!p.parents(".swiper-slider").length) {
                    p.RDParallax({layerDirection: ($('html').hasClass("smoothscroll") || $('html').hasClass("smoothscroll-all")) && !isIE() ? "normal" : "inverse"});
                }
            });
        });
    }
})(jQuery);

/**
 * @module       RD Search
 * @description  Enables RD Search Plugin
 */
;
(function ($) {
    var o = $('.rd-navbar-search');
    if (o.length) {
        $(document).ready(function () {
            o.RDSearch({});
        });
    }
})(jQuery);

/* Audio Js
 ========================================================*/
;
(function ($) {
    var o = $('audio');
    if (o.length > 0) {
        $(document).ready(function () {
            o.rdAudio({
                fixedBG: 'transparent',
                fixed: true,
                fixedClass: 'fixed-player',
                playlistClass: 'music-list'
            });
        });
    }
})(jQuery);


/**
 * @module       Owl Carousel
 * @description  Enables Owl Carousel Plugin
 */
;
(function ($) {
    var o = $('.owl-carousel');
    if (o.length) {

        var isTouch = "ontouchstart" in window;

        function preventScroll(e) {
            e.preventDefault();
        }

        $(document).ready(function () {
            o.each(function () {
                var c = $(this),
                    responsive = {};

                var aliaces = ["-", "-xs-", "-sm-", "-md-", "-lg-", "-xl-"],
                    values = [0, 480, 768, 992, 1200, 1800],
                    i, j;

                for (i = 0; i < values.length; i++) {
                    responsive[values[i]] = {};
                    for (j = i; j >= -1; j--) {
                        if (!responsive[values[i]]["items"] && c.attr("data" + aliaces[j] + "items")) {
                            responsive[values[i]]["items"] = j < 0 ? 1 : parseInt(c.attr("data" + aliaces[j] + "items"));
                        }
                        if (!responsive[values[i]]["stagePadding"] && responsive[values[i]]["stagePadding"] !== 0 && c.attr("data" + aliaces[j] + "stage-padding")) {
                            responsive[values[i]]["stagePadding"] = j < 0 ? 0 : parseInt(c.attr("data" + aliaces[j] + "stage-padding"));
                        }
                        if (!responsive[values[i]]["margin"] && responsive[values[i]]["margin"] !== 0 && c.attr("data" + aliaces[j] + "margin")) {
                            responsive[values[i]]["margin"] = j < 0 ? 30 : parseInt(c.attr("data" + aliaces[j] + "margin"));
                        }
                        if (!responsive[values[i]]["mouseDrag"] && responsive[values[i]]["mouseDrag"] !== 0 && c.attr("data" + aliaces[j] + "mouse-drag")) {
                            responsive[values[i]]["mouseDrag"] = c.attr("data" + aliaces[j] + "mouse-drag") === "true";
                        }
                    }

                }

                c.owlCarousel({
                    autoplay: c.attr("data-autoplay") === "true",
                    autoplayTimeout: c.attr("data-autoplay-timeout") || 5000,
                    smartSpeed: c.attr("data-smart-speed") || 250,
                    loop: c.attr("data-loop") !== "false",
                    item: 1,
                    nav: c.attr("data-nav") === "true",
                    dots: c.attr("data-dots") === "true",
                    dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each")) : false,
                    responsive: responsive,
                    navText: [],
                    onInitialized: function () {
                        if ($.fn.magnificPopup) {
                            var o = this.$element.attr('data-lightbox') !== "gallery",
                                g = this.$element.attr('data-lightbox') === "gallery";

                            if (o) {
                                this.$element.each(function () {
                                    var $this = $(this);
                                    $this.magnificPopup({
                                        type: $this.attr("data-lightbox"),
                                        callbacks: {
                                            open: function () {
                                                if (isTouch) {
                                                    $(document).on("touchmove", preventScroll);
                                                    $(document).swipe({
                                                        swipeDown: function () {
                                                            $.magnificPopup.close();
                                                        }
                                                    });
                                                }
                                            },
                                            close: function () {
                                                if (isTouch) {
                                                    $(document).off("touchmove", preventScroll);
                                                    $(document).swipe("destroy");
                                                }
                                            }
                                        }
                                    });
                                })
                            }

                            if (g) {
                                this.$element.each(function () {
                                    var $gallery = $(this);

                                    $gallery
                                        .find('[data-lightbox]').each(function () {
                                            var $item = $(this);
                                            $item.addClass("mfp-" + $item.attr("data-lightbox"));
                                        })
                                        .end()
                                        .magnificPopup({
                                            delegate: '.owl-item:not(.cloned) .owl-item [data-lightbox]',
                                            type: "image",
                                            gallery: {
                                                enabled: true
                                            },
                                            callbacks: {
                                                open: function () {
                                                    if (isTouch) {
                                                        $(document).on("touchmove", preventScroll);
                                                        $(document).swipe({
                                                            swipeDown: function () {
                                                                $.magnificPopup.close();
                                                            }
                                                        });
                                                    }
                                                },
                                                close: function () {
                                                    if (isTouch) {
                                                        $(document).off("touchmove", preventScroll);
                                                        $(document).swipe("destroy");
                                                    }
                                                }
                                            }
                                        });
                                })
                            }
                        }
                    }
                });
            });
        });
    }
})(jQuery);

/**
 * @module       Swiper Slider
 * @description  Enables Swiper Plugin
 */
;
(function ($, undefined) {
    var o = $(".swiper-slider");
    if (o.length) {
        function getSwiperHeight(object, attr) {
            var val = object.attr("data-" + attr),
                dim;

            if (!val) {
                return undefined;
            }

            dim = val.match(/(px)|(%)|(vh)$/i);

            if (dim.length) {
                switch (dim[0]) {
                    case "px":
                        return parseFloat(val);
                    case "vh":
                        return $(window).height() * (parseFloat(val) / 100);
                    case "%":
                        return object.width() * (parseFloat(val) / 100);
                }
            } else {
                return undefined;
            }
        }

        function toggleSwiperInnerVideos(swiper) {
            var videos;

            $.grep(swiper.slides, function (element, index) {
                var $slide = $(element),
                    video;

                if (index === swiper.activeIndex) {
                    videos = $slide.find("video");
                    if (videos.length) {
                        videos.get(0).play();
                    }
                } else {
                    $slide.find("video").each(function () {
                        this.pause();
                    });
                }
            });
        }

        function toggleSwiperCaptionAnimation(swiper) {
            if (isIE() && isIE() < 10) {
                return;
            }

            var prevSlide = $(swiper.container),
                nextSlide = $(swiper.slides[swiper.activeIndex]);

            prevSlide
                .find("[data-caption-animate]")
                .each(function () {
                    var $this = $(this);
                    $this
                        .removeClass("animated")
                        .removeClass($this.attr("data-caption-animate"))
                        .addClass("not-animated");
                });

            nextSlide
                .find("[data-caption-animate]")
                .each(function () {
                    var $this = $(this),
                        delay = $this.attr("data-caption-delay");

                    setTimeout(function () {
                        $this
                            .removeClass("not-animated")
                            .addClass($this.attr("data-caption-animate"))
                            .addClass("animated");
                    }, delay ? parseInt(delay) : 0);
                });
        }

        $(document).ready(function () {
            o.each(function () {
                var s = $(this);

                var pag = s.find(".swiper-pagination"),
                    next = s.find(".swiper-button-next"),
                    prev = s.find(".swiper-button-prev"),
                    bar = s.find(".swiper-scrollbar"),
                    h = getSwiperHeight(o, "height"), mh = getSwiperHeight(o, "min-height");
                s.find(".swiper-slide")
                    .each(function () {
                        var $this = $(this),
                            url;
                        if (url = $this.attr("data-slide-bg")) {
                            $this.css({
                                "background-image": "url(" + url + ")",
                                "background-size": "cover"
                            })
                        }
                    })
                    .end()
                    .find("[data-caption-animate]")
                    .addClass("not-animated")
                    .end()
                    .swiper({
                        autoplay: s.attr('data-autoplay') ? s.attr('data-autoplay') === "false" ? undefined : s.attr('data-autoplay') : 5000,
                        direction: s.attr('data-direction') ? s.attr('data-direction') : "horizontal",
                        effect: s.attr('data-slide-effect') ? s.attr('data-slide-effect') : "slide",
                        speed: s.attr('data-slide-speed') ? s.attr('data-slide-speed') : 600,
                        keyboardControl: s.attr('data-keyboard') === "true",
                        mousewheelControl: s.attr('data-mousewheel') === "true",
                        mousewheelReleaseOnEdges: s.attr('data-mousewheel-release') === "true",
                        nextButton: next.length ? next.get(0) : null,
                        prevButton: prev.length ? prev.get(0) : null,
                        pagination: pag.length ? pag.get(0) : null,
                        paginationClickable: pag.length ? pag.attr("data-clickable") !== "false" : false,
                        paginationBulletRender: pag.length ? pag.attr("data-index-bullet") === "true" ? function (index, className) {
                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                        } : null : null,
                        scrollbar: bar.length ? bar.get(0) : null,
                        scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : true,
                        scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
                        loop: s.attr('data-loop') !== "false",
                        onTransitionStart: function (swiper) {
                            toggleSwiperInnerVideos(swiper);
                        },
                        onTransitionEnd: function (swiper) {
                            toggleSwiperCaptionAnimation(swiper);
                        },
                        onInit: function (swiper) {
                            toggleSwiperInnerVideos(swiper);
                            toggleSwiperCaptionAnimation(swiper);

                            var o = $(swiper.container).find('.rd-parallax');
                            if (o.length && window.RDParallax) {
                                o.RDParallax({
                                    layerDirection: ($('html').hasClass("smoothscroll") || $('html').hasClass("smoothscroll-all")) && !isIE() ? "normal" : "inverse"
                                });
                            }
                        }
                    });

                $(window)
                    .on("resize", function () {
                        var mh = getSwiperHeight(s, "min-height"),
                            h = getSwiperHeight(s, "height");
                        if (h) {
                            s.css("height", mh ? mh > h ? mh : h : h);
                        }
                    })
                    .load(function () {
                        s.find("video").each(function () {
                            if (!$(this).parents(".swiper-slide-active").length) {
                                this.pause();
                            }
                        });
                    })
                    .trigger("resize");
            });
        });
    }
})(jQuery);