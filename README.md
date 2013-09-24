### Getting Started
This is a simple jQuery plugin that will go through elements in the specified container and create a slideshow.  The only necessary files are jQuery and slider.js.  You can use images, html, or any other content you can think of in the slides.


Include the following just before the &lt;/body&gt; element:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
<script src="slider.js"></script>
```

Of course, if you already include the jQuery library, you can leave that out.

Initialize the slider using:

```javascript
$('.slider').slider({
	transition: 'slide',	//'slide' or 'fade', fade not yet implemented
	duration:		1000,			//Speed of the transition animation in milliseconds
	interval:		5000			//Interval between transitions in milliseconds
});
```

##Author
[@apkostka](http://github.com/apkostka)

##License
slider.js is a FREE script and is licensed under the following:
http://www.opensource.org/licenses/mit-license.php

Theme files, their HTML, CSS, JavaScript/jQuery and images are licensed under the following unless otherwise stated:
http://www.opensource.org/licenses/mit-license.php

The sequence.js script and its dependencies are &copy; 2013 - 2014 [Andrew Kostka](http://www.apkostka.com) unless otherwise specified.