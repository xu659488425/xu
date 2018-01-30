$('.great_1').each(function(i){
		$(this).hover(
			function(){
				$('.great_1_zzc').finish().eq(i).fadeIn("slow");
			},
			function(){
				$('.great_1_zzc').finish().eq(i).fadeOut("slow");
			}
			
		)
	
})


