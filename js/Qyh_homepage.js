		i=0
	setInterval(function(){
		i++
		$('.banner img').fadeOut("slow");
		$('.banner img').eq(i).fadeIn("slow");
			if(i>=$('.banner img').length-1){
				i=0
			}
	},2000)
	
	$('.cook2_1').each(function(i){
		
		$(this).click(function(){
			$('.image_1 img').css('display','none')
			$('.image_1 img').eq(i).css('display','block')
			console.log($('.image img').eq(i))
		})
	})
	$('.ulBt a').click(function(){
		$('.ulBt a').css('color','#444444')
		$(this).css('color','#EB1B23')
	})
