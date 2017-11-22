$(function(){
	var carouselList = $('#carousel ul'),
		autoPlay = setInterval(changeSlide, 5000),
		firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last"),
		l = document.getElementById('slide_left'),
		r = document.getElementById('slide_right');
	function changeSlide() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}
	function moveFirstSlide() {
		firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last"),
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}	
	$(r).on('click', function changeSlideR(){
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
		clearInterval(autoPlay);
	})	
	function moveLastSlide() {
		firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last"),
		firstItem.before(lastItem);
		carouselList.css({marginLeft:0});
	}
	$(l).on('click', function changeSlideL(){
		carouselList.animate({'marginLeft': 400}, 500, moveLastSlide);
		clearInterval(autoPlay);
	})
});