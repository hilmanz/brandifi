$(document).ready(function() { 
	// popup
	$("a.showPopup").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		$(".popup").fadeOut();
		var targetID = jQuery(this).attr('href');
		$("#bg-popup").fadeIn();
		$(targetID).fadeIn();
		$(targetID).addClass('visible');
 	    return false;
	});
});