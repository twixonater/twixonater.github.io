// Home navigation to side navigation
//When a user clicks on a nav item from the "home", the side nav will stack and move beneath the logo
$(".topnavitem").on("click", sideNav);

function sideNav(){
		$(".topnavitem").hide(1200);
		$(".logolanding").hide(1200);
		$("aside").slideDown(1200);
		$(".logoheader").slideDown(1200);	
};

//Home mode will always have the topnav 
$(".shomenav").on("click", function(){
	$(".topnavitem").slideDown(1200);
	$(".logolanding").slideDown(1200);
});


