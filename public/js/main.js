

	$(document).ready(function () {
		$(function(){
            $('#portfolio').mixitup({
                targetSelector: '.item',
                transitionSpeed: 100
            });
        });
		// $(document).on("scroll", onScroll);
 
		// $('a[href^="#"]').on('click', function (e) {
		// 	e.preventDefault();
		// 	$(document).off("scroll");
 
		// 	$('a').each(function () {
		// 		$(this).removeClass('navactive');
		// 	})
		// 	$(this).addClass('navactive');
 
		// 	var target = this.hash;
		// 	$target = $(target);
		// 	$('html, body').stop().animate({
		// 		'scrollTop': $target.offset().top+2
		// 	}, 500, 'swing', function () {
		// 		window.location.hash = target;
		// 		$(document).on("scroll", onScroll);
		// 	});
		// });
	});
 
	// function onScroll(event){
	// 	var scrollPosition = $(document).scrollTop();
	// 	$('.nav li a').each(function () {
	// 		var currentLink = $(this);
	// 		var refElement = $(currentLink.attr("href"));
	// 		if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
	// 			$('ul.nav li a').removeClass("navactive");
	// 			currentLink.addClass("navactive");
	// 		}
	// 		else{
	// 			currentLink.removeClass("navactive");
	// 		}
	// 	});
	
       
    //     $(function(){
	// 		console.log('¿que es lo que hace en esta funcion')
    //         $('#portfolio').mixitup({
    //             targetSelector: '.item',
    //             transitionSpeed: 200
    //         });
    //     });

      
    
    // };
