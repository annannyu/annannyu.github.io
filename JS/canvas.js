$(document).ready(function() {
	$("#slide-show .image:gt(0)").hide();
	setInterval(function() { 
  	$('#slide-show .image:first')
    	.fadeOut(1000)
    	.next()
    	.fadeIn(1000)
    	.end()
    	.appendTo('#slide-show');
	},  2000);
	$(".item-text p").hover(function(){
		$(this).toggleClass("button");
	});
	
});



