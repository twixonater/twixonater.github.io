// Home navigation to side navigation
//When a user clicks on a nav item from the "home", the side nav will stack.
var topNav=true;

$(".topnavitem").on("click", sideNav);

function sideNav(){
	if (topNav) {
		$(".topnavitem").removeClass("topnavitem").addClass("sidenavitem");
		$(".logolanding").removeClass("logolanding").addClass("logoheader");
		topNav=false;
		} 
	else {
		$(".sidenavitem").removeClass("sidenavitem").addClass("topnavitem");
		$(".logoheader").removeClass("logoheader").addClass("logolanding");
		topNav=true;
		}
};



