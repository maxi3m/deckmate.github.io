$(document).ready(function() {


	// Mobile menu
	$(".menu-button").click(function() {
		$(".nav-links").slideToggle(300);
	});

	// Display Signup modal on click
	$(".signup.modal-trigger").click(function(event) {
		event.preventDefault();
	    $(".modal.signup").fadeIn(300);
	});
	// Hide modal on click
	$(".signup .modal-bg").click(function(event) {
		event.preventDefault();
	    $(".signup.modal").fadeOut(300);
	});

	//Google forms stuff
	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	
	function postFormToGoogle(){
		var firstname = $('#firstname').val();
		var lastname = $('#lastname').val();
		var email = $('#email').val();
		var github = $('#github').val();
		var resume = $('#resume').val();
		var roles = $('#roles').val();
		var blurb = $('#blurb').val();
		var year = $('#year').val();
		var terms = $('input[name=terms]:checked', '#intern_form').val()
		
		if ((firstname !== "") && (lastname !== "") && (email !== "") && (github !== "") && (resume !== "") && (blurb !== "") && (year !== "") && (terms === "yes") && (validateEmail(email) ) {
		    $.ajax({
		        url: "https://docs.google.com/forms/d/1NoC9QFAj_T0OZaR9dQEnddp-xzQ0OGo58627dgnM-y4/formResponse",
		        data: {
		        	"entry.735980176" : firstname, 
		        	"entry.1855865340" : lastname, 
		        	"entry.568150418" : email,
		        	"entry.1922611629" : github,
		        	"entry.670080863" : resume,
		        	"entry.452937369" : blurb,
		        	"entry.645095933" : roles,
		        	"entry.905553991" : year,
		        	
		        },
		        type: "POST",
		        dataType: "xml",
		        statusCode: {
		            0: function (){
		
		                $('#name').val("");
		                $('#email').val("");
		                $('#github').val("");
		                $('#resume').val("");
		                $('#roles').val("");
		                $('#blurb').val("");
		                $('#year').val("");
		                //Success message
		                $(".modal-signup").fadeOut(300);
		                
		            },
		            200: function (){
		                $('#email').val("");
		                $('#github').val("");
		                $('#resume').val("");
		                $('#roles').val("");
		                $('#blurb').val("");
		                $('#year').val("");
		                //Success Message
		                
		                $(".modal-signup").fadeOut(300);
		            }
		        }
		    });
		}
		else {
		    //Error message
		    console.log("Please make sure you have filled out all required inputs before submitting")
		}
	}
	
	$('#intern_form').submit(function() {
            postFormToGoogle();
            return false;
        });

	// Display modal on click
	$(".learn-more.modal-trigger").click(function(event) {
		event.preventDefault();
	    $(".learn-more.modal").fadeIn(300);
	});


	// Hide modal on click
	$(".learn-more .modal-bg").click(function(event) {
		event.preventDefault();
	    $(".learn-more.modal").fadeOut(300);
	});

	// Smooth scrolling to first feature
	$(".waypoint").on('click',function (event) {
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
