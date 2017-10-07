//轮播图部分
var c = 0;
var s = 1;
function run(){
	c++;
	if (c==8) {
		c=0;
	}
	$("#flash .center .top .idens").eq(c).fadeIn().siblings('.idens').fadeOut();
	$("#flash .center .top ul li").eq(c).addClass('red').siblings('li').removeClass('red');
}
//定时器
var timer = setInterval(run,2000);
//鼠标移入
$("#flash .center .top ul li").mouseenter(function(){
	c=$(this).index();
	clearInterval(timer);
	tt = setTimeout(function(){
		$("#flash .center .top .idens").eq(c).fadeIn().siblings('.idens').fadeOut();
		$("#flash .center .top ul li").eq(c).addClass('red').siblings('li').removeClass('red');
	},100)
})
$("#flash .center .top ul li").mouseleave(function(){
	clearTimeout(tt);
})

$("#flash .center .top .jia").click(function(){
	c++;
	if (c==8) {
		c=0;
	}
	clearInterval(timer);
	$("#flash .center .top .idens").eq(c).fadeIn().siblings('.idens').fadeOut();
	$("#flash .center .top ul li").eq(c).addClass('red').siblings('li').removeClass('red');
})

$("#flash .center .top .jian").click(function(){
	c--;
	if (c<0) {
		c=7;
	}
	clearInterval(timer);
	$("#flash .center .top .idens").eq(c).fadeIn().siblings('.idens').fadeOut();
	$("#flash .center .top ul li").eq(c).addClass('red').siblings('li').removeClass('red');
})
$("#flash .center .top").mouseenter(function(){
	clearInterval(timer)
})
$("#flash .center .top").mouseleave(function(){
	timer = setInterval(run,2000);
})
//轮播图部分结束

//促销部分
$("#flash .right .chuxiao .top .cx").mouseenter(function(){
	$("#flash .right .chuxiao .top span").css({"transform":"translateX(0px)"})
})
$("#flash .right .chuxiao .top .gg").mouseenter(function(){
	$("#flash .right .chuxiao .top span").css({"transform":"translateX(52px)"})
})
$("#flash .right .chuxiao .top .titl").mouseenter(function(){
	var xuhao = $(this).index()
	$("#flash .right .chuxiao .bot .idens").eq(xuhao).show().siblings('.idens').hide();
})
//促销部分结束

//话费充值部分
$("#flash .right .bot2 .top2 .top_titl").mouseenter(function(){
	var xuhao = $(this).index();
	var width = xuhao*47+"px"; 
	$("#flash .right .bot2 .top2 span").css({"left":width});
	$("#flash .right .bot2 .idens").eq(xuhao).show().siblings('.idens').hide();
})

$("#flash .right .bot2 .idens .chongzhi a").mouseenter(function(){
	var xuhao = $(this).index();
	$(this).addClass('sty').siblings('a').removeClass('sty');
	$("#flash .right .bot2 .idens .idens_chil").eq(xuhao).show().siblings('.idens_chil').hide();
})
//话费充值部分结束

//机票部分
$("#flash .right .bot2 .idens .guoneijipiao a").mouseenter(function(){
	var xuhao = $(this).index();
	$(this).addClass('sty').siblings('a').removeClass('sty');
	$(".see_window .long").css({"left":xuhao*-190+"px"})
})

//酒店
$(".jiudian .guonei a").mouseenter(function(){
	var xuhao = $(this).index();
	$(this).addClass('sty').siblings('a').removeClass('sty');
	$(".see_window2 .long2").css({"left":xuhao*-190+"px"})
})
//酒店结束

//游戏
$(".youxi .dianka a").mouseenter(function(){
	var xuhao = $(this).index();
	$(this).addClass('sty').siblings('a').removeClass('sty');
	$(".see_window3 .long3").css({"left":xuhao*-190+"px"})
})
//游戏结束

//机票部分结束



//文本框设置
$("#search input[type=text]").focus(function(){
	if (this.value==this.defaultValue) {
		this.value='';
	}
})
$("#search input[type=text]").blur(function(){
	if (this.value=="") {
		this.value=this.defaultValue;
	}
})

$("#flash .right .bot2 .idens .idens_chil input[type=text]").focus(function(){
	if (this.value==this.defaultValue || this.value=="请输入手机号") {
		this.value="";
	}
})
$("#flash .right .bot2 .idens .idens_chil input[type=text]").blur(function(){
	if (this.value=="") {
		this.value="请输入手机号";
	}
})

