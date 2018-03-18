	let $header  = $('.js-header');
	$(window).scroll(function(){
		let scroll = $(this).scrollTop();
		if(scroll > 0){
			$header.addClass('is-scroll');
		}else{
			$header.removeClass('is-scroll');
		}
	});