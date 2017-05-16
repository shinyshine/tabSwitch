
/*
	建议使用延迟切换改善用户体验
*/
;(function() {

	var Tab = function(params, obj) {

		// var _this = this;
		// _this.wrapper = obj;
		this.config = params;
		this.config.effect = this.config.effect == "fadeOut" ? "fadeOut" : "show";
		this.contentItems = document.querySelectorAll(this.config.container + " .content-item");
		this.tabItems = document.querySelectorAll(this.config.container + " ul li");
		this.currentTab = this.tabItems[0];
		this.currentContent = this.contentItems[0];


		this.init();

		// 首先绑定事件

		this.bindAction();


	}

	Tab.prototype = {
		init: function() {
			var effect = this.config.effect;
			this.currentTab.classList.add("active");
			this.currentContent.classList.add(effect);
		},
		switch: function(index) {
			var effect = this.config.effect;
			this.currentTab.classList.remove("active");
			this.currentContent.classList.remove(effect);

			this.currentTab = this.tabItems[index];
			this.currentContent = this.contentItems[index];

			this.currentTab.classList.add("active");
			this.currentContent.classList.add(effect);
		},

		bindAction: function() {
			var _this = this;
			var tabs = document.querySelector(_this.config.container + " ul");
			console.log(tabs);

			tabs.addEventListener(_this.config.trigger, function(e) {
				var event = e ? e : window.event;
				var target = event.target || event.srcElement;

				if(target.nodeName.toLowerCase() == "li") {
					var index = target.getAttribute("data-id"); //此处需要优化兼容问题

					_this.switch(index);
				}



			}, false);

		},

		


	}


	window.Tab = Tab;
})();