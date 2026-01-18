/* 세부 페이지들 헤더의 팝업메뉴 버튼 기능입니다. */

$(".btn1").hover(function(){

    $(this).css('cursor', 'pointer');
	$(".btn2-hover").css('display', 'none');
    $(".btn3-hover").css('display', 'none');
    $(".btn4-hover").css('display', 'none');
    $(".btn6-hover").css('display', 'none');
	$(".btn1-hover").css('opacity', '0');
	$(".btn1-hover").animate({
		height: "200px",
		opacity: "1",
		}, 500);
	$(".btn1-hover").css('display', 'block');
	}, function(){
		$(".btn1-hover").animate({
			height: "0px",
			opacity: "0",
			}, 500);
		setTimeout(function(){
			$(".btn1-hover").css('display', 'none');
		},200);
	}
);

$(".btn2").hover(function(){

    $(this).css('cursor', 'pointer');
	$(".btn1-hover").css('display', 'none');
    $(".btn3-hover").css('display', 'none');
    $(".btn4-hover").css('display', 'none');
    $(".btn6-hover").css('display', 'none');
	$(".btn2-hover").css('opacity', '0');
	$(".btn2-hover").animate({
		height: "200px",
		opacity: "1",
		}, 500);
	$(".btn2-hover").css('display', 'block');
	}, function(){
		$(".btn2-hover").animate({
			height: "0px",
			opacity: "0",
			}, 500);
		setTimeout(function(){
			$(".btn2-hover").css('display', 'none');
		},200);
	}
);

$(".btn3").hover(function(){

    $(this).css('cursor', 'pointer');
	$(".btn1-hover").css('display', 'none');
    $(".btn2-hover").css('display', 'none');
    $(".btn4-hover").css('display', 'none');
    $(".btn6-hover").css('display', 'none');
	$(".btn3-hover").css('opacity', '0');
	$(".btn3-hover").animate({
		height: "200px",
		opacity: "1",
		}, 500);
	$(".btn3-hover").css('display', 'block');
	}, function(){
		$(".btn3-hover").animate({
			height: "0px",
			opacity: "0",
			}, 500);
		setTimeout(function(){
			$(".btn3-hover").css('display', 'none');
		},200);
	}
);
$(".btn4").hover(function(){

    $(this).css('cursor', 'pointer');
	$(".btn1-hover").css('display', 'none');
    $(".btn2-hover").css('display', 'none');
    $(".btn3-hover").css('display', 'none');
    $(".btn6-hover").css('display', 'none');
	$(".btn4-hover").css('opacity', '0');
	$(".btn4-hover").animate({
		height: "200px",
		opacity: "1",
		}, 500);
	$(".btn4-hover").css('display', 'block');
	}, function(){
		$(".btn4-hover").animate({
			height: "0px",
			opacity: "0",
			}, 500);
		setTimeout(function(){
			$(".btn4-hover").css('display', 'none');
		},200);
	}
);
$(".btn6").hover(function(){

    $(this).css('cursor', 'pointer');
	$(".btn1-hover").css('display', 'none');
    $(".btn2-hover").css('display', 'none');
    $(".btn3-hover").css('display', 'none');
    $(".btn4-hover").css('display', 'none');
	$(".btn6-hover").css('opacity', '0');
	$(".btn6-hover").animate({
		height: "200px",
		opacity: "1",
		}, 500);
	$(".btn6-hover").css('display', 'block');
	}, function(){
		$(".btn6-hover").animate({
			height: "0px",
			opacity: "0",
			}, 500);
		setTimeout(function(){
			$(".btn6-hover").css('display', 'none');
		},200);
	}
);

$(".btn6_loggedin").hover(function(){

    $(this).css('cursor', 'pointer');
	$(".btn1-hover").css('display', 'none');
    $(".btn2-hover").css('display', 'none');
    $(".btn3-hover").css('display', 'none');
    $(".btn4-hover").css('display', 'none');
	$(".btn6-hover").css('opacity', '0');
	$(".btn6-hover").animate({
		height: "200px",
		opacity: "1",
		}, 500);
	$(".btn6-hover").css('display', 'block');
	}, function(){
		$(".btn6-hover").animate({
			height: "0px",
			opacity: "0",
			}, 500);
		setTimeout(function(){
			$(".btn6-hover").css('display', 'none');
		},200);
	}
);

/* courseMath.html
*/
// $('.tables.table-vertical.courseDetail > thead').remove(); 
// $('.hiddenThead tr').remove();

/* main page */



	// $(".btn1-hover").on({"mouseenter":function(){},"mouseleave":function(){
	// 	if($(".btn1-hover").css("display") == "block")
	// 	{
	// 		setTimeout(function(){
	// 		$(".btn1-hover").css('display', 'none');
	// 		$(".btn1-hover").css('height', '0');
	// 		},1);
	// 	}
	// }
// });



// $(".btn1-hover").on({"mouseenter":function(){
   
