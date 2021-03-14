
//burger menu, mobile menu
$(function() {
	$('.icon-menu').on("click", function(){
		$(this).toggleClass('active');
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('stopscroll');
	});

});

