$(document).ready(function(){
	$.fn.gallerySplash = function(){
		var gallery = $(this),
			imageHolder = $(">ul",gallery),
			allImg = $(">ul>li",gallery).length,
			nextImg=true,
			stepImg= $(">ul>li",gallery).eq(0).width(),
			arrayImg = [],
			sliceImagePop,
			sliceImageShift,
			imgPosition,
			animateState = true,
			showGallery = false,
			tweenTime = 0;
			
		init();
		function init(){	
			$(">ul>li" , gallery).each(function(i){
				imgPosition =  Math.ceil(i-(allImg/2));
				arrayImg[i] = imgPosition;
			})
			for (var i = 0; i < Math.ceil(allImg / 2); i++ ) {
				sliceImagePop = arrayImg.pop();
				arrayImg.unshift(sliceImagePop)
			}
			addButonsEventHandler();
			changeImageHandler();
		}
		function addButonsEventHandler(){
			$("#prev").click(function(){
				if(!animateState){
					nextImg=false;
					changeImageHandler();
				}
				return false;
			});
			$("#next").click(function(){
				if(!animateState){
					nextImg=true;
					changeImageHandler();
				}
				return false;		
			});
			
			$("#next").mouseenter(
				function(){
					$(this).find(">img").animate({left:-75}, 400, "easeOutCubic")
				}
			)
			$("#next").mouseleave(
			 	function(){
					$(this).find(">img").animate({left:6}, 400, "easeOutCubic")
				}
			)
			$("#prev").mouseenter(
				function(){
					$(this).find(">img").animate({left:6}, 400, "easeOutCubic")
				}
			)
			$("#prev").mouseleave(		
			 	function(){
					$(this).find(">img").animate({left:-75}, 400, "easeOutCubic")
				}
			)
			$(">ul>li>a",gallery).each(function(){
				$(this).prepend("<div class='imgOver'></div>");
			}).hover(function(){
				$(this).find("div").stop(true).fadeTo(500, 0.5)
			}, function(){
				$(this).find("div").stop(true).fadeTo(500, 0)
			}).fancybox({'speedIn'  : 300, 'speedOut'  : 300}).find("div").stop(true).fadeTo(0, 0)
		}
		function changeImageHandler(){
			animateState = true;
			if(showGallery){
				if(nextImg){
					sliceImageShift = arrayImg.shift();
					arrayImg.push(sliceImageShift);
				}else{
					sliceImagePop = arrayImg.pop();
					arrayImg.unshift(sliceImagePop);
				}
				}
			$(">ul>li" , gallery).each(function(i){
				if(arrayImg[i]<-3 || arrayImg[i]>3){
					$(this).css({zIndex:1})
				}else{
					$(this).css({zIndex:2})
				}
				$(this).animate({left:(arrayImg[i]*stepImg)}, tweenTime, "easeInOutExpo");
				
			})
			setTimeout(function(){	animateState = false;}, tweenTime);
			
			showGallery=true;
			tweenTime = 1000;
		}
	}
})