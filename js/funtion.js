
$(document).ready(function(){

		//skkity menubar
	
	$(".js_services").waypoint(function(direction){
		
		if(direction == "down"){
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky");
		}
		
	});
	
			//mix it up (portfolio sectiion)

	var mixer = mixitup('.contain');



	
});




//						MOBILE MENU OPEN CLOSS


function openNav(){
	$("#my_nav").css({
		width:"100%",
	});

	$(".show_nav a").css({
		display:"contents",
		textDecoration:"none"
	});
	
}


function closeNav(){
	$("#my_nav").css({
		width:"0%",
	})
	
	$(".show_nav a").css({
		display:"none",
	});
	
}



//  smoth animation 

$("a").on("click",function(){
	
	if(this.hash !== ""){
		event.preventDefault();
		
		var hash = this.hash;
		
		$("html,body").animate({
			scrollTop: $(hash).offset().top
		},100,function(){
		window.location.hash = hash;	
		});
	}
	
	
});




//							ACTIVE MENU BAR start





$(".btn1").click(function(){
	$(".btn1").addClass("active");
	$(".btn2").removeClass("active")
	$(".btn3").removeClass("active")
	$(".btn4").removeClass("active")
	$(".btn5").removeClass("active")
	$(".btn6").removeClass("active")
	$(".btn7").removeClass("active")
});


$(".btn2").click(function(){
	$(".btn2").addClass("active");
	$(".btn1").removeClass("active")
	$(".btn3").removeClass("active")
	$(".btn4").removeClass("active")
	$(".btn5").removeClass("active")
	$(".btn6").removeClass("active")
	$(".btn7").removeClass("active")
});


$(".btn3").click(function(){
	$(".btn3").addClass("active");
	$(".btn1").removeClass("active")
	$(".btn2").removeClass("active")
	$(".btn4").removeClass("active")
	$(".btn5").removeClass("active")
	$(".btn6").removeClass("active")
	$(".btn7").removeClass("active")
});


$(".btn4").click(function(){
	$(".btn4").addClass("active");
	$(".btn1").removeClass("active")
	$(".btn2").removeClass("active")
	$(".btn3").removeClass("active")
	$(".btn5").removeClass("active")
	$(".btn6").removeClass("active")
	$(".btn7").removeClass("active")
});


$(".btn5").click(function(){
	$(".btn5").addClass("active");
	$(".btn1").removeClass("active")
	$(".btn3").removeClass("active")
	$(".btn4").removeClass("active")
	$(".btn7").removeClass("active")
	$(".btn6").removeClass("active")
	$(".btn2").removeClass("active")
});


$(".btn6").click(function(){
	$(".btn6").addClass("active");
	$(".btn1").removeClass("active")
	$(".btn3").removeClass("active")
	$(".btn4").removeClass("active")
	$(".btn5").removeClass("active")
	$(".btn7").removeClass("active")
	$(".btn2").removeClass("active")
});


$(".btn7").click(function(){
	$(".btn7").addClass("active");
	$(".btn1").removeClass("active")
	$(".btn3").removeClass("active")
	$(".btn4").removeClass("active")
	$(".btn5").removeClass("active")
	$(".btn6").removeClass("active")
	$(".btn2").removeClass("active")
});





//							ACTIVE MENU BAR end








// 					REDIAL SCROLL ANIMATION START......


$('svg.radial-progress').each(function( index, value ) { 
  $(this).find($('circle.complete')).removeAttr( 'style' );
});


$(window).scroll(function(){
  $('svg.radial-progress').each(function( index, value ) { 
    // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
    if ( 
        $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
        $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
    ) {
        // Get percentage of progress
        percent = $(value).data('percentage');
        // Get radius of the svg's circle.complete
        radius = $(this).find($('circle.complete')).attr('r');
        // Get circumference (2πr)
        circumference = 2 * Math.PI * radius;
        // Get stroke-dashoffset value based on the percentage of the circumference
        strokeDashOffset = circumference - ((percent * circumference) / 100);
        // Transition progress for 1.25 seconds
        $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
    }
  });
}).trigger('scroll');





































