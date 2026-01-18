$(document).ready(function(){
	$("#menu ul.sub").hide();
	$("#menu ul.click li").click(function(){
		$("ul",this).stop().slideToggle("fast");
	});
});

/* 
교육과정페이지에서 course 클릭하기 (primary_steam.html, primary_culture.html, seconary_steam.html, secondary_culture.html)
*/

var courseArr = 4;
for (var i = 0; i < courseArr; i++){
	$(".courseNo" + i).click(function(){
		window.location = 'courseMath.html';  
	});
}

var courseArr = 4;
for (var i = 0; i < courseArr; i++){
	$(".courseCulNo" + i).click(function(){
		window.location = 'courseDesign.html';  
	});
}
