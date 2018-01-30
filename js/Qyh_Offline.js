		i=0
	setInterval(function(){
		i++
		$('.banner img').fadeOut("slow");
		$('.banner img').eq(i).fadeIn("slow");
			if(i>=$('.banner img').length-1){
				i=0
			}
	},2000)
