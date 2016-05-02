# jqImgBlurEffects
jQuery Plugin For SVG Blur Effects On Image
### Implementation
This plugin was created on the concept un-blurring a part of image using SVG. Read [this article] (http://blog.sodhanalibrary.com/2016/04/unblur-part-of-image-using-svg.html) for detailed expanation
### Quick Demo
[Click here] (http://demo.sodhanalibrary.com/jqImgBlurEffects/demo_introduction.html) to see demo. You will understand, what you can do with this plugin
###Import jQuery
```js
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
```
###Import jqImgBlurEffects JS & CSS  
```js
<link rel="stylesheet" href="jqImgBlurEffects/jqImgBlurEffects.css" />
<script src="jqImgBlurEffects/jqImgBlurEffects.js"></script>
```
###HTML markup
```html
<img src="https://lh3.googleusercontent.com/-INnJOJVc12I/VyGFAq6JAWI/AAAAAAAADlA/oz5-_fc85_A26pvDD2rNk26_gr-WqoqCgCCo/s825/paypal-mafia.jpg" class="myImg" width="800px"/>
```
###JS Code
Observe below syntax. You will get better idea after seeing examples
```js
var myOptns = {
     stdDeviation:<blur factor - positive integer>,
		   brightness : <to increase and decrease of brightness of blurred part - float value - between 0 to 1>,
     sintros:{
       intromode:<must be true for step by step introduction. false will not allow introduction mode>,
       delay:<delay time from one step to another step>,
       transitionDelay:<animation time for transition>,
       srectangles:<array of rectangle objects>,
       scircles:<array of circle objects>,
       sellipses:<array of ellipse objects>,
       spaths:<array of path objects>,
       spolygons:<array of polygon objects>,
       stexts:<array of text objects>
     },
     srectangles:<array of rectangle objects>,
     scircles:<array of circle objects>,
     sellipses:<array of ellipse objects>,
     spaths:<array of path objects>,
     spolygons:<array of polygon objects>,
     stexts:<array of text objects>,
     smouseover : {
	      circle : <circle object>,
	      ellipse : <ellipse object>,
	      rectangle : <rectangle object>
     },
     sclick : {
	      circle : <circle object>,
	      ellipse : <ellipse object>,
	      rectangle : <rectangle object>
     }
};

$(".myImg").jqImgBlur(myOptns);
```
##Un-Blur In A Shape
This plugin supports svg shapes - circle, ellipse, polygon, path , rectangle. Read [this article](http://blog.sodhanalibrary.com/2016/05/jqimgblureffects-unblur-part-of-image_1.html) for detailed explanation
###Examples
1. Circle - [DEMO] (http://demo.sodhanalibrary.com/jqImgBlurEffects/demo_circle.html)
2. Ellipse - [DEMO] (http://demo.sodhanalibrary.com/jqImgBlurEffects/demo_ellipse.html)
3. Rectangle - [DEMO] (http://demo.sodhanalibrary.com/jqImgBlurEffects/demo_rect.html)
4. Path - [DEMO] (http://demo.sodhanalibrary.com/jqImgBlurEffects/demo_path.html)
5. Polygon - [DEMO] (http://demo.sodhanalibrary.com/jqImgBlurEffects/demo_polygon.html)
 

##Un-Blur On Mouse Over
This plugin supports svg shapes - circle, ellipse, rectangle for mouse-over functionaliy. Read [this article](http://blog.sodhanalibrary.com/2016/05/jqimgblureffects-unblur-part-of-image.html) for detailed explanation
###Examples
1. Circle - [DEMO] (http://demo.sodhanalibrary.com/jqImgBlurEffects/demo_circle_mouseover.html)
2. Ellipse - [DEMO] (http://demo.sodhanalibrary.com/jqImgBlurEffects/demo_ellipse_mouseover.html)
3. Rectangle - [DEMO] (http://demo.sodhanalibrary.com/jqImgBlurEffects/demo_rect_mouseover.html)
 

##Un-Blur On Click
This plugin supports svg shapes - circle, ellipse, rectangle for click functionaliy. Read [this article](http://blog.sodhanalibrary.com/2016/05/jqimgblureffects-unblur-part-of-image.html) for detailed explanation
###Examples
1. Circle - [DEMO] (http://demo.sodhanalibrary.com/jqImgBlurEffects/demo_circle_click.html)
2. Ellipse - [DEMO] (http://demo.sodhanalibrary.com/jqImgBlurEffects/demo_ellipse_click.html)
3. Rectangle - [DEMO] (http://demo.sodhanalibrary.com/jqImgBlurEffects/demo_rect_click.html)

##Introduction To Parts Of Image
This plugin supports svg shapes - circle, ellipse, rectangle for this functionaliy. Read [this article](http://blog.sodhanalibrary.com/2016/05/jqimgblureffects-step-by-step.html) for detailed explanation
###Examples
1. Circle - [DEMO] (http://demo.sodhanalibrary.com/jqImgBlurEffects/demo_introduction.html)

