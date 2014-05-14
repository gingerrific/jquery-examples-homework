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

var cloneExampleClone = $('.clone-example').clone();

$('.clone-example-button').click(function () {
	$('.purple-button').click(function () { //clicking the purple button prepends a clone of the purple box
		$('.box-one').first().clone().prependTo('.clone-example');
	});
	$('.pink-button').click(function () { //clicking the pink button prepends a clone of the pink box
		$('.box-two').first().clone().prependTo('.clone-example');
	});
});

// on double click a clone of the initial state is restored and the initial click state is passed to avoid having to single click to start again.
$('.clone-example-button').dblclick(function () {
	$('.clone-example').replaceWith(cloneExampleClone);
	$('.purple-button').click(function () {
		$('.box-one').first().clone().prependTo('.clone-example');
	});
	$('.pink-button').click(function () {
		$('.box-two').first().clone().prependTo('.clone-example');
	});
});

//// Example Four /////////////////////////////////
//// .on() ////////////////////////////////////////

$('.on-example-button').click(function (){
	$('.on-inner-box').on('mouseenter', function () {
		$(this).css('border','4px solid #5FF756');
	});
	$('.on-inner-box').on('mouseleave', function () {
		$(this).css('border','4px solid #FF7947');
	});
});



//// Example Five /////////////////////////////////
//// .animate() ///////////////////////////////////

$('.animation-example-button').click(function (){
	$('.up-button').click(function() {
		$( ".animated-box" ).animate({ 'top': '-=20px' }, "fast" );
	});
	$('.down-button').click(function() {
		$( ".animated-box" ).animate({ 'top': '+=20px' }, "fast" );
	});
	$('.right-button').click(function() {
		$( ".animated-box" ).animate({ 'left': '+=20px' }, "fast" );
	});
	$('.left-button').click(function() {
		$( ".animated-box" ).animate({ 'left': '-=20px' }, "fast" );
	});
});


//// Example Six //////////////////////////////////
//// mousemove .text() event.pageX/Y //////////////

$('.mouse-location-button').click(function (){
	$('.example-box').on( 'mousemove', function( event ) {
		$('.mouse-reporter-one').text( "Offset from the left of the page: " + event.pageX);
		$('.mouse-reporter-two').text( "Offset from the top of the page: " + event.pageY + '  (including scroll)');
	});
});

//// Example Seven ////////////////////////////////
//// .animate() ///////////////////////////////////


// 8 - 
// 9 - 
// 10 - 
// 11 - 
// 12 - 
// 13 - 
// 14 - 
// 15 - 