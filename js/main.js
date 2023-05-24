$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        $('nav').addClass('open');
    })

    $('.navbar-close').click(function() {
        $('nav').removeClass('open');
    })

    // $(".carousel").bxSlider({
    //     mode: 'fade',
    //     auto: true,
    //     speed: 500,
    //     pause: 2000,
    //     pager: false,
    //     controls: false
    // });

    $(".carousel-testimonial").bxSlider({
        mode: 'fade',
        speed: 500,
        pause: 4000,
        infiniteLoop: false,
        hideControlOnEnd: true,
        pager: ($(".carousel-testimonial>.item").length > 1) ? true: false,
    });

    $('main').css('margin-bottom', $('footer').outerHeight());


    $('nav ul').find('a').click(function(e){
        $('nav').removeClass('open');
        var $href = $(this).attr('href');
        var $anchor = $('#'+$href).offset();
        if($href === 'letsconnect') {
            $('body, html').animate({scrollTop: document.body.scrollHeight});
        }
        else {
            $('body, html').animate({ scrollTop: $anchor.top });
         }
        return false;
    });

    

    $(document).scroll(function(evt){
    var v2 = $('#intro').position().top - 100;
    var v1 = $(this).scrollTop();
        if( v1 > v2 ){
            $('.brand').fadeOut();
            setTimeout(function() {
                $('.intro-title span').eq(0).css('opacity', 1);
            }, 500)
            setTimeout(function() {
                $('.intro-title span').eq(1).css('opacity', 1);
            }, 1000)
            setTimeout(function() {
                $('.intro-title span').eq(2).css('opacity', 1);
            }, 1500)
            setTimeout(function() {
                $('.intro-title span').eq(3).css('opacity', 1);
            }, 2000)
            setTimeout(function() {
                $('.intro-title span').eq(4).css('opacity', 1);
            }, 2100)
            setTimeout(function() {
                $('.intro-title span').eq(5).css('opacity', 1);
            }, 2600)
            setTimeout(function() {
                $('.intro-title span').eq(6).css('opacity', 1);
            }, 3100)
            setTimeout(function() {
                $('.border-small').animate({'width': '250px'}, 500);
            }, 3600)
            setTimeout(function() {
                $('.tagline').animate({'opacity': 1}, 500);
            }, 3700)
        }
        else {
            $('.brand').fadeIn();
        }
    });
    


    /****************Type Writer Animation***************/
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            jQuery('.typewrite').fadeOut();
            this.txt = ''
        } else {
            jQuery('.typewrite').fadeIn();
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 120 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
})