//On scrolling, the text will move on hero section
$(window).scroll(function(){
	if ($(window).width() <= 480) {
	    if($(window).scrollTop() > 600) {
	        //CELLPHONE ANIMATE HERE

	    }
	} else if ($(window).width() > 480 && $(window).width() <= 1024) {
	    if($(window).scrollTop() > 480){
	        // TABLET ANIMATION HERE

	    }
	} else {
	    if ($(window).scrollTop() > 10) {
	        // DESKTOP ANIMATION HERE
	        $(".work").slideDown(1200, function(){
				$(".skill").fadeIn(1200, function(){
					$(".art").fadeIn(1200, function(){
						$(".resume").slideDown(1200, function(){
							$(".contact").fadeIn(1200, function(){
							})
						})
					})
				})			
			}) 	
		} 
} 
});













// on clicking of the hamburger, show the nav by animating it's left value to 0
$(".hamburger").on("click", function(){
	$(".navitems").animate({bottom: "20%"});
	$(".navitems").css({"display":"block","font-size":"2em"});
	$("nav").css({"display":"block", "color":"white", "padding-top": "10%", "margin-left":"2%"});
	$("body").css({"background":"linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('../images/web_background.jpg')"});
	$(".logo").css("color","white");
});	


$(".close-nav").on("click", function(){
	$("nav").hide();
	$("body").css({"background":"url('../images/web_background.jpg')"});
	$(".logo").css("color","black");
});


// When you click on a gallery item, it enlarges in a lightbox
	var totalImages = $("img").length;
	var currentImageIndex;
	$(".prev").on("click", function(){
	currentImageIndex = $(".active").prev().index();
	if (currentImageIndex >= 0 && currentImageIndex < totalImages) {
	   $(".active").removeClass("active").prev().addClass("active");
	  }
	}); $(".next").on("click", function(){
		  	currentImageIndex = $(".active").next().index();
		  if (currentImageIndex >= 0 && currentImageIndex < totalImages) {
		    $(".active").removeClass("active").next().addClass("active");
		  }
		});


//When you hover over .navitems, they will display the help text to what they contain
 	$(".worknav").hover(
	 	function() {
	 		$(".work .navitems").css({"opacity":"0.5"});
	 		$(".work .navitems").text("Where I've Worked");	
	 	}, function () {
	 		$(".work .navitems").css({"opacity":"1"});
	 		$(".work .navitems").text("Work");
	 	});

 	$(".skillsnav").hover(
	 	function() {
	 		$(".skills .navitems").css({"opacity":"0.5"});
	 		$(".skills .navitems").text("What I can do");	
	 	}, function (){
	 		$(".skills .navitems").css({"opacity":"1"});
			$(".skills .navitems").text("Skills");
	 	});

 	$(".artnav").hover(
 		function(){
 			$(".art .navitems").css({"opacity":"0.5"});
 			$(".art .navitems").text("Gallery");	
	 	}, function(){
	 		$(".art .navitems").css({"opacity":"1"});
			$(".art .navitems").text("Art")
	 	});

 	$(".resumenav").hover(
	 	function() {
	 		$(".resume .navitems").css({"opacity":"0.5"});
	 		$(".resume .navitems").text("Download resume");	
	 	}, function(){
	 		$(".resume .navitems").css({"opacity":"1"});
			$(".resume .navitems").text("Resume")
	 	});	

 	$(".contactnav").hover(
 		function(){
	 		$(".contact .navitems").css({"opacity":"0.5"});
	 		$(".contact .navitems").text("Let's Collaborate");	
 		}, function (){
 			$(".contact .navitems").css({"opacity":"1"});
			$(".contact .navitems").text("Contact")
 		});

// When you Click on the Download REsume, Download Resume takes you to a new window
$(".downloadRes").on("click", function(){
		window.open("./images/SamoMillerDavis-DigitalPM.2018_v2.pdf")
	});


//When you click on Samo Davis, it will take you to the top of the page

$(".logo").on("click", function(){
	window.location.href = "index.html";
});
