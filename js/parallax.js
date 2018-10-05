$(window).scroll(function() {
	parallax();
})

function parallax() {
	var tScroll = $(window).scrollTop();

	$('.textured-namebanner').css('background-position', 'center '+(-tScroll*0.75)+'px')

	$('.section-one').css('background-position', 'center '+(tScroll*0.15)+'px')

	$('.pimg1').css('background-position', 'center '+(-tScroll*1.25)+'px')

	// $('.textured-namebanner').css('top', +(wScroll*0.75)+'px')


	// $('.thumbnails').css('top',
	// 	200-(wScroll*0.25)+'em')


}



// $(window).scroll(function(e) {
//   parallax();
// })


// function parallax() {
//   var scroll = $(window).scrollTop();
//   var screenHeight = $(window).height();

//   $('.parallax--bg').each(function() {
//     var offset = $(this).offset().top;
//     var distanceFromBottom = offset - scroll - screenHeight
    
//     if (offset > screenHeight && offset) {
//       $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.5) +'px');
//     } else {
//       $(this).css('background-position', 'center ' + (( -scroll ) * 0.5) + 'px');
//     }
//   })
// }