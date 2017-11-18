$(function(){
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 10000);
	function changeSlide() { 
		var moveFirstSlide;
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});	
	}
	var l = document.getElementById('slide_left'),
		r = document.getElementById('slide_right');
		
	$(l).on('click', function moveLeft() {
		var moveFirstSlide;
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:0});
	}); 
	$(r).on('click', function moveRight() {
		var moveLastSlide;
		carouselList.animate({'marginLeft':-400}, 500, moveLastSlide);
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	});
});