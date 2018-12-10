$(document).ready(function(){

	$(".services-carousel").on("initialized.owl.carousel", function(){
		setTimeout(function(){
			servicesCarousel()
		}, 100);
	});

	$('.services-carousel').owlCarousel({
		loop: true,
    	nav: true,
    	dots: false,
    	items: 3,
    	smartSpeed: 700,
    	navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
    	responsiveClass: true,
    	autoplay: true,
    	responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        992:{
	            items:3
        	}
    	}
	});

	function servicesCarousel(){
		$('.service-item').each(function(){
			var ths = $(this),
			thsh = ths.find('.service-item__content').outerHeight();
			ths.find('.service-item__img').css('min-height', thsh);
		});
	}servicesCarousel();

	function onResize(){
		$(".service-item__content").equalHeights();
	}onResize();
	window.onresize = function() {onResize()};

	// ----------FORM

	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.thanks').addClass('thanks_active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$(th).find('.thanks').removeClass('thanks_active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$('select').selectize();

	$('.review-carousel').owlCarousel({
		items:1,
		autoplay: true,
		smartSpeed: 1000,
		loop: true
	});

	$('.partners-carousel').owlCarousel({
		smartSpeed: 2000,
		autoplay: true,
		responsive:{
	        0:{
	            items:2,
	            nav: false
	        },
	        768:{
	            items:3
	        },
	        992:{
	            items:4
        	}
        },
		loop: true,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});

});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});