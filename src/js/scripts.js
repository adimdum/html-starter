(function ($, window, document, undefined) {

  'use strict';

  $(function () {

  	// Readmore Work
    $('#singlework_desc').readmore({
    	lessLink: '<a href="" class="more_action">Close <i class="icon-arrow-left"></i></a>',
    	moreLink: '<a href="" class="more_action">Read More <i class="icon-arrow-right"></i></a>',
    	speed: 300,maxHeight: 262
    });

    // Accordion Service
    $('.accordion_service').accordion({
    	speed: 'fast',
    	defaultOpen: 'some_id'
    }); //some_id section1 in demo

    // Contact Map
    $('#contact_map').gmap3({
      marker:{
        latLng: [-7.842786, 110.332594],
        options: {
            draggable: true,
            icon: "assets/img/map_pinter.png"
        },
      },
      map:{
        options: {
            zoom: 15,
            scrollwheel: false,
            // streetViewControl: false,
            // zoomControl: false,
            // mapTypeControl: false
            // navigationControl: false
        }
      }
    });

  });

})(jQuery, window, document);
