// SLIDER
$(document).ready(function(){
    $('.pm-team__carousel').slick({
        arrows: false,
        dots: true
    });
});
$(document).ready(function(){
    $('.pm-comments').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000
    });
});

// ISOTOPE
$(document).ready(function(){

    var $portfolio = $('.pm-container');

    var $porIso = $portfolio.isotope({
        itemSelector: '.pm-grid-item',
        percentPosition: true,
        filter: '*',
        masonry: {
            // use element for option
            columnWidth: '.pm-grid-sizer'
        }
    });


    // filter items on button click
    $('.pm-nav-portfolio').on( 'click', 'a', function(event) {
        event.preventDefault();
        var filterValue = $(this).attr('data-filter');
        $porIso.isotope({ filter: filterValue });
    });

});
// MAP
var map;
function initMap() {
    map = new google.maps.Map(document.querySelector('.pm-contact-us__map'), {
        center: {lat: 49.5685349, lng: 34.585235499999996},
        zoom: 17,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: {lat: 49.5685349, lng: 34.585235499999996},
        map: map,
        icon: 'img/beetroot-marker.png'
    });
}
document.addEventListener('DOMContentLoaded', initMap);


