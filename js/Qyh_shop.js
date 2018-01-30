
function JQ(){
		var l=1
		$('.shuliang .but2').each(function(i){
			$('.shuliang .but2').eq(i).click(function(){
				$('.shuliang .span').eq(i).text(l++)
			})
			$('.shuliang .but1').eq(i).click(function(){
				$('.shuliang .span').eq(i).text(l--)
			})
		
	})
		$('.total button').click(function(){
			alert('成功')
		})
}

