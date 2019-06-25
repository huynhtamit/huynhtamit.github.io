 $(function(){
 	$vitri=$('.edu').offset().top;
 	$vitri=$vitri-100;
 	$('.xuong,.kn').click(function(event) {
 		$('body,html').animate({scrollTop:$vitri});
 	});
})  
 