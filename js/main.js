$(document).ready(function(){	
	$(window).load(function(){
		$("#galleryHolder").gallerySplash();
		$("#contacts>ul>li>a").overButtons({});
   	 	var content=$("section"),
  	  		nav=$("header > nav"),
   			animationState = false,
 			MSIE = ($.browser.msie) && ($.browser.version <= 8),
 			splashPage = "#!/gallery",
	 		changeDuration = 0;
	 		changeDelay = 0,
 			
  	 	//menu  			
	   	$("header > nav > ul").superfish({
	   		hoverClass: "sfHover",
	     	delay:       100,
	      	speed:       400,
	       	autoArrows:  false,
	        dropShadows: false
	   });
	  	nav.navs({
	  		useHash:true,
	  		defHash:splashPage,
	 		hover:true,
	  		hoverIn:function(li){
	  			if(animationState==false){	
	  				if (!li.hasClass('sfHover')) {
	  					$(">a", li).stop(true).animate({color:"#b82053"}, 500, "easeInOutCubic");
  					}
				}
	 		},
	  		hoverOut:function (li){
	  			if(animationState==false){
			 		if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
			 			$(">a", li).stop(true).animate({color:"#ffffff"}, 500, "easeInOutCubic");
	 				}
		 		}
	 		}
	  	}) 	
	  	//content switch
	  	content.tabs({
	  		show:0,
	  		defHash:splashPage,
	  		actFu:function(_){
	  			$("section>ul").stop(true).delay(changeDelay).animate({height:0}, changeDuration, "easeInOutCubic", function(){
	  				_.li.css({display:'none'})
	 	  			if(_.curr) {
	  	  				_.curr.css({display:'block', top:-500}).stop(true).delay(300).animate({top:0}, 500, "easeOutCubic");	  	  				
	 			   	}
	 			   	if(_.curr.index()!=0){
	 			   		changeDuration = 600;
	 			   		changeDelay = 200;
	 			   		$("section>ul").stop(true).animate({height:506}, changeDuration, "easeInOutCubic");
					}else{
						changeDuration = 0;
						changeDelay = 0;
					}
	  			});
	  			if(_.prev) {
	  				_.prev.stop(true).animate({top:-500}, 500, "easeInCubic")
	  			}
	  		},
	  		preFu:function(_){
				_.li.css({display:'none', top:-500})
	  		}
	  	});
	  	nav.navs(function(n){
 			content.tabs(n);
	  	});
	 	setTimeout(hideSpinner, 0)
		function hideSpinner (){
			$("#spinner").animate({opacity:0}, 800, "easeOutCubic", function(){$("#spinner").remove()});
			$("header").css({top:-185}).delay(400).animate({top:0}, 800, "easeOutExpo");
			$("footer").css({bottom:-160}).delay(400).animate({bottom:0}, 800, "easeOutExpo");
			$("#next").css({bottom:-160}).delay(400).animate({bottom:75}, 800, "easeOutExpo");
		}	$("#prev").css({bottom:-160}).delay(400).animate({bottom:75}, 800, "easeOutExpo");
   	});
})