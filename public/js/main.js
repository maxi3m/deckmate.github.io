$(document).ready(function() {

	// Mobile menu
	$(".menu-button").click(function() {
		$(".nav-links").slideToggle(300);
	});

	// Display Student Signup modal on click
	$(".signup.modal-trigger").click(function(event) {
	    event.preventDefault();
	    $(".signup.modal#student").fadeIn(300);
	});
	
	// Hide modal on click
	$(".signup.modal .modal-bg").click(function(event) {
	    event.preventDefault();
	    $(".signup.modal").fadeOut(300);
	});
	
	// Display Startup Signup modal on click
	$(".recruit.modal-trigger").click(function(event) {
	    event.preventDefault();
	    $(".signup.modal#startup").fadeIn(300);
	});

	//Google forms stuff
	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	
	// var postInternFormToGoogle = function(){
	// 	var firstname = $('#firstname').val();
	// 	var lastname = $('#lastname').val();
	// 	var email = $('#email').val();
	// 	var github = $('#github').val();
	// 	var resume = $('#resume').val();
	// 	var roles = $('#roles').val();
	// 	var blurb = $('#blurb').val();
	// 	var year = $('#year').val();
	// 	var terms = $('input[name=terms]:checked', '#intern_form').val()
		
	// 	if ((firstname !== "") && (lastname !== "") && (email !== "") && (github !== "") && (resume !== "") && (blurb !== "") && (year !== "") && (terms === "yes") && validateEmail(email) ) {
	// 	    $.ajax({
	// 	        url: "https://docs.google.com/forms/a/deckmate.github.io/forms/d1NoC9QFAj_T0OZaR9dQEnddp-xzQ0OGo58627dgnM-y4/formResponse",
	// 	        data: {
	// 	        	"entry.735980176" : firstname, 
	// 	        	"entry.1855865340" : lastname, 
	// 	        	"entry.568150418" : email,
	// 	        	"entry.1922611629" : github,
	// 	        	"entry.670080863" : resume,
	// 	        	"entry.452937369" : blurb,
	// 	        	"entry.645095933" : roles,
	// 	        	"entry.905553991" : year,
		        	
	// 	        },
	// 	        type: "POST",
	// 	        dataType: "xml",
	// 	        statusCode: {
	// 	            0: function (){
		
	// 	                $('#name').val("");
	// 	                $('#email').val("");
	// 	                $('#github').val("");
	// 	                $('#resume').val("");
	// 	                $('#roles').val("");
	// 	                $('#blurb').val("");
	// 	                $('#year').val("");
	// 	                //Error message
	// 	                $(".modal-signup").fadeOut(300);
		                
	// 	            },
	// 	            200: function (){
	// 	                $('#email').val("");
	// 	                $('#github').val("");
	// 	                $('#resume').val("");
	// 	                $('#roles').val("");
	// 	                $('#blurb').val("");
	// 	                $('#year').val("");
	// 	                //Success Message
		                
	// 	                $(".modal-signup").fadeOut(300);
	// 	            }
	// 	        }
	// 	    });
	// 	}
	// 	else {
	// 	    //Error message
	// 	    console.log("Please make sure you have filled out all required inputs before submitting")
	// 	}
	// };
	
	// $.fn.serializeObject = function(){
	//     var o = {};
	//     var a = this.serializeArray();
	//     $.each(a, function() {
	//         if (o[this.name] !== undefined) {
	//             if (!o[this.name].push) {
	//                 o[this.name] = [o[this.name]];
	//             }
	//             o[this.name].push(this.value || '');
	//         } else {
	//             o[this.name] = this.value || '';
	//         }
	//     });
	//     return o;
	// };
		
	// var postFormToGoogle = function(form_type){
	// 	var form = $("#"+form_type+"_form").serializeObject();
		
	// 	console.log(form);
		
	// 	// if ((firstname !== "") && (lastname !== "") && (email !== "") && (github !== "") && (resume !== "") && (blurb !== "") && (year !== "") && (terms === "yes") && validateEmail(email) ) {
	// 	//     $.ajax({
	// 	//         url: "https://docs.google.com/forms/a/deckmate.github.io/forms/d1NoC9QFAj_T0OZaR9dQEnddp-xzQ0OGo58627dgnM-y4/formResponse",
	// 	//         data: {
	// 	//         	"entry.735980176" : firstname, 
	// 	//         	"entry.1855865340" : lastname, 
	// 	//         	"entry.568150418" : email,
	// 	//         	"entry.1922611629" : github,
	// 	//         	"entry.670080863" : resume,
	// 	//         	"entry.452937369" : blurb,
	// 	//         	"entry.645095933" : roles,
	// 	//         	"entry.905553991" : year,
		        	
	// 	//         },
	// 	//         type: "POST",
	// 	//         dataType: "xml",
	// 	//         statusCode: {
	// 	//             0: function (){
		
	// 	//                 $('#name').val("");
	// 	//                 $('#email').val("");
	// 	//                 $('#github').val("");
	// 	//                 $('#resume').val("");
	// 	//                 $('#roles').val("");
	// 	//                 $('#blurb').val("");
	// 	//                 $('#year').val("");
	// 	//                 //Error message
	// 	//                 $(".modal-signup").fadeOut(300);
		                
	// 	//             },
	// 	//             200: function (){
	// 	//                 $('#email').val("");
	// 	//                 $('#github').val("");
	// 	//                 $('#resume').val("");
	// 	//                 $('#roles').val("");
	// 	//                 $('#blurb').val("");
	// 	//                 $('#year').val("");
	// 	//                 //Success Message
		                
	// 	//                 $(".modal-signup").fadeOut(300);
	// 	//             }
	// 	//         }
	// 	//     });
	// 	// }
	// 	// else {
	// 	//     //Error message
	// 	//     console.log("Please make sure you have filled out all required inputs before submitting")
	// 	// }
	// };
	
	// $('#intern_form').submit(function() {
	//     postInternFormToGoogle();
	//     return false;
	// });

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
	    //$(".contact-us").removeClass('active');
	    $(this).addClass('active');
	    $(".step-1").addClass('active');
	});

	$(".trigger-2").click(function(event) {
		event.preventDefault();
	    $(".trigger").removeClass('active');
	    $(".step").removeClass('active');
	    //$(".contact-us").removeClass('active');
	    $(this).addClass('active');
	    $(".step-2").addClass('active');
	});

	$(".trigger-3").click(function(event) {
		event.preventDefault();
	    $(".trigger").removeClass('active');
	    $(".step").removeClass('active');
	    //$(".contact-us").removeClass('active');
	    $(this).addClass('active');
	    $(".step-3").addClass('active');
	});

	$(".trigger-4").click(function(event) {
		event.preventDefault();
	    $(".trigger").removeClass('active');
	    $(".step").removeClass('active');
	    //$(".contact-us").removeClass('active');
	    $(this).addClass('active');
	    $(".step-4").addClass('active');
	});

	$(".trigger-5").click(function(event) {
	    event.preventDefault();
	    $(".trigger").removeClass('active');
	    $(".step").removeClass('active');
	    $(this).addClass('active');
	    $(".step-5").addClass('active');
	});
	$(".trigger-6").click(function(event) {
	    event.preventDefault();
	    $(".trigger").removeClass('active');
	    $(".step").removeClass('active');
	    $(this).addClass('active');
	    $(".step-6").addClass('active');
	    //$(".contact-us").addClass('active');
	});

	// Trigger the slider
	var eventFired = false,
	    objectPositionTop = $('.footer').offset().top - 100,
	    stepClasses = ["step-1", "step-2", "step-3", "step-4", "step-5", "step-6"],
	    currClass = stepClasses[0],
	    nextClass;

	$(window).on('scroll', function() {

	 var currentPosition = $(document).scrollTop();
	 if (currentPosition > objectPositionTop && eventFired === false) {
	    eventFired = true;


		$(".step-1").addClass('active');

	    // Automatic slider
	    (function getNextClass(){

			setTimeout(function(){
				if(currClass !== stepClasses[5]){
					currClass = $("div.step.active").attr('class').split(' ').reverse()[1];
	    			nextClass = stepClasses[stepClasses.indexOf(currClass)+1];

					$("."+currClass).removeClass('active');
					$("."+nextClass).addClass('active');
					currClass = nextClass;

					getNextClass();
				}
			}, 2000);
		})();
	 }

	});

});