//     },"mouseleave":function(){
//         if($(".btn1-hover").css("display") == "block")
//         {
// 			$(".btn1-hover").animate({opacity:0},400);
// 			setTimeout(function(){
// 				 $(".btn1-hover").css('display', 'none');
// 			},1);
//         };
//     }
// });
// $(".m1").on({ "mouseover":function() {
//     $(this).css('cursor', 'pointer');
//         if($(".btn1-hover").css("display") == "none")
//      	{
//             $(".btn2-hover").css('display', 'none');
//             $(".btn3-hover").css('display', 'none');
//             $(".btn6-hover").css('display', 'none');
//             $(".btn1-hover").css('opacity', '0');
//             $(".btn1-hover").animate({width: "toggle"}, 1, "linear");
//             $(".btn1-hover").animate({opacity:1},300);
//             $(".btn1-hover").css('display', 'block');
//         };
//     },"mouseout":function(){
//         $(".btn1-hover").css('display', 'block');
//     }
// });
// $(".btn1-hover").on({"mouseenter":function(){
   
//     },"mouseleave":function(){
//         if($(".btn1-hover").css("display") == "block")
//         {
//             setTimeout(function(){
//             $(".btn1-hover").css('display', 'none');
//             },1);
//         }
//     }
// });

// $(".m2").on({ "mouseover":function() {
//     $(this).css('cursor', 'pointer');
//         if($(".btn2-hover").css("display") == "none")
//      	{
//             $(".btn1-hover").css('display', 'none');
//             $(".btn3-hover").css('display', 'none');
//             $(".btn6-hover").css('display', 'none');
//             $(".btn2-hover").css('opacity', '0');
//             $(".btn2-hover").animate({width: "toggle"}, 1, "linear");
//             $(".btn2-hover").animate({opacity:1},300);
//             $(".btn2-hover").css('display', 'block');
//         };
//     },"mouseout":function(){
//         $(".btn2-hover").css('display', 'block');
//     }
// });
// $(".btn2-hover").on({"mouseenter":function(){
   
//     },"mouseleave":function(){
//         if($(".btn2-hover").css("display") == "block")
//         {
//             setTimeout(function(){
//             $(".btn2-hover").css('display', 'none');
//             },1);
//         }
//     }
// });

// $(".m3").on({ "mouseover":function() {
//     $(this).css('cursor', 'pointer');
//         if($(".btn3-hover").css("display") == "none")
//      	{
//             $(".btn1-hover").css('display', 'none');
//             $(".btn2-hover").css('display', 'none');
//             $(".btn6-hover").css('display', 'none');
//             $(".btn3-hover").css('opacity', '0');
//             $(".btn3-hover").animate({width: "toggle"}, 1, "linear");
//             $(".btn3-hover").animate({opacity:1},300);
//             $(".btn3-hover").css('display', 'block');
//         };
//     },"mouseout":function(e){
//         $(".btn3-hover").css('display', 'block');
//     }
// });
// $(".btn3-hover").on({"mouseenter":function(){
   
//     },"mouseleave":function(){
//         if($(".btn3-hover").css("display") == "block")
//         {
//             setTimeout(function(){
//             $(".btn3-hover").css('display', 'none');
//             },1);
//         }
//     }
// });

// $(".m7-my").on({ "mouseover":function() {
//     $(this).css('cursor', 'pointer');
//         if($(".btn6-hover").css("display") == "none")
//      	{
//             $(".btn2-hover").css('display', 'none');
//             $(".btn3-hover").css('display', 'none');
//             $(".btn1-hover").css('display', 'none');
//             $(".btn6-hover").css('opacity', '0');
//             $(".btn6-hover").animate({width: "toggle"}, 1, "linear");
//             $(".btn6-hover").animate({opacity:1},300);
//             $(".btn6-hover").css('display', 'block');
//         };
//     },"mouseout":function(e){
//         $(".btn6-hover").css('display', 'block');
//     }
// });
// $(".btn6-hover").on({"mouseenter":function(){
   
//     },"mouseleave":function(){
//         if($(".btn6-hover").css("display") == "block")
//         {
//             setTimeout(function(){
//             $(".btn6-hover").css('display', 'none');
//             },1);
//         }
//     }
// });
        // var $tgPoint = $(e.target);
        // var $popArea = $tgPoint.hasClass('.btn1-hover');
        // if (!$popArea && !$popCallBtn1)
        // {
        //     setTimeout(function(){
        //     $(".btn1-hover").css('display', 'none');
        //     },1);
        // }

// $(".m1").hover(function () {
//  	$(this).css('cursor', 'pointer');
//     if($(".btn1-hover").css("display") == "none")
//  	{
//         $(".btn2-hover").css('display', 'none');
//         $(".btn3-hover").css('display', 'none');
//         $(".btn6-hover").css('display', 'none');
//         $(".btn1-hover").css('opacity', '0');
//         $(".btn1-hover").animate({width: "toggle"}, 1, "linear");
//         $(".btn1-hover").animate({opacity:1},300);
//         $(".btn1-hover").css('display', 'block');j
//     };
// });
// $(".m2").hover(function () {
//     $(this).css('cursor', 'pointer');

