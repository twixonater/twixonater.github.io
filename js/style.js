//when the page loads, the main descriptive text flows in ( HOW DO I MAKE THIS ONLY PLAY ON INITIAL LOAD?)
$(document).ready(function(){
	$(".work").slideDown(1200, function(){
		$(".skill").fadeIn(1200, function(){
			$(".portfolio").fadeIn(1200, function(){
				$(".resume").slideDown(1200, function(){
					$(".contact").fadeIn(1200, function(){
						$(".fadesout").hide(1200);
						$(".work").animate({paddingLeft: "5%", paddingBottom: "20px"},1200);
						$(".skill").animate({paddingLeft: "5%", paddingBottom: "20px"},1200);
						$(".portfolio").animate({paddingLeft: "5%", paddingBottom: "20px"},1200);
						$(".resume").animate({paddingLeft: "5%", paddingBottom: "20px"},1200);
						$(".contact").animate({paddingLeft: "5%", paddingBottom: "20px"},1200);
						$(".navitem").animate({fontSize: "30px"},1200, navItemFloat());
							removeOtherText();
							$(".sidenav").css({"float":"left","paddingLeft":"4%","width":"20%"});
							$(".homeitems").slideDown(1200);
							$(".artImage").hover(
								function(){
									$(".artImage").css({"background-image":"url('./images/gallery/bronze_tree_400x400_hovera.jpg')"});
								}, function (){
									$(".artImage").css({"background-image":"url('./images/gallery/bronze_tree_400x400.jpg')"});
								});
							$(".workImage").hover(
								function(){
									$(".workImage").css({"background-image": "url('./images/gallery/pinkleaves_400x400_hovera.jpg')"});
								}, function (){
									$(".workImage").css({"background-image": "url('./images/gallery/pinkleaves_400x400.jpg')"});
								})
							$(".contactImage").hover(
								function(){
									$(".contactImage").css({"background-image": "url('./images/gallery/tree_pond_400x400_hovera.jpg')"});
								}, function (){
									$(".contactImage").css({"background-image": "url('./images/gallery/tree_pond_400x400.jpg')"});
								});	
					});
				});
			});
		});
	});
});





//When you hover over .navitems, they will display the help text to what they contain
function navItemFloat(){
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
	 		$(".skill .navitem").text("What I can do");	
	 	}, function (){
	 		$(".skill .navitem").css({"opacity":"1"});
			$(".skill .navitem").text("Skills");
	 	});

 	$(".portfolio").hover(
 		function(){
 			$(".portfolio .navitem").css({"opacity":"0.5"});
 			$(".portfolio .navitem").text("Gallery");	
	 	}, function(){
	 		$(".portfolio .navitem").css({"opacity":"1"});
			$(".portfolio .navitem").text("Portfolio")
	 	});

 	$(".resume").hover(
	 	function() {
	 		$(".resume .navitem").css({"opacity":"0.5"});
	 		$(".resume .navitem").text("Download resume");	
	 	}, function(){
	 		$(".resume .navitem").css({"opacity":"1"});
			$(".resume .navitem").text("Resume")
	 	});	

 	$(".contact").hover(
 		function(){
	 		$(".contact .navitem").css({"opacity":"0.5"});
	 		$(".contact .navitem").text("Let's Collaborate");	
 		}, function (){
 			$(".contact .navitem").css({"opacity":"1"});
			$(".contact .navitem").text("Contact")
 		});
};	



// // When you click on a nav item, it shows the information for that section
//This function resets all content items back to hidden
function removeOtherText (){
	$(".homeitems").hide();
	$(".workhistory").hide();
	$(".skillset").hide();
	$(".portfolioitems").hide();
	$(".resumeHelpText").hide();
	$(".contactForm").hide();
	$(".modalgallery").css({"background": "rgba(0,0,0,0)"});
	$(".logo").css("color","black");
	$(".navitem").css("color","black");
	undoHideBoxes();
};

