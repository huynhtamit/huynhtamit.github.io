 $(function(){
 	
 	$('.menutop ul li a.nav-link').click(function(event) {
 		event.preventDefault();
 		phantu =$(this).attr('href');
 		$('body,html').animate({scrollTop:$(phantu).offset().top});
 	});
 	$('.mphai').children().children('last-child').click(function(event) {
 		$('body,html').animate({scrollTop:$('.comment').offset().top});
 	});
})  
 