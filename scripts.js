var slideIndex = 1;
document.addEventListener('load', showDivs(slideIndex));

function currentDiv(n) {
	showDivs(slideIndex = n);
}

var test_external = []

function showDivs(n) {
	var i;
	var images = document.getElementsByClassName("slideshow__display-image");
	test_external = images;

	if (n > images.length) {slideIndex = 1};
	if (n < 1) {slideIndex = images.length};
	
	for (i = 0; i < images.length; i++) {
		images[i].style.display = "none";
	}
	images[slideIndex - 1].style.display = "block";
}



// document.addEventListener('load', {
// 	var images = document.getElementsByClassName("slideshow__display-image");
// });