//    if($(".btn2-hover").css("display") == "none")
//     {
//         $(".btn1-hover").css('display', 'none');
//         $(".btn3-hover").css('display', 'none');
//         $(".btn6-hover").css('display', 'none');
//         $(".btn2-hover").css('opacity', '0');
//         $(".btn2-hover").animate({width: "toggle"}, 1, "linear");
//         $(".btn2-hover").animate({opacity:1},300);
//         $(".btn2-hover").css('display', 'block');
//    };
// });
// $(".m3").hover(function () {
//     $(this).css('cursor', 'pointer');

//    if($(".btn3-hover").css("display") == "none")
//     {
//         $(".btn1-hover").css('display', 'none');
//         $(".btn2-hover").css('display', 'none');
//         $(".btn6-hover").css('display', 'none');
//         $(".btn3-hover").css('opacity', '0');
//         $(".btn3-hover").animate({width: "toggle"}, 1, "linear");
//         $(".btn3-hover").animate({opacity:1},300);
//         $(".btn3-hover").css('display', 'block');
//    };
// });

// $(".m7-my").hover(function () {
//     $(this).css('cursor', 'pointer');

//    if($(".btn6-hover").css("display") == "none")
//     {
//         $(".btn1-hover").css('display', 'none');
//         $(".btn2-hover").css('display', 'none');
//         $(".btn3-hover").css('display', 'none');
//         $(".btn6-hover").css('opacity', '0');
//         $(".btn6-hover").animate({width: "toggle"}, 1, "linear");
//         $(".btn6-hover").animate({opacity:1},300);
//         $(".btn6-hover").css('display', 'block');
//    };
// });

/* 서브메뉴 없애기 */
// $('body').on('click', function(e){
// 	var $tgPoint = $(e.target);
//     var $popArea = $tgPoint.hasClass('.btn1-hover');
//     //var $tgPoint = $(e.target);
// 	// var $popCallBtn = $tgPoint.hasClass('m1');
// 	//var $popArea = $tgPoint.hasClass('.btn1-hover');
// 	if ( /*!$popCallBtn && */!$popArea ) {
//         setTimeout(function(){
//             // $(".btn1-hover").animate({opacity:0},300);
//             $(".btn1-hover").css('display', 'none');
//             // $(".btn2-hover").animate({opacity:0},300);
//             $(".btn2-hover").css('display', 'none');
//             // $(".btn3-hover").animate({opacity:0},300);
//             $(".btn3-hover").css('display', 'none');
//             // $(".btn6-hover").animate({opacity:0},300);
//             $(".btn6-hover").css('display', 'none');
// 	    },1);
// 	}
// });

// $('btn1-hover').mouseout(function(e){
//     setTimeout(function(){
//         $(".btn1-hover").css('display', 'none');
//     },1);
//     // var $tgPoint = $(e.target);
//     // var $popCallBtn1 = $tgPoint.hasClass('.nav-table pages');
//     // var $popArea = $tgPoint.hasClass('.btn1-hover');
//     // if (!$popArea  && !$popCallBtn1)
//     // {
       
// 	// }
// });

// $('btn2-hover').mouseout(function(e){
//     var $tgPoint = $(e.target);
//     var $popCallBtn1 = $tgPoint.hasClass('.nav-table pages');
//     var $popArea = $tgPoint.hasClass('.btn2-hover');
//     if (!$popArea  && !$popCallBtn1)
//     {
//         setTimeout(function(){
//             $(".btn2-hover").css('display', 'none');
//             // $(".btn3-hover").animate({opacity:0},300);
// 	    },1);
// 	}
// });
// $('btn3-hover').mouseout(function(e){
//     var $tgPoint = $(e.target);
//     var $popCallBtn1 = $tgPoint.hasClass('.nav-table pages');
//     var $popArea = $tgPoint.hasClass('.btn6-hover');
//     if (!$popArea  && !$popCallBtn1)
//     {
//         setTimeout(function(){
//             $(".btn6-hover").css('display', 'none');
//             // $(".btn3-hover").animate({opacity:0},300);
// 	    },1);
// 	}
// });

// $('btn6-hover').mouseout(function(e){
//     var $tgPoint = $(e.target);
//     var $popCallBtn1 = $tgPoint.hasClass('.nav-table pages');
//     var $popArea = $tgPoint.hasClass('.btn3-hover');
//     if (!$popArea  && !$popCallBtn1)
//     {
//         setTimeout(function(){
//             $(".btn3-hover").css('display', 'none');
//             // $(".btn3-hover").animate({opacity:0},300);
// 	    },1);
// 	}
// });