//When you click on the logo, it takes you to main screen
$(".logo").on("click", function(){
	removeOtherText();
	$(".sidenav").css({"float":"left","paddingLeft":"4%","width":"20%"});
	$(".homeitems").slideDown(1200);
	$("")
	$(".artImage").hover(
		function(){
			$(".artImage").css({"background-image":"url('./images/gallery/bronze_tree_400x400_hovera.jpg')"});
		}, function (){
			$(".artImage").css({"background-image":"url('./images/gallery/bronze_tree_400x400.jpg')"});
		});
	$(".workImage").hover(
		function(){
			$(".workImage").css({"background-image": "url('./images/gallery/pinkleaves_400x400_hovera.jpg')"});
		}, function (){
			$(".workImage").css({"background-image": "url('./images/gallery/pinkleaves_400x400.jpg')"});
		})
	$(".contactImage").hover(
		function(){
			$(".contactImage").css({"background-image": "url('./images/gallery/tree_pond_400x400_hovera.jpg')"});
		}, function (){
			$(".contactImage").css({"background-image": "url('./images/gallery/tree_pond_400x400.jpg')"});
		});

});

$(".artImage").on("click", function(){
	removeOtherText();
	$(".sidenav").css({"float":"left","paddingLeft":"4%","width":"20%"});
	$(".modalgallery").css({"background": "rgba(255,255,255,0.5)"});
	$(".portfolioitems").slideDown(1200);
	$(".portfolioitems").css({"display":"inline-block"});
	$(".logo").css("color","#C0C0C0");
	$(".navitem").css("color","#C0C0C0");
});

$(".workImage").on("click", function(){
	removeOtherText();
	$(".sidenav").css({"float":"left","paddingLeft":"4%","width":"20%"});
	$(".workhistory").slideDown(1200);
	$(".workhistory").css({"display":"inline-block"});
});

$(".contactImage").on("click", function(){
	removeOtherText();
	$(".sidenav").css({"float":"left","paddingLeft":"4%","width":"20%"});
	$(".contactForm").slideDown(1200);
	$(".contactForm").css({"display":"inline-block"});
});	

// $(".displayNewContent").trigger('play');
// $(".displayNewContent").trigger('pause');

//When you click on Work, it will show Work History
$(".work").on("click", function() {
	removeOtherText();
	$(".sidenav").css({"float":"left","paddingLeft":"4%","width":"20%"});
	$(".workhistory").slideDown(1200);
	$(".workhistory").css({"display":"inline-block"});	
});


//When you click on skill, it will show skills
$(".skill").on("click", function(){
	removeOtherText();
	$(".sidenav").css({"float":"left","paddingLeft":"4%","width":"20%"});
	$(".skillset").slideDown(1200);
	$(".skillset").css({"display":"inline-block"});
});


//When you click on Portfolio, it will show the portfolio items in a grid
$(".portfolio").on("click", function(){
	removeOtherText();
	$(".sidenav").css({"float":"left","paddingLeft":"4%","width":"20%"});
	$(".modalgallery").css({"background": "rgba(255,255,255,0.5)"});
	$(".portfolioitems").slideDown(1200);
	$(".portfolioitems").css({"display":"inline-block"});
	$(".logo").css("color","#C0C0C0");
	$(".navitem").css("color","#C0C0C0");
});

// When you click on a gallery item, it enlarges in a lightbox
$(".portbox").on("click", function() {
	hideBoxes();
	$(".imagenav").css({"display":"block"})
	$(".galleryLarge").fadeIn(1200);
	$(".galleryLarge").css({"display":"block"})
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
	});		



function hideBoxes (){
	$(".portbox").addClass("tiles").removeClass("portbox");
	}

function undoHideBoxes (){
	$(".tiles").addClass("portbox").removeClass("tiles");
	}
// When a user clicks on Resume, they open my resume in a new tab

$(".resume").on("click", function(){
	removeOtherText();
	$(".sidenav").css({"float":"left","paddingLeft":"4%","width":"20%"});
	$(".resumeHelpText").slideDown(1200);
	$(".resumeHelpText").css({"display":"inline-block"});	
	$(".downloadRes").on("click", function(){
		window.open("./images/SamoMillerDavis-DigitalPM.2018_v2.pdf")
	});
});

//Contact Form

$(".contact").on("click", function(){
	removeOtherText();
	$(".sidenav").css({"float":"left","paddingLeft":"4%","width":"20%"});
	$(".contactForm").slideDown(1200);
	$(".contactForm").css({"display":"inline-block"});	
});