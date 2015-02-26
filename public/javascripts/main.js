var index = 0;
$(document).ready(function(){
	$('#banner>ul>li').css('display','none');
	setInterval(function() {
		showimage();
	},5000);
})
function showimage(){
	$('#banner>ul>li').fadeOut(800,function(){
		$('#banner').css("background","none");
		$('.b'+index).fadeIn(800);
		$('#loading-ico>ul>li').removeClass("active");
		$('#loading-ico>ul>li').addClass("unload");
		$('.load'+index).removeClass("unload").addClass("active")
	});
	
	index = (index + 1)%3;
}