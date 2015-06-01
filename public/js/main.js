$(document).ready(function() {


	// Mobile menu
	$(".menu-button").click(function() {
		$(".nav-links").slideToggle(300);
	});

	// Display modal on click
	$(".modal-trigger").click(function(event) {
		event.preventDefault();
	    $(".modal").fadeIn(300);
	});

	// Hide modal on click
	$(".modal-bg").click(function(event) {
		event.preventDefault();
	    $(".modal").fadeOut(300);
	});

	// Smooth scrolling to first feature
	$(".waypoint").on('click',function(event) {
	    event.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 600, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// Footer timeline
	$(".trigger-1").click(function(event) {
		event.preventDefault();
	    $(".trigger").removeClass('active');
	    $(".step").removeClass('active');
	    $(".contact-us").removeClass('active');
	    $(this).addClass('active');
	    $(".step-1").addClass('active');
	});

	$(".trigger-2").click(function(event) {
		event.preventDefault();
	    $(".trigger").removeClass('active');
	    $(".step").removeClass('active');
	    $(".contact-us").removeClass('active');
	    $(this).addClass('active');
	    $(".step-2").addClass('active');
	});

	$(".trigger-3").click(function(event) {
		event.preventDefault();
	    $(".trigger").removeClass('active');
	    $(".step").removeClass('active');
	    $(".contact-us").removeClass('active');
	    $(this).addClass('active');
	    $(".step-3").addClass('active');
	});

	$(".trigger-4").click(function(event) {
		event.preventDefault();
	    $(".trigger").removeClass('active');
	    $(".step").removeClass('active');
	    $(".contact-us").removeClass('active');
	    $(this).addClass('active');
	    $(".step-4").addClass('active');
	});

	$(".trigger-5").click(function(event) {
		event.preventDefault();
	    $(".trigger").removeClass('active');
	    $(".step").removeClass('active');
	    $(this).addClass('active');
	    $(".step-5").addClass('active');
	    $(".contact-us").addClass('active');
	});

	// Trigger the slider
	var eventFired = false,
	    objectPositionTop = $('.footer').offset().top - 100;

	$(window).on('scroll', function() {

	 var currentPosition = $(document).scrollTop();
	 if (currentPosition > objectPositionTop && eventFired === false) {
	   eventFired = true;

	   // Automatic slider
		setTimeout(
		function() 
		{
			$(".step-1").removeClass('active');
			$(".step-2").addClass('active');
		}, 3000);

		setTimeout(
		function() 
		{
			$(".step-2").removeClass('active');
			$(".step-3").addClass('active');
		}, 6000);

		setTimeout(
		function() 
		{
			$(".step-3").removeClass('active');
			$(".step-4").addClass('active');
		}, 9000);

		setTimeout(
		function() 
		{
			$(".step-4").removeClass('active');
			$(".step-5").addClass('active');
			$(".contact-us").addClass('active');
		}, 12000);
	 }

	});

});
