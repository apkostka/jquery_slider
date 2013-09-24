/*!
 * jQuery Slider plugin
 * Original author: @apkostka
 * Licensed under the MIT license
 */

;(function($,window) {

	var defaults = {
		transition:		"slide",
		duration:			1000,
		interval:			3000
	};

	function Slider( element, options ) {

		var self = this;

		self.container = element;
		self.options = $.extend( {}, defaults, options);
    self._defaults = defaults;

    self.slides = $(self.container).children();

    self.init();

	};

	Slider.prototype = {

		//Initialize slider, set css and interval.
		init: function () {
			var self = this;

			self.container.css('position', 'relative');
			
			self.currentFrameID = 0;

			self.setCSS(0, function(){});

			window.setInterval(function() {
				self.next();
			}, self.options.interval);
		},

		// Go to next slide.
		next: function () {
			var self = this;

			var id = (self.currentFrameID !== (self.slides.length - 1)) ? self.currentFrameID + 1 : 0;
			self.goTo(id);
			
		},

		// Go to previous slide.
		prev: function () {
			var self = this;
			
			var id = (self.currentFrameID !== 0) ? self.currentFrameID - 1 : self.slides.length - 1;
			self.goTo(id);
		},

		// Change to slide with specified ID.
		goTo: function (id) {
			var self = this;

			if (self.currenFrameID !== id) {

				self.setCSS(self.currentFrameID, function() {

					$(self.slides[self.currentFrameID]).animate({
						left: -Math.abs(self.container.width())
					}, self.options.duration);

					$(self.slides[id]).animate({
						left: 0
					}, self.options.duration);

				});
			};

			self.currentFrameID = id;
		},

		/*  Reset slides to right side of current slide.
		 *  I need to rewrite using a better async method.
		 */
		setCSS: function(id, callback) {
			var self = this;

			self.slides.each(function(index, el){
				$(el).css({
					position:		'absolute',
					top:				0,
					left:				self.container.width()
				});
			});

			$(self.slides).removeClass('current-slide');
			
			$(self.slides[id])
				.addClass('current-slide')
				.css('left', 0);

			callback();
		},

		// TODO: Fill in destroy() method.
		destroy: function() {
			
		}

	}

	// Prevent reinitializing on single element.
	$.fn.slider = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'slider_init')) {
        $.data(this, 'slider_init', 
        new Slider( $(this), options ));
      }
    });
  };

})(jQuery,window);