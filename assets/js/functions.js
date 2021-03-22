/* Mobile Nav Menu */
var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

/* Header Opacity on Scroll */
$(document).ready(function() {
        var threshold = 70;
        $(window).scroll(function(event) {
            let scroll = $(this).scrollTop();
            let opacity = 1 - (scroll / threshold);
            if (opacity >= 0) {
                $('.header').css('opacity', opacity);
            }
        });
    });

/* Bottom Nav Opacity on Scroll */
$(document).ready(function() {
      var threshold = 200;
        $(window).scroll(function(event) {
            let scroll = (($(document).height() - $(window).height()) - $(window).scrollTop());
            let opacity = 1 - (scroll / threshold);
            if (opacity >= 0) {
                $('.bottom-nav').css('opacity', opacity);
            }
        });
    });

/* Footer Opacity on Scroll */
$(document).ready(function() {
      var threshold = 200;
        $(window).scroll(function(event) {
            let scroll = (($(document).height() - $(window).height()) - $(window).scrollTop());
            let opacity = 1 - (scroll / threshold);
            if (opacity >= 0) {
                $('.footer').css('opacity', opacity);
            }
        });
    });

