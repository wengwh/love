!function(a) {
    "use strict";
    a(window).on("load",
    function() {
        a(".loader-inner").fadeOut(),
        a(".loader").delay(200).fadeOut("slow")
    });
    var b = a(".header"),
    c = b.offset();
    a(window).scroll(function() {
        a(this).scrollTop() > c.top + 500 && b.hasClass("default") ? b.fadeOut("fast",
        function() {
            a(this).removeClass("default").addClass("switched-header").fadeIn(200)
        }) : a(this).scrollTop() <= c.top + 500 && b.hasClass("switched-header") && b.fadeOut("fast",
        function() {
            a(this).removeClass("switched-header").addClass("default").fadeIn(100)
        })
    }),
    a("a.scroll").smoothScroll({
        speed: 800,
        offset: -60
    });
    var d = a(".mobile-but"),
    e = a(".main-nav ul");
    e.height();
    a(d).on("click",
    function() {
        return a(".toggle-mobile-but").toggleClass("active"),
        e.slideToggle(),
        a(".main-nav li a").addClass("mobile"),
        !1
    }),
    a(window).resize(function() {
        a(window).width() > 320 && e.is(":hidden") && (e.removeAttr("style"), a(".main-nav li a").removeClass("mobile"))
    }),
    a(".main-nav li a").click(function() {
        a(this).hasClass("mobile") && (e.slideToggle(), a(".toggle-mobile-but").toggleClass("active"))
    });
    for (var g = 0; g < a(".background-img").length; g++) {
        var h = a(".background-img").eq(g).children("img").attr("src");
        a(".background-img").eq(g).css("background", 'url("' + h + '")'),
        a(".background-img").eq(g).children("img").hide(),
        a(".background-img").eq(g).css("background-position", "initial")
    }
    a(".countdown").countdown("2016/6/10",
    function(b) {
        a(this).html(b.strftime("%D days %H:%M:%S"))
    }),
    a(".venobox").venobox({
        titleattr: "data-title",
        numeratio: !0
    })
} (jQuery);


var together = new Date();
var strs = "2017-11-14 00:00:00";
var nowTime = new Date();
var together = new Date(strs.replace(/-/g, "/"));
timeElapse(together);
setInterval(function() {
	timeElapse(together);
}, 500);
function timeElapse(c) {
	var e = Date();
	var f = (Date.parse(e) - Date.parse(c)) / 1000;
	var g = Math.floor(f / (3600 * 24));
	f = f % (3600 * 24);
	var b = Math.floor(f / 3600);
	if (b < 10) {
		b = "0" + b
	}
	f = f % 3600;
	var d = Math.floor(f / 60);
	if (d < 10) {
		d = "0" + d
	}
	f = f % 60;
	if (f < 10) {
		f = "0" + f
	}
	var a = '<span class="digit">' + g + '</span> 天 <span class="digit">' + b
			+ '</span> 时 <span class="digit">' + d
			+ '</span> 分 <span class="digit">' + f + "</span> 秒";
	$("#elapseClock").html(a)
};

//获取picid函数
$(function() {
	$("area").click(function() {
		var picId = $(this).attr("data-id");
		var picSrc = "images/img_big/" + picId + ".jpg"
		$(".modal-content>.pic-box>img").attr("src", picSrc);
	})
	var isPlaying = function(audio) {
		return !audio.paused;
	}
	var a = document.getElementById('main_audio');
	$('#btn-play').on('click', function() {
		if ($(this).hasClass('rotate')) {
			a.pause();
			$(this).removeClass('rotate');
		} else {
			a.play();
			$(this).addClass('rotate');
		}
	});

})


function autoPlayAudio() {
	wx.config({
		// 配置信息, 即使不正确也能使用 wx.ready
		debug : false,
		appId : '',
		timestamp : 1,
		nonceStr : '',
		signature : '',
		jsApiList : []
	});
	wx.ready(function() {
		document.getElementById('main_audio').play();
	});
}
autoPlayAudio(); // 推荐使用方法1
