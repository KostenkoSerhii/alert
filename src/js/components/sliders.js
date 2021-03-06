import Slick from 'slick-carousel';
function sliders(){
	let prevBtn = `<div class="btn-prev"><i><?xml version="1.0" encoding="utf-8"?>
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	viewBox="0 0 192 320" enable-background="new 0 0 192 320" xml:space="preserve">
	<polygon points="192,300.6 171.3,320 0,160 171.3,0 192,19.3 41.5,160 "/>
	</svg></i>
	</div>`;
	let nextBtn = `<div class="btn-next"><i><?xml version="1.0" encoding="utf-8"?>
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	viewBox="0 0 192 320" enable-background="new 0 0 192 320" xml:space="preserve">
	<polygon points="0,19.4 20.7,0 192,160 20.7,320 0,300.7 150.5,160 "/>
	</svg></i>
	</div>`;

	$('.js-slider').slick({
		slidesToShow: 1,
		dots: false,
		prevArrow: prevBtn,
		nextArrow: nextBtn,
		responsive: [
		]
	});

	$('.js-main-prod-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		asNavFor: '.js-nav-prod-slider',
		arrows: false,
	});
	$('.js-nav-prod-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		asNavFor: '.js-main-prod-slider',
    // dots: true,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true,

  });
}
module.exports = sliders;