###[Demo](http://apkostka.com/jquery_slider)

### Getting Started
This is a simple jQuery plugin that will go through the &lt;li&gt;'s in the specified &lt;div&gt; and create a slideshow.  The necessary files to include are slider.js and slider.css, anything else in the repo is for the purposes of demonstration.  You can use images, html, or any other content you can think of in the slides.  Include the following with your CSS files in the &lt;head&gt; of the document:

```html
<link rel="stylesheet" type="text/css" href="slider.css"/>
```

And the following just before the &lt;/body&gt; element:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
<script src="slider.js"></script>
```

Of course, if you already include the jQuery library, you can leave that out.

The markup for the slideshow should look as follows:

```html
<div class="slider" data-time="1000" data-interval="2000" data-height="300" data-width="960">
<ul>
  <li><img src="images/slide1.png"/></li>
	<li><img src="images/slide2.png"/></li>
	<li><img src="images/slide3.png"/></li>
</ul>
</div>
```

You can see all the available options as 'data-' attributes of the &lt;div&gt; element.  The available options are as follows:

* data-duration (integer) : The duration(speed) of the slide animation.
* data-interval (integer) : The interval between animations.  This is reset when the user clicks on one of the slide control buttons.
* data-height (integer) : The height of the slider area.
* data-width: The width of the slider area.