new Vue({
	el:'.slice',//类名
	data:{			//数据
		content1:[
			{
				imag:"image/Qyh_prductcore_lunbo_guo1.jpg",
				p:"Zwilling EcoQuick II锅具<br />￥1568",
				p1:"￥1538"
			},
			{
				imag:"image/Qyh_prductcore_lunbo_guo1.jpg",
				p:"Zwilling EcoQuick II锅具<br />￥1568",
				p1:"￥1568"
			},
			{
				imag:"image/Qyh_prductcore_lunbo_guo1.jpg",
				p:"Zwilling EcoQuick II锅具<br />￥1568",
				p1:"￥1558"
			},
			{
				imag:"image/Qyh_prductcore_lunbo_guo4.jpg",
				p:"Zwilling EcoQuick II锅具<br />￥1568",
				p1:"￥1168"
			},
			{
				imag:"image/Qyh_prductcore_lunbo_guo4.jpg",
				p:"Zwilling EcoQuick II锅具<br />￥1568",
				p1:"￥158"
			},
			{
				imag:"image/Qyh_prductcore_lunbo_guo4.jpg",
				p:"Zwilling EcoQuick II锅具<br />￥1568",
				p1:"￥3548"
			},
			{
				imag:"image/Qyh_prductcore_lunbo_guo3.jpg",
				p:"Zwilling EcoQuick II锅具<br />￥1568",
				p1:"￥1458"
			},
			{
				imag:"image/Qyh_prductcore_lunbo_guo3.jpg",
				p:"Zwilling EcoQuick II锅具<br />￥1568",
				p1:"￥1458"
			},
			{
				imag:"image/Qyh_prductcore_lunbo_guo3.jpg",
				p:"Zwilling EcoQuick II锅具<br />￥1568",
				p1:"￥158"
			},
		]
	},
	methods:{}
});
function lbt1(){
				i=0;
		var cd=$('.carousel').children().length * 600
		$('.carousel').css('width', cd)
						$('.carousel3').click(function(){
						i++
						if(i>=$('.carousel li').length){
							i=0	
						}
							console.log(i)
						$('.carousel').finish().animate({'left':-i*600},500)
					})

				$('.carousel2').click(function(){
					i--
					if(i<0){
						i=$('.carousel li').length-1
					}
					console.log(i)
					$('.carousel').finish().animate({'left':-i*600},500)
				
				
				})	
			function Time(){
					$timer=setInterval(function(){
					i++
					$('.carousel').finish().animate({'left':-i*600},500)
					if(i>=$('.carousel li').length-2){
								i=0	
							}
					
				},2000)
			}
			Time()
		$('.carousel li').hover(
			function(){
				clearInterval($timer)
			},
			function(){
				Time()
			}
		)
};

		

$('.category01 td').click(function(){
		$('.category01 td').css('border','none')
		$(this).css('border-bottom','1px solid #ff0000')
	
})
$('.category02 td').click(function(){
		$('.category02 td').css('border','none')
		$(this).css('border-bottom','1px solid #ff0000')
	
})
$('.category03 td').click(function(){
		$('.category03 td').css('border','none')
		$(this).css('border-bottom','1px solid #ff0000')
	
})
$('.category04 td').click(function(){
		$('.category04 td').css('border','none')
		$(this).css('border-bottom','1px solid #ff0000')
	
})




$('.praise li').click(function(){
	$('.praise li').css({background:'#ffffff',color:'#000000'})
	$(this).css({background:'#ff0000',color:'#FFFFFF'})
})
