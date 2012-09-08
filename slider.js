jQuery(document).ready(function(){

	/*Get the width and height data- attributes*/
	var slider = jQuery('div.slider');
	var sliderUL = slider.children('ul');
	var slides = sliderUL.children('li');
	var height = slider.attr('data-height');
	var width = slider.attr('data-width');
	var speed = parseInt(slider.attr('data-time'));
	var interval = parseInt(slider.attr('data-interval'));
	var activeSlide = 0;
	var sliderCSS = {
		'height': height,
		'width': width
	}

	/*Creates an array from the slides and adds slideNo attributes*/
	var slideArr = jQuery.makeArray(slides);
	var number = 0;
	jQuery.each(slideArr, function(index, slide) {
		number++;
		jQuery(slide).attr('data-slideNo', index + 1);
	});
	slides.last().attr('data-slideNo', 0);

	/*Create slideControl buttons*/
	slider.after('<ul class="sliderControls"></ul>');
	var buttonCount = 0;
	jQuery('ul.sliderControls').html('<li data-target="0"></li>');
	while (buttonCount < number - 1) {
		buttonCount++;
		jQuery('ul.sliderControls li:last').after('<li data-target="'+buttonCount+'"></li>');
	}
	var sliderControl = jQuery('ul.sliderControls li');
	jQuery('ul.sliderControls li:first').addClass('active');


	/*Sets the width and height of slider div and ul*/
	slider.css(sliderCSS);
	sliderUL.css('width', width * number);
	slides.css('width', width);

	/*Where the magic happens*/
	var changeSlide = function(newSlide){
		sliderUL.animate({
			left: -(width * newSlide)
		}, speed, function(){
		});
		jQuery('ul.sliderControls li').removeClass('active');
		jQuery('ul.sliderControls li[data-target="'+newSlide+'"]').addClass('active');
	}
	
	var refreshInterval = setInterval(function(){
		if (activeSlide >= number - 1) {
			newSlide = 0;
			activeSlide = 0;
		} else {
			newSlide = activeSlide + 1;
			activeSlide++;
		}
		changeSlide(newSlide);
	}, interval);
	
	sliderControl.click(function(){
		newSlide = jQuery(this).attr('data-target');
		changeSlide(newSlide);
		activeSlide = parseInt(jQuery(this).attr('data-target'));
		window.clearInterval(refreshInterval);
		refreshInterval = setInterval(function(){
			if (activeSlide >= number - 1) {
				newSlide = 0;
				activeSlide = 0;
			} else {
				newSlide = activeSlide + 1;
				activeSlide++;
			}
			changeSlide(newSlide);
		}, interval);
	});
});