$("#flash .right .bot2 .jipiao2 .chufa input[type=text]").focus(function(){
	
})
$("#flash .right .bot2 .jipiao2 .chufa input[type=text]").mouseleave(function(){
	
})
//文本框设置结束

//倒计时
setInterval(function(){
	var now = new Date().getTime();
	var futrue = new Date(2017,9,7,23,30,0).getTime();
	var diff = futrue - now;
	var shi = Math.floor(diff/3600000);
	var fen = Math.floor(diff/1000/60%60);
	var miao = Math.floor(diff/1000%60);
	$(".daojishi .cc .shi").text(shi);
	$(".daojishi .cc .fen").text(fen);
	$(".daojishi .cc .miao").text(miao);
},1000)
//倒计时结束

//无缝滑动
var num = 0;
$(".wufenghuad .see_window4 .add").click(function(){
	num++;
	if (num==5) {
		$(".wufenghuad .see_window4 .long4").css({"left":0+"px"});
		num=1;
	}
	$(".wufenghuad .see_window4 .long4").stop().animate({"left":num*-990+"px"});
})
$(".wufenghuad .see_window4 .sub").click(function(){
	num--;
	if ( num<0) {
		$(".wufenghuad .see_window4 .long4").css({"left":-3960+"px"});
		num=3;
	} 
	$(".wufenghuad .see_window4 .long4").stop().animate({"left":num*-990+"px"});
})

var ssd = 0;
function run1(){
	ssd++;
	if (ssd == 2) {
		ssd=0;
	} 
	$(".wufenghuad .lunbt .pics").eq(ssd).fadeIn().siblings(".pics").fadeOut();
	$(".wufenghuad .lunbt ul li").eq(ssd).addClass("sty").siblings("li").removeClass("sty");
}
var lunbo = setInterval(run1,1000);
$(".wufenghuad .lunbt ul li").mouseenter(function(){
	ssd = $(this).index();
	$(".wufenghuad .lunbt .pics").eq(ssd).fadeIn().siblings(".pics").fadeOut();
	$(this).addClass("sty").siblings("li").removeClass("sty");
})
$(".wufenghuad .lunbt").mouseenter(function(){
	clearInterval(lunbo);
})
$(".wufenghuad .lunbt").mouseleave(function(){
	lunbo = setInterval(run1,1000);
})
//无缝滑动结束

//会买专辑
var xuhao3 = 0;
function run3(){
	xuhao3++;
	if (xuhao3==3) {
		xuhao3=0;
	}
	$(".faxianhh .huimai .idens").eq(xuhao3).stop().fadeIn().siblings(".idens").stop().fadeOut();
	$(".faxianhh .huimai ul li").eq(xuhao3).css({"background":"#E01222"}).siblings("li").css({"background":"#C8C8C8"});
}
var timer3 = setInterval(run3,1000);
$(".faxianhh .huimai").mouseenter(function(){
	clearInterval(timer3);
});
$(".faxianhh .huimai").mouseleave(function(){
	timer3 = setInterval(run3,1000);
});
$(".faxianhh .huimai .add").click(function(){
	xuhao3++;
	if (xuhao3==3) {
		xuhao3=0;
	}
	$(".faxianhh .huimai .idens").eq(xuhao3).stop().fadeIn().siblings(".idens").stop().fadeOut();
	$(".faxianhh .huimai ul li").eq(xuhao3).css({"background":"#E01222"}).siblings("li").css({"background":"#C8C8C8"});
	console.log(xuhao3);
})
$(".faxianhh .huimai .sub").click(function(){
	xuhao3--;
	if (xuhao3<0) {
		xuhao3=2;
	}
	$(".faxianhh .huimai .idens").eq(xuhao3).stop().fadeIn().siblings(".idens").stop().fadeOut();
	$(".faxianhh .huimai ul li").eq(xuhao3).css({"background":"#E01222"}).siblings("li").css({"background":"#C8C8C8"});
	console.log(xuhao3);
})
$(".faxianhh .huimai ul li").mouseenter(function(){
	xuhao3 = $(this).index();
	df = setTimeout(function(){
		$(".faxianhh .huimai .idens").eq(xuhao3).stop().fadeIn().siblings(".idens").stop().fadeOut();
		$(".faxianhh .huimai ul li").eq(xuhao3).css({"background":"#E01222"}).siblings("li").css({"background":"#C8C8C8"});
	},500)
})
$(".faxianhh .huimai ul li").mouseleave(function(){
	clearTimeout(df);
})


