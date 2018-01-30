$('.head_search button').click(function(){
		
		if($('.head_search input').val().length){
			alert('逗你呢！怎么可能搜到东西,还'+$('.head_search input').val());
		}else{
			alert('请输入要搜索的东西，比如"帅哥，美女"等');
		}
});
var sc=$(window).scrollTop();
$('.return').click(function(){
	 $('body,html').animate({scrollTop:0},1000);
	
});


$('.fy li').click(function(){
	$('.fy li').css('background', '#ffffff');
	$('.fy li').css('color', '#000000');
	$(this).css('background', '#EB1B23');
	$(this).css('color', '#ffffff');
	
});

$('.head_search .t2').click(function(){
	$('.login').css('display','block');
});
$('.mistake').click(function(){
	$('.login').css('display','none');
});
$('.login_lo button').click(function(){
	var sz=/[0-9]/;
	var mima=/A-9/;
	var $input1=$('.login_lo .input1').val();
	var $input2=$('.login_lo .input2').val();
		if($input1!=''&&sz.test($input1)){
			alert('成功')
		}else{
			alert('请输入数字')
		}
	
});

/*function lbt(){//轮播
	
		i=0
	setInterval(function(){
		i++
		$('.banner img').fadeOut("slow");
		$('.banner img').eq(i).fadeIn("slow");
			if(i>=$('.banner img').length-1){
				i=0
			}
	},2000)
};*/

$('.navigation1 a').click(function(){
	$('.navigation1 a').css('color','#ffffff');
	$(this).css('color','#EB1B23')
	
})
