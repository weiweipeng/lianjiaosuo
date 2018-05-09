$(document).ready(function () {
    //tab下划线移动
 //    var leftall=[];
	// $(".tabs>a").on("click",function() {
 //        let left=(parseInt($(this).parent(".tabs").index()))*10+23;
 //        leftall[0]=left;
	//     $(".line").animate({left:left+"%"});
	// });
	// $(".tabs>a").on({
	// 	mouseover:function(){
	// 		console.log("aaa");
	// 		$(".line1").show();
	// 		let left=(parseInt($(this).parent(".tabs").index()))*10+23;
	// 	    leftall[0]=left;
	// 	    $(".line1").animate({left:left+"%"});
	// 	},
	// 	mouseleave:function(){
	// 		console.log("aaa");
	// 		$(".line1").hide();
	// 		$(".line1").animate({left:23+"%"});
	// 	}
	// });
	$(".tabs>a").on("click",function(){
		$(this).addClass("active").parent(".tabs").siblings(".tabs").find("a").removeClass("active");
	});
	
	var bo;
	$(".picList li").on({

		mouseenter:function(){
				var that=this;
				meta(that,50,300);
                   
				$(this).find('.container_subtitle').fadeOut();
				$(this).find(".mask").hide();
					
				},
		mouseleave:function(){
			    var that=this;
				meta(that,150,230);
			  
			    $(this).find('.container_subtitle').fadeIn();
			    $(this).find(".mask").show();
		}
	});
	function meta(that,top1,top2){
            $(that).find(".container_title").stop(true,true);
            $(that).find(".container_date").stop(true,true);
            $(that).find('.container_subtitle').stop(true,true);
            $(that).find(".mask").stop(true,true);
            $(that).find(".container_title").animate({"top":top1},500);
			$(that).find(".container_date").animate({"top":top2},500);
	}
	$('.sec1_list').on("click",function(){
		let i=$(this).index();
		$(this).addClass("sec1_active").siblings().removeClass('sec1_active');
		$(".sec1_right").eq(i).addClass("sec1_riac").siblings(".sec1_right").removeClass("sec1_riac");
	});
});