//会买专辑结束

//排行榜
$(".faxianhh .paihang .paihang_nav p").mouseenter(function(){
	var xuhao = $(this).index();
	$(".faxianhh .paihang .paihang_nav span").css({"left":xuhao*78+10+"px"})
	$(".faxianhh .paihang .idens").eq(xuhao).show().siblings(".idens").hide();
})
//排行榜结束

//觅me
var xuhao4 = 0;
function run4(){
	xuhao4++;
	if (xuhao4==5) {
		xuhao4=0;
	}
	$(".lingquan .mi_bot .idens").eq(xuhao4).show().siblings(".idens").hide();
	$(".lingquan .mi_bot ul li").eq(xuhao4).addClass("sty").siblings("li").removeClass("sty");
}
var timer4 = setInterval(run4,1000);
$(".lingquan .mi_bot ul li").mouseenter(function(){
	xuhao4 = $(this).index();
	re = setTimeout(function(){
		$(".lingquan .mi_bot .idens").eq(xuhao4).show().siblings(".idens").hide();
		$(".lingquan .mi_bot ul li").eq(xuhao4).addClass("sty").siblings("li").removeClass("sty");
	},500)
})
$(".lingquan .mi_bot ul li").mouseleave(function(){
	clearTimeout(re);
})
$(".lingquan .mi_bot .add").click(function(){
	xuhao4++;
	if (xuhao4==5) {
		xuhao4=0;
	}
	$(".lingquan .mi_bot .idens").eq(xuhao4).show().siblings(".idens").hide();
	$(".lingquan .mi_bot ul li").eq(xuhao4).addClass("sty").siblings("li").removeClass("sty");
})
$(".lingquan .mi_bot .sub").click(function(){
	xuhao4--;
	if (xuhao4<0) {
		xuhao4=4;
	}
	$(".lingquan .mi_bot .idens").eq(xuhao4).show().siblings(".idens").hide();
	$(".lingquan .mi_bot ul li").eq(xuhao4).addClass("sty").siblings("li").removeClass("sty");
})
$(".lingquan .mi_bot").mouseenter(function(){
	clearInterval(timer4);
})
$(".lingquan .mi_bot").mouseleave(function(){
	timer4 = setInterval(run4,1000);
})
//觅me结束

//京东直播
var xuhao5 = 0;
function run5(){
	xuhao5++;
	if (xuhao5==5) {
		xuhao5=0;
	}
	$(".xinpin_r .zhibo .idens").eq(xuhao5).show().siblings(".idens").hide();
	$(".xinpin_r .zhibo ul li").eq(xuhao5).addClass("sty").siblings("li").removeClass("sty");
}
var timer5 = setInterval(run5,1000);
$(".xinpin_r .zhibo ul li").mouseenter(function(){
	xuhao5 = $(this).index();
	re = setTimeout(function(){
		$(".xinpin_r .zhibo .idens").eq(xuhao5).show().siblings(".idens").hide();
		$(".xinpin_r .zhibo ul li").eq(xuhao5).addClass("sty").siblings("li").removeClass("sty");
	},500)
})
$(".xinpin_r .zhibo ul li").mouseleave(function(){
	clearTimeout(re);
})
$(".xinpin_r .zhibo .add").click(function(){
	xuhao5++;
	if (xuhao5==5) {
		xuhao5=0;
	}
	$(".xinpin_r .zhibo .idens").eq(xuhao5).show().siblings(".idens").hide();
	$(".xinpin_r .zhibo ul li").eq(xuhao5).addClass("sty").siblings("li").removeClass("sty");
})
$(".xinpin_r .zhibo .sub").click(function(){
	xuhao5--;
	if (xuhao5<0) {
		xuhao5=4;
	}
	$(".xinpin_r .zhibo .idens").eq(xuhao5).show().siblings(".idens").hide();
	$(".xinpin_r .zhibo ul li").eq(xuhao5).addClass("sty").siblings("li").removeClass("sty");
})
$(".xinpin_r .zhibo").mouseenter(function(){
	clearInterval(timer5);
})
$(".xinpin_r .zhibo").mouseleave(function(){
	timer5 = setInterval(run5,1000);
})
//京东直播结束

