$(function(){
	
	$(".bannerbox").css({"height":$(window).height()});
	$(".bannerbox ul li").css({"height":$(window).height()});
	var timer;
	$(window).resize(function() {
		clearTimeout(timer);
		timer = setTimeout(function() {
			$(".bannerbox").css({"height":$(window).height()});
			$(".bannerbox ul li").css({"height":$(window).height()});
		},40);
	});
	
	

    $("#demoImglist").find("li").each(function(){
        $(this).stop().hover(function(){ //当鼠标移上去时
 
            //它的兄弟图片透明度降到0.7
            $(this).siblings().find("img").stop().fadeTo("slow",0.8);            
            $(this).find("img").css( {transform:"scale(1.0)",opacity:1})
        },
        function(){ //当鼠标移出的时候
 
                //它的兄弟图片透明度回到0.7
            $(this).siblings().find("img").stop().fadeTo("slow",0.8);
            $(this).find("img").css({transform:"scale(0.7)",opacity:0.8})
        })
    });
       
		$("section.zall_newmind").hover(function(){
		   	$(this).find(".ide-pic").eq(0).animate(
				{ "top":"62%","left":"38%",opacity:1},300,function(){
		   			$(this).next().animate(
		   		{ "top":"62%","left":"52%",opacity:1},300,function(){
		   			$(this).next().animate(
		   			{ "top":"12%","left":"52%",opacity:1},300,function(){
						$(this).next().animate(
							{"top":"0","left":"25%",opacity:1})
		   			})    			
		   		})
				})
		   	})

		
		$("#mytab li").click(function(){
			$(this).addClass("liactive").siblings().removeClass();
			$("#mysection section#chianthink").fadeOut(500).eq($('#mytab li').index(this)).fadeIn(500); 
			var $height=$("#mysection section#chianthink").eq($('#mytab li').index(this)).height();
			$(".idealList").css("height",$height+"px")
			
		})
		
		var $height=$("#chianthink").height();		
		$(".idealList").css("height",$height+"px")
		
		$(window).resize(function(){
    	var $height=$("#chianthink").height();		
		$(".idealList").css("height",$height+"px")
     	
        })
		
		
		$("figure.recruitlist  img").mouseover(function(){   	
    	         $(this).animate({"margin-top":"-10px"})
    	         $(this).next().animate({"margin-top":"10px"})
        })
		$("figure.recruitlist  img").mouseout(function(){   	
    	         $(this).animate({"margin-top":"0"})
    	           $(this).next().animate({"margin-top":"0"})
        })
		
		
//		var st= document.documentElement.scrollTop;
		
})

































	


