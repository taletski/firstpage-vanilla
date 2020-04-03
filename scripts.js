var slideIndex = 1;
document.addEventListener('load', gallety_navShowDivs(slideIndex));


function gallery__navCurrentDiv(n) {
	gallety_navShowDivs(slideIndex = n);
}

var test;

function gallety_navShowDivs(n) {
	var i;
	var images = document.getElementsByClassName("slideshow__display-image");
	var dots = document.getElementsByClassName("slideshow__nav-circle");
	test = dots;

	if (n > images.length) {slideIndex = 1};
	if (n < 1) {slideIndex = images.length};
	
	for (i = 0; i < images.length; i++) {
		images[i].style.display = "none";
	}
	images[slideIndex - 1].style.display = "block";
	for (i = 0; i < dots.length; i++) {
		dots[i].className.baseVal = dots[i].className.baseVal.replace(" slideshow__nav-circle_white", "");
		/* WARNING: in this case dots refer to svg objects, therefore, 
		.className returns SVGAnimatedString instead of a simple string.
		THIS IS NOT SUPPORTED by Chrome for Android and by IE.
		This also requires to refer to modify the baseVal of the string*/
	}
	dots[slideIndex - 1].className.baseVal += " slideshow__nav-circle_white";
}

