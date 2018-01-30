new Vue({
	el:'.content',
	data:{
		con:[
			{
				img:"image/Qyh_newsinformation02.jpg",
				headline:"全能厨师机强势来袭 德国双立人引领厨房新革命",
				content:"享誉世界的知名厨具品牌德国双立人于2014年春夏之际推出全新智能化产品——全能厨师机，凭借独具特色的创新思维及精湛的制作工艺，为咫尺厨房带来最新潮、最健康的烹煮方式，引领数字化时代的厨房新革命。",
			},
			{
				img:"image/Qyh_newsinformation03.jpg",
				headline:"全能厨师机强势来袭 德国双立人引领厨房新革命",
				content:"享誉世界的知名厨具品牌德国双立人于2014年春夏之际推出全新智能化产品——全能厨师机，凭借独具特色的创新思维及精湛的制作工艺，为咫尺厨房带来最新潮、最健康的烹煮方式，引领数字化时代的厨房新革命。",
			},
			{
				img:"image/Qyh_newsinformation04.jpg",
				headline:"全能厨师机强势来袭 德国双立人引领厨房新革命",
				content:"享誉世界的知名厨具品牌德国双立人于2014年春夏之际推出全新智能化产品——全能厨师机，凭借独具特色的创新思维及精湛的制作工艺，为咫尺厨房带来最新潮、最健康的烹煮方式，引领数字化时代的厨房新革命。",
			},
			{
				img:"image/Qyh_newsinformation02.jpg",
				headline:"全能厨师机强势来袭 德国双立人引领厨房新革命",
				content:"享誉世界的知名厨具品牌德国双立人于2014年春夏之际推出全新智能化产品——全能厨师机，凭借独具特色的创新思维及精湛的制作工艺，为咫尺厨房带来最新潮、最健康的烹煮方式，引领数字化时代的厨房新革命。",
			},
			
		]
	},
	methods:{}
	
	
	
});		
function lbt(){
	

	i=0
	setInterval(function(){
		i++
		$('.banner img').fadeOut("slow");
		$('.banner img').eq(i).fadeIn("slow");
			if(i>=$('.banner img').length-1){
				i=0
			}
	},2000)
};
$('.fy li').click(function(){
	$('.fy li').css('background', '#ffffff');
	$('.fy li').css('color', '#000000');
	$(this).css('background', '#EB1B23');
	$(this).css('color', '#ffffff');
	
});