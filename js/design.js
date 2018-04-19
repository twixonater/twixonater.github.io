
$(window).scroll(function(){
	var intro = $(".contact").offset().top;
	var workTitle = $(".workhistory").offset().top;
	var skillsTitle = $(".skillset").offset().top;
	var artTitle = $(".artgallery").offset().top;
	var bioTitle = $(".resumedownload").offset().top;
	var contactTitle = $(".contactform").offset().top;
	$(".work").animate({opacity: 1},1200, function(){
				$(".skill").animate({opacity: 1},1200, function(){
					$(".art").animate({opacity: 1},1200, function(){
						$(".resume").animate({opacity: 1},1200, function(){
							$(".contact").animate({opacity: 1},1200							
							)
						})
					})
				})			
			})
	if ($(window).scrollTop()> intro && $(window).scrollTop() < workTitle && $(window).width() > 1024) {
		$("nav").css({"display":"flex", "justify-content":"space-around"});

	} else if ($(window).scrollTop() > workTitle && $(window).scrollTop() < skillsTitle){
		$(".largeWork").animate({
					opacity: 1
				}, 1000);

	} else if ($(window).scrollTop() > skillsTitle - 300 && $(window).scrollTop() < artTitle){ 
		$(".largeSkills").animate({
					opacity: 1
				}, 1000);

	} else if ($(window).scrollTop() > artTitle - 100 && $(window).scrollTop() < bioTitle){ 
		$(".largeArt").animate({
					opacity: 1
				}, 1000);

	} else if ($(window).scrollTop() > bioTitle - 100 && $(window).scrollTop() < contactTitle){ 
		$(".largeBio").animate({
					opacity: 1
				}, 1000);	
	} else if ($(window).scrollTop() >= contactTitle - 100) { 
		$(".largeContact").animate({
					opacity: 1
				}, 1000);

	}
});

//If a .navitems is clicked prior to activating the scroll of the nav coming down, activate Nav in new section
$(".navitems").on("click", function(){
	if ($(window).width() > 1024){
	$("nav").css({"display":"flex","justify-content":"space-around"});
	} else {
		$("nav").css({"display":"none"});
	}
})


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


// When a user clicks on an image, it enlarges with the caption text; get me the image in artImage that corresponds with the same index number.
	$(".tiles").on("click", function() {
		$(".modal").css({"display":"block"});
		var i;
		var imageNo = $(this).index();
		$(".artImage img").eq(imageNo).addClass("active");
		$(".captiontext p").eq(imageNo).addClass("active");
	  	$(".thumbguide img").eq(imageNo).addClass("active");

	});

	$(".close").on("click", function(){
		$(".modal").css({"display":"none"})
		$(".active").removeClass("active")
	})

// When you click on a gallery item, it enlarges in a lightbox
	var totalImages = $("img").length;
	var lastImage = ($("img").length -1);
	var currentImageIndex;
	$(".prev").on("click", function(){
		currentImageIndex = $(".active").prev().index();
		if (currentImageIndex > 0 && currentImageIndex < totalImages) {
	   	$(".active").removeClass("active").prev().addClass("active");
	  } else if (currentImageIndex <= 0) {
	  	console.log(currentImageIndex);
	  	currentImageIndex = lastImage;
	  	$(".active").removeClass("active");
	  	$(".artImage img").last().addClass("active");
	  	$(".captiontext p").last().addClass("active")
	  	$(".thumbguide img").last().addClass("active");
	  }
	});


	 $(".next").on("click", function(){
		  	currentImageIndex = $(".active").next().index();
		  if (currentImageIndex >= 0 && currentImageIndex <= lastImage) {
		    $(".active").removeClass("active").next().addClass("active");
		  } else if (lastImage === totalImages - 1) { 
		  	currentImageIndex = 0;
			$(".active").removeClass("active");
		  	$(".artImage img").first().addClass("active");
		  	$(".captiontext p").first().addClass("active");
		  	$(".thumbguide img").first().addClass("active");
		  }
		});

//When you hover over .navitem, they will display the help text to what they contain
 	$(".work").hover(
	 	function() {
	 		$(".work .navitem").css({"opacity":"0.5"});
	 		$(".work .navitem").text("Where I've Worked");	
	 	}, function () {
	 		$(".work .navitem").css({"opacity":"1"});
	 		$(".work .navitem").text("Work");
	 	});

 	$(".skill").hover(
	 	function() {
	 		$(".skill .navitem").css({"opacity":"0.5"});
	 		$(".skill .navitem").text("My Skills Are");	
	 	}, function (){
	 		$(".skill .navitem").css({"opacity":"1"});
			$(".skill .navitem").text("Skills");
	 	});

 	$(".art").hover(
 		function(){
 			$(".art .navitem").css({"opacity":"0.5"});
 			$(".art .navitem").text("Gallery");	
	 	}, function(){
	 		$(".art .navitem").css({"opacity":"1"});
			$(".art .navitem").text("Fine Art")
	 	});

 	$(".resume").hover(
	 	function() {
	 		$(".resume .navitem").css({"opacity":"0.5"});
	 		$(".resume .navitem").text("Résumé");	
	 	}, function(){
	 		$(".resume .navitem").css({"opacity":"1"});
			$(".resume .navitem").text("Bio")
	 	});	

 	$(".contact").hover(
 		function(){
	 		$(".contact .navitem").css({"opacity":"0.5"});
	 		$(".contact .navitem").text("Email");	
 		}, function (){
 			$(".contact .navitem").css({"opacity":"1"});
			$(".contact .navitem").text("Contact")
 		});

// When you click on a .navitem, it will take you to that section ,and the title will animate

	$(".worknav").on("click", function(){
		resetTitles();
		$(".largeWork").animate({opacity: 1}, 1000);
	});

	$(".skillsnav").on("click", function(){
		resetTitles();
		$(".largeSkills").animate({opacity: 1}, 1000);
	});

	$(".artnav").on("click", function(){
		resetTitles();
		$(".largeArt").animate({opacity: 1}, 1000);
	});

	$(".resumenav").on("click", function(){
		resetTitles();
		$(".largeBio").animate({opacity: 1}, 1000);
	});

	$(".contactnav").on("click", function(){
		resetTitles();
		$(".largeContact").animate({opacity: 1}, 1000);
	});


function resetTitles(){
	$(".titleLarge").css({"opacity":"0"});
};	

// When you click on a .navitems, it will take you to that section ,and the title will animate

	$(".work").on("click", function(){
		resetTitles();
		$(".largeWork").animate({opacity: 1}, 1000);
	});

	$(".skill").on("click", function(){
		resetTitles();
		$(".largeSkills").animate({opacity: 1}, 1000);
	});

	$(".art").on("click", function(){
		resetTitles();
		$(".largeArt").animate({opacity: 1}, 1000);
	});

	$(".resume").on("click", function(){
		resetTitles();
		$(".largeBio").animate({opacity: 1}, 1000);
	});

	$(".contact").on("click", function(){
		resetTitles();
		$(".largeContact").animate({opacity: 1}, 1000);
	});


function resetTitles(){
	$(".titleLarge").css({"opacity":"0"});
};	


// When you Click on the Download REsume, Download Resume takes you to a new window
$(".downloadRes").on("click", function(){
		window.open("./images/SamoMillerDavis-DigitalPM.2018_v2.pdf")
	});