//爱逛开始
var xuhao6 = 0;
$(".aiguang .shangbiao .add").click(function(){
	xuhao6++;
	if (xuhao6==3){
		$(".aiguang .shangbiao .aiguang_sb").css({"left":0+"px"});
		xuhao6=1;
	}
	var l = xuhao6*-575+"px";
	$(".aiguang .shangbiao .aiguang_sb").stop().animate({"left":l},300);
	console.log(xuhao6);
})

$(".aiguang .shangbiao .sub").click(function(){
	xuhao6--;
	if (xuhao6<0){
		$(".aiguang .shangbiao .aiguang_sb").css({"left":-1150+"px"});
		xuhao6=1;
	}
	var l = xuhao6*-575+"px";
	$(".aiguang .shangbiao .aiguang_sb").stop().animate({"left":l},300);
	console.log(xuhao6);
})

//爱逛结束

//爱美丽开始
var xuhao7 = 0;
$(".aiguang .shangbiao .add2").click(function(){
	xuhao7++;
	if (xuhao7==3){
		$(".aiguang .shangbiao .aimeili_sb").css({"left":0+"px"});
		xuhao7=1;
	}
	var l = xuhao7*-575+"px";
	$(".aiguang .shangbiao .aimeili_sb").stop().animate({"left":l},300);
	console.log(xuhao7);
})

$(".aiguang .shangbiao .sub2").click(function(){
	xuhao7--;
	if (xuhao7<0){
		$(".aiguang .shangbiao .aimeili_sb").css({"left":-1150+"px"});
		xuhao7=1;
	}
	var l = xuhao7*-575+"px";
	$(".aiguang .shangbiao .aimeili_sb").stop().animate({"left":l},300);
	console.log(xuhao7);
})
//爱美丽结束

//家电馆
var xuhao8 = 0;
$(".aiguang .shangbiao .add3").click(function(){
	xuhao8++;
	if (xuhao8==3){
		$(".aiguang .shangbiao .jiadiang_sb").css({"left":0+"px"});
		xuhao8=1;
	}
	var l = xuhao8*-575+"px";
	$(".aiguang .shangbiao .jiadiang_sb").stop().animate({"left":l},300);
	console.log(xuhao8);
})

$(".aiguang .shangbiao .sub3").click(function(){
	xuhao8--;
	if (xuhao8<0){
		$(".aiguang .shangbiao .jiadiang_sb").css({"left":-1150+"px"});
		xuhao8=1;
	}
	var l = xuhao8*-575+"px";
	$(".aiguang .shangbiao .jiadiang_sb").stop().animate({"left":l},300);
	console.log(xuhao8);
})

//家电馆结束


//搞机派
var xuhao9 = 0;
$(".aiguang .shangbiao .add4").click(function(){
	xuhao9++;
	if (xuhao9==3){
		$(".aiguang .shangbiao .gaojip_sb").css({"left":0+"px"});
		xuhao9=1;
	}
	var l = xuhao9*-575+"px";
	$(".aiguang .shangbiao .gaojip_sb").stop().animate({"left":l},300);
	console.log(xuhao9);
})

$(".aiguang .shangbiao .sub4").click(function(){
	xuhao9--;
	if (xuhao9<0){
		$(".aiguang .shangbiao .gaojip_sb").css({"left":-1150+"px"});
		xuhao9=1;
	}
	var l = xuhao9*-575+"px";
	$(".aiguang .shangbiao .gaojip_sb").stop().animate({"left":l},300);
	console.log(xuhao9);
})
//搞机派结束

//电脑数码
var xuhao10 = 0;
$(".aiguang .shangbiao .add5").click(function(){
	xuhao10++;
	if (xuhao10==3){
		$(".aiguang .shangbiao .diannao_sb").css({"left":0+"px"});
		xuhao10=1;
	}
	var l = xuhao10*-1170+"px";
	$(".aiguang .shangbiao .diannao_sb").stop().animate({"left":l},300);
	console.log(xuhao10);
})

$(".aiguang .shangbiao .sub5").click(function(){
	xuhao10--;
	if (xuhao10<0){
		$(".aiguang .shangbiao .diannao_sb").css({"left":-2340+"px"});
		xuhao10=1;
	}
	var l = xuhao10*-1170+"px";
	$(".aiguang .shangbiao .diannao_sb").stop().animate({"left":l},300);
	console.log(xuhao10);
})
//电脑数码结束































