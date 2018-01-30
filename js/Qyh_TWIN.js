$('.image_xiao img').each(function(i){
	$('.image_xiao img').eq(i).click(function(){
		$('.image_da img').css('display','none')
		$('.image_da img').eq(i).css('display','block')
	})
})

	$('.fenqi1').click(function(){
		$('.fenqi1').css('border','1px solid #CCCCCC')
		$(this).css('border','1px solid #ff0000')
	})

