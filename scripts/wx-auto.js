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
