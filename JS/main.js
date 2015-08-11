$(document).ready(function(){
	$(".header .col-md-3:nth-child(1)").click(function(){
		$(".middle").animate({
    	left: "+1440px",
  	},1500)
		setTimeout(function(){
			$(".slide video").show();
		},2000)
		setTimeout(function(){
    	document.getElementById("myVideo").play();
		},2000);
		setTimeout(function(){
			$(".slide-1").show();
    	$(".slide-1").typed({
    		strings: ["<em>Hello,My name is Che An Yu, I am graduated from national Don Hwa university,Even thought I am a beginner in coding,But I got a lot passion in it,And I think I am a fast learner,Cause since May after I quited my job,I started to learing code by myself,And I am really like it,I got a lot of joy and sucessful feeling from it,Thank you for spending times to watchig this.</em>"],
      	typeSpeed: 1
  		})      
		},7000)
		setTimeout(function(){
			$(".slide video").hide();
		},7000)
		
	});

	$(".header .col-md-3:nth-child(2)").click(function(){
		$(".middle").animate({
    	left: "+2880px",
  	},1700)
	});

  $(".header .col-md-3:nth-child(3)").click(function(){
		$(".middle").animate({
    	left: "+4320px",
  	},1700)
  	$(".bottom , .footer").hide();
	});

	$(".header .col-md-3:nth-child(4)").click(function(){
		$(".middle").animate({
			left: "0px",
		},1500);
		$(".bottom , .footer").show(2500);
	});


	$(".scratch,.scratch-2,.scratch-3").wScratchPad({
  	size: 50,                
  	bg: '',               
    fg: '#080808',
    showCursor: true,
	});

	// $(function(){
	// $(".scratch img").okzoom({
	// 	width: 100,
	// 	height: 100,
	// 	border: "1px solid black",
	// 	shadow: "0 0 5px #000"
	// });
	// });


	$(".flipbook").turn({
		autoCenter: true
	});

});


