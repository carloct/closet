/*
  Theme Name: Rumors - Celebrity Gossip Responsive Template
  Theme URL: http://www.eitthemes.com/themes/html/rumors
  Author: Eitthemes
  Author URI: http://eitthemes.com/
  Description: Rumors - Celebrity Gossip Responsive Template
  Version: 1.0.0
*/

(function($) {
    'use strict';

    if ($("#map").length > 0)
    {
	var map;

	map = new GMaps({
	    el: '#map',
	    lat: 45.494447,
	    lng: -73.5697587,
	    scrollwheel: false,
	    zoom: 14,
	    zoomControl: false,
	    panControl: false,
	    streetViewControl: false,
	    mapTypeControl: false,
	    overviewMapControl: false,
	    clickable: false
	});

	var image = '';
	map.addMarker({
	    lat: 45.494447,
	    lng: -73.5697587,
	    icon: 'images/marker.png',
	    animation: google.maps.Animation.DROP,
	    verticalAlign: 'bottom',
	    horizontalAlign: 'center',
	    backgroundColor: '#d3cfcf'
	});



	var styles = [
	    {
		"featureType": "road",
		"stylers": [
		    {"color": "#181818"}
		]
	    }, {
		"featureType": "water",
		"stylers": [
		    {"color": "#111111"}
		]
	    }, {
		"featureType": "landscape",
		"stylers": [
		    {"color": "#5b5b5b"}
		]
	    }, {
		"elementType": "labels.text.fill",
		"stylers": [
		    {"color": "#000000"}
		]
	    }, {
		"featureType": "poi",
		"stylers": [
		    {"color": "#4b4b4b"}
		]
	    }, {
		"elementType": "labels.text",
		"stylers": [
		    {"saturation": 1},
		    {"weight": 0.2},
		    {"color": "#000000"}
		]
	    }

	];



	map.addStyle({
	    styledMapName: "Styled Map",
	    styles: styles,
	    mapTypeId: "map_style"
	});

	map.setStyle("map_style");
    }
    //    Parallax
    if ($('.subScribe, .needtoKn').length > 0) {
	$('.subScribe').parallax('50%', .2);
	$('.needtoKn').parallax('50%', .2);
    }
//    Owl Carousel
    if ($('#promoSlide').length > 0) {
	$("#promoSlide").owlCarousel({
	    items: 4,
	    autoPlay: true,
	    navigation: true,
	    navigationText: false,
	    stopOnHover: true,
	    itemsDesktop: [1199, 3],
	    itemsTablet: [991, 2],
	    itemsTabletSmall: [767, 1],
	    itemsMobile: [480, 1]
	});
    }
    if ($('#helthCarousel').length > 0) {
	$("#helthCarousel").owlCarousel({
	    items: 3,
	    autoPlay: true,
	    navigation: true,
	    navigationText: false,
	    stopOnHover: true,
	    itemsDesktop: [1199, 3],
	    itemsTablet: [991, 2],
	    itemsTabletSmall: [767, 1],
	    itemsMobile: [480, 1]
	});
    }
    if ($('#fashionCarousel').length > 0) {
	$("#fashionCarousel").owlCarousel({
	    items: 3,
	    autoPlay: true,
	    navigation: true,
	    stopOnHover: true,
	    navigationText: false,
	    itemsDesktop: [1199, 3],
	    itemsMobile: [480, 1],
	    itemsTablet: [991, 2],
	    itemsTabletSmall: [767, 1]
	});
    }
    if ($('#loveCarousel').length > 0) {
	$("#loveCarousel").owlCarousel({
	    items: 3,
	    autoPlay: true,
	    navigation: true,
	    stopOnHover: true,
	    navigationText: false,
	    itemsDesktop: [1199, 3],
	    itemsTablet: [991, 2],
	    itemsTabletSmall: [767, 1],
	    itemsMobile: [480, 1]
	});
    }
    if ($('#hotCrousel').length > 0) {
	$("#hotCrousel").owlCarousel({
	    items: 3,
	    autoPlay: true,
	    navigation: true,
	    navigationText: false,
	    itemsDesktop: [1199, 3],
	    itemsTablet: [991, 2],
	    itemsTabletSmall: [767, 1],
	    itemsMobile: [480, 1],
	    singleItem: false,
	    stopOnHover: true
	});
    }
//    bx slider
    if ($('.faSlide').length > 0) {
	$(".faSlide").bxSlider({
	    minSlides: 1,
	    pagerCustom: '#bxThmb',
	    nextText: '>',
	    prevText: '<',
	    nextSelector: '#nextious',
	    prevSelector: '#previous',
	    auto: true,
	    stopAuto: false,
	    mode: 'vertical'
	});
    }
    if ($('.singThSld').length > 0) {
	$('.singThSld').bxSlider({
	    minSlides: 1,
	    pagerCustom: '.podZoom',
	    auto: false,
	    stopAuto: false,
	    pager: true
	});
    }


    //Pretty Photo
    if ($("a[data-rel^='prettyPhoto']").length > 0)
    {
	$("a[data-rel^='prettyPhoto']").prettyPhoto({
	    social_tools: false
	});

    }
    if ($('video').length > 0)
    {
	$('video').mediaelementplayer({
	    features: [],
	    plugins: ['flash', 'silverlight'],
	    pauseOtherPlayers: true
	});
    }
    if ($(".videoGallery2").length > 0)
    {
	$(".youtube").colorbox({
	    rel: 'group1',
	    iframe: true,
	    innerWidth: 630,
	    innerHeight: 450,
	    maxWidth: '95%',
	    maxHeight: '95%'
	});
    }
    if ($(".photGall2").length > 0)
    {
	$(".group2").colorbox({rel: 'group2', transition: "fade", innerWidth: 630, innerHeight: 450, maxWidth: '95%', maxHeight: '95%'});
    }

    if ($("#contactMap").length > 0)
    {
	var map;

	map = new GMaps({
	    el: '#contactMap',
	    lat: 45.494447,
	    lng: -73.5697587,
	    scrollwheel: false,
	    zoom: 14,
	    zoomControl: false,
	    panControl: false,
	    streetViewControl: false,
	    mapTypeControl: false,
	    overviewMapControl: false,
	    clickable: false
	});
    }

    $('[data-toggle="tooltip"]').tooltip();

    //    Date Picker
    if ($('#datePick').length > 0)
    {
	$('#datePick').datepicker();
    }
    //    Count Picker
    if ($('.quantity').length > 0)
    {
	$('.plus').on('click', function() {
	    var preval = parseInt($('#plusMinus').val()) + 1;
	    var preval1 = parseInt($(this).prev('.plusMinus').val()) + 1;
	    $('#plusMinus').val(preval);
	    $(this).prev('.plusMinus').val(preval1);
	});
	$('.minus').on('click', function() {
	    if (parseInt($('#plusMinus').val()) !== 0)
	    {
		var preval = parseInt($('#plusMinus').val()) - 1;
		$('#plusMinus').val(preval);
	    }
	    if (parseInt($(this).next('.plusMinus').val()) !== 0)
	    {
		var preval = parseInt($(this).next('.plusMinus').val()) - 1;
		$(this).next('.plusMinus').val(preval);
	    }
	});
    }
    
    if($(".cartCloseBtn").length > 0)
    {
        $(".cartCloseBtn").on('click', function(e){
            e.preventDefault();
            var ids = $(this).attr('href');
            $(ids).fadeOut('slow');
        });
    }
    
    //    Price Ranger
    if ($('#priceRange').length > 0)
    {
	var $range = $("#priceRange");
	$range.ionRangeSlider({
	    type: "double",
	    min: 0,
	    max: 500,
	    from: 50,
	    to: 300,
	    prefix: "$"
	});
    }
//    Preloader
    if ($('.preLoader').length > 0) {
	$(window).load(function() {
	    $(".preLoader").delay(300).fadeOut("normal");
	});
    }
    /*=================================
     // Shop Single Carousel
     /=================================*/
    if ($("#carousel").length > 0)
    {
	$("#carousel").rcarousel({
	    orientation: "vertical",
	    width: 225,
	    height: 91,
	    visible: 5,
	    step: 1,
	    margin: 20
	});

	$( "#ui-carousel-next")
		.add("#ui-carousel-prev")
		.on('hover', 
			function() {
			    $(this).css( "opacity", 0.7);
			},
			function() {
			    $(this).css( "opacity", 1.0);
			}
		);
    }


    /**************************************
     *  Menu Mobile
     **************************************/
    if ($(".mainMenu").length > 0)
    {
        $(".menuToggle").on('click', function() {
            $(".mainMenu > ul").slideToggle('slow');
            $(this).toggleClass('active');
        });
        $(".mainMenu > ul li").has("ul.subMenu").prepend('<span class="subMenuKey"></span>');

        $(".mainMenu").on('click', '.subMenuKey', function() {
            $(this).toggleClass('mOpened');
            $(this).closest('li').children('ul.subMenu').slideToggle();
        });
    }
    /**************************************
     *  Fixed Header
     **************************************/
    if ($(window).width() > 767)
    {
	$(window).on('scroll', function(event) {
	    if ($(window).scrollTop() > 500)
	    {
		$("#header").removeClass('fadeInUp');
		$("#header").addClass('fixedHeader animated fadeInDown');
	    }
	    else
	    {
		$("#header").addClass('fadeInUp');
		$("#header").removeClass('fixedHeader fadeInDown');
	    }
	});
    }

    //=========================
    // WOW Animation
    //=========================
    if ($(window).width() > 765)
    {
	var wow = new WOW({
	    boxClass: 'wow', // default
	    animateClass: 'animated', // default
	    offset: 0, // default
	    mobile: false, // default
	    live: true        // default
	});
	wow.init();
    }
//    Subscribe form
    if ($("#subscribForm").length > 0)
    {
	$("#subscribForm").submit(function(e) {
	    e.preventDefault();
	    var email = $("#subs_email", this).val();
	    $("#subsMail").val('Sending...');
	    if (email != '')
	    {
		$("#subs_email").removeClass('failedSubscribe');
		$.ajax({
		    type: "POST",
		    url: 'ajax/subscribe_mail.php',
		    data: {email: email},
		    success: function(data)
		    {
			$("#subs_email").val('');
			$("#subsMail").val('Done!');
		    }
		});
	    }
	    else
	    {
		$("#subs_email").addClass('failedSubscribe');
		$("#subsMail").val('Failed!');
	    }
	});
    }
    //    Subscribe form
    if ($("#subscribForm2").length > 0)
    {
	$("#subscribForm2").submit(function(e) {
	    e.preventDefault();
	    var email = $("#sub_email", this).val();
	    $("#subsMail").val('Sending...');
	    if (email != '')
	    {
		$("#sub_email").removeClass('failedSubscribe2');
		$.ajax({
		    type: "POST",
		    url: 'ajax/subscribe_mail.php',
		    data: {email: email},
		    success: function(data)
		    {
			$("#sub_email").val('');
			$("#subsMail").val('done!');
		    }
		});
	    }
	    else
	    {
		$("#sub_email").addClass('failedSubscribe2');
		$("#subsMail").val('failed!');
	    }
	});
    }
//    Footer Subscribe form
    if ($("#fSubscribeForm").length > 0)
    {
	$("#fSubscribeForm").submit(function(e) {
	    e.preventDefault();
	    var email = $("#fSubEmail", this).val();
	    $("#fSubBtn").html('<i class="fa fa-spinner"></i>');
	    if (email != '')
	    {
		$("#fSubEmail").removeClass('failedSubscribe3');
		$.ajax({
		    type: "POST",
		    url: 'ajax/subscribe_mail.php',
		    data: {email: email},
		    success: function(data)
		    {
			$("#fSubEmail").val('');
			$("#fSubBtn").html('<i class="fa fa-thumbs-up"></i>');
		    }
		});
	    }
	    else
	    {
		$("#fSubEmail").addClass('failedSubscribe3');
		$("#fSubBtn").html('<i class="fa fa-exclamation-triangle"></i>');
	    }
	});
    }
//    Contact form
    if ($("#contactFrom").length > 0)
    {
	$("#contactFrom").submit(function(e) {
	    e.preventDefault();
	    var allData2 = $(this).serialize();
	    var required = 0;
	    $("#contSubmit").val('Sending...');
	    $(".required", this).each(function() {
		if ($(this).val() == '')
		{
		    $(this).addClass('reqError');
		    required += 1;
		}
		else
		{
		    if ($(this).hasClass('reqError'))
		    {
			$(this).removeClass('reqError');
			if (required > 0)
			{
			    required -= 1;
			}
		    }
		}
	    });
	    //alert(required);
	    if (required === 0)
	    {
		$("#contSubmit").val('Sending...');
		$.ajax({
		    type: "POST",
		    url: 'ajax/contact_mail.php',
		    data: {allData2: allData2},
		    success: function(data)
		    {
			$("#contactFrom input[type='text'], #contactFrom input[type='email'], #contactFrom textarea").val('');
			$("#contSubmit").val('Done!!');
		    }
		});
	    }
	    else
	    {
		$("#contSubmit").val('Send Message');
	    }
	});
    }

    /************* Preset Area ***********************/
    if ($(".presetsArea").length > 0)
    {
	var presetSw = true;
	$("#switch").on('click', function(e) {
	    e.preventDefault();
	    if (presetSw)
	    {
		$(this).addClass('active');
		$(".presetsArea").animate({'left': '0px'}, 400);
		presetSw = false;
	    }
	    else
	    {
		$(this).removeClass('active');
		$(".presetsArea").animate({'left': '-210px'}, 400);
		presetSw = true;
	    }

	});

	$(".colors a").on('click', function(e) {
	    e.preventDefault();
	    var cs = $(this).attr('href');
	    $(".colors a").removeClass('active');
	    $(this).addClass('active');
	    $("#colorPreset").attr('href', 'css/colorpreset/' + cs + '.css');
	});
    }
// Back To Top
    if ($("#backTo").length > 0)
    {
	$(window).on('scroll', function() {
	    if ($(window).scrollTop() > 500)
	    {
		$("#backTo").fadeIn('slow');
	    }
	    else
	    {
		$("#backTo").fadeOut('slow');
	    }

	});
	$("#backTo").on('click', function(e) {
	    e.preventDefault();
	    $('html, body').animate({scrollTop: 0}, 1000);
	});
    }

    
    if($(".searchOpen").length > 0)
    {
        var searchStatus = true;
        $(".searchOpen").on('click', function(e){
           e.preventDefault();
           if(searchStatus)
           {
               $(".headSearch").animate({'width': '250px'}, 'slow');
               $(this).addClass('active');
               searchStatus = false;
           }
           else
           {
               $(".headSearch").animate({'width': '0px'}, 'slow');
               $(this).removeClass('active');
               searchStatus = true;
           }
        });
    }
    
    
    if($(".myrevslider").length > 0)
    {
        $('.tp-banner').revolution({
         delay:9000,
         startwidth:1140,
         startheight:523,
         startWithSlide:0,
 
         fullScreenAlignForce:"off",
         autoHeight:"off",
         minHeight:"off",
 
         shuffle:"off",
 
         onHoverStop:"on",
 
         thumbWidth:100,
         thumbHeight:50,
         thumbAmount:3,
 
         hideThumbsOnMobile:"off",
         hideNavDelayOnMobile:1500,
         hideBulletsOnMobile:"off",
         hideArrowsOnMobile:"off",
         hideThumbsUnderResoluition:0,
 
         hideThumbs:0,
         hideTimerBar:"off",
 
         keyboardNavigation:"on",
 
         navigationType:"bullet",
         navigationArrows:"solo",
         navigationStyle:"round",
 
         navigationHAlign:"center",
         navigationVAlign:"bottom",
         navigationHOffset:30,
         navigationVOffset:30,
 
         soloArrowLeftHalign:"left",
         soloArrowLeftValign:"center",
         soloArrowLeftHOffset:20,
         soloArrowLeftVOffset:0,
 
         soloArrowRightHalign:"right",
         soloArrowRightValign:"center",
         soloArrowRightHOffset:20,
         soloArrowRightVOffset:0,
 
 
         touchenabled:"on",
         swipe_velocity:"0.7",
         swipe_max_touches:"1",
         swipe_min_touches:"1",
         drag_block_vertical:"false",
 
         dottedOverlay:"twoxtwo",
 
         spinned:"spinner4",
 
         fullWidth:"off",
         forceFullWidth:"off",
         fullScreen:"off",
         fullScreenOffsetContainer:"#topheader-to-offset",
         fullScreenOffset:"0px",
 
         panZoomDisableOnMobile:"off",
 
         simplifyAll:"off",
 
         shadow:0
 
      });
    }
    
    
})(jQuery);


        