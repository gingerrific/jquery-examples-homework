"use strict";

// 15 different jquery methods
// using .click() to trigger each method for a demo

//// Example One //////////////////////////////////
//// .hover() & .animate() ////////////////////////

$('.toggle-class-button').click(function (){
	$('.toggle-class-example').find('li').toggleClass('swipe-box'); // adds new class that also contain pseudo elements
});

//// Example Two //////////////////////////////////
//// .hide()  /////////////////////////////////////


$('.hide-example-button').click(function () { // initiates demo
	$('.circle').show('slow'); //resets circles when clicking "demo button"
	$('.circle').click(function(){
		$(this).hide('slow'); //hides clicked circle
	});
});

//// Example Three ////////////////////////////////
//// .clone() /////////////////////////////////////

$('.clone-example-button').click(function () {
	$('.purple-button').click(function () {
		$('.box-one').first().clone().prependTo('.clone-example');
	});
	$('.pink-button').click(function () {
		$('.box-two').first().clone().prependTo('.clone-example');
	});
});

// 4 - 
// 5 - 
// 6 - 
// 7 - 
// 8 - 
// 9 - 
// 10 - 
// 11 - 
// 12 - 
// 13 - 
// 14 - 
// 15 - 