$(".js-drop-block-toggler").on("click", function(e){
	e.preventDefault();
	let $parent = $(this).parents(".js-drop-block");
	let $content = $parent.find(".js-drop-block-content");

	if($parent.hasClass('is-open') ){
		$parent.removeClass('is-open');
		$content.slideUp(300);
	}else{
		$(".js-drop-block").removeClass('is-open');
		$(".js-drop-block").find(".js-drop-block-content").slideUp(300);
		$parent.addClass('is-open');
		$content.slideDown(300);
	}
});

$(".js-switch-btn").on("click", function(e){
	e.preventDefault();
	let $this = $(this);

	if($this.hasClass('is-active')) return;

	let target = $this.attr('data-switch'),
	$parent = $this.parents(".js-switch-wrapper"),
	$targetElems = $parent.find(`.js-switch-value[data-switch-value=${target}]`);


	$('.js-switch-btn').removeClass('is-active');
	$('.js-switch-value').removeClass('is-active');
	$this.addClass('is-active');
	$targetElems.addClass('is-active');

});