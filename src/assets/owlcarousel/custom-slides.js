/* JS SLIDER */
function slides() {
    $('.owl-carousel-testmonial').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        autoplay:false,
        mouseDrag:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
}
function brand() {
    $('.owl-carousel-brand').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        autoplay:true,
        mouseDrag:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })
}