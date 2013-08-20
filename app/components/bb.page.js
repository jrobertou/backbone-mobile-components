/**
* Backbone.MobilePageView
* 
* Easily setup a paging system for you mobile app.
*/

define([
    "namespace",
    
    "jquery",
    "use!backbone",
    "utils"
],
function (Mobile, $, Backbone, Utils) {
	
	Backbone.MobilePageView = Backbone.View.extend({
		events : {
			// swipe is used to show the menu
			"swipe" : "showHideMenu",
			"show" : "show"
		},
		initialize: function() {
			//this.constructor.__super__.changeTitle.call(this, this.options.title);
		},
		bindPageResize : function(){
			var self = this;
			// hack to get dom changes on this node
			// see page.less
			this.$el.on("animationstart", function(){
				// at every dom changes resize is triggered
				self.resizePage();

			});
			// min height is always the window height
			this.$el.css("minHeight", Utils.windowHeight());
		},
		getPageHeight : function(){
			return this.$el.height();
		},
		resizePage : function () {
			// check is current width is smaller than the window height
			var currentHeight = (Utils.windowHeight() > this.getPageHeight()) ? Utils.windowHeight() : this.getPageHeight();
			this.$el.height(currentHeight);
			// the page container need the height too
			$("#overflower").height(currentHeight);
		},
		// on page swipw show and hide menu
		showHideMenu : function (e) {
			if (this.options && this.options.menu){
				if(e.direction == "left"){
					this.options.menu.trigger("hideMenu");
				}else if(e.direction === "right"){
					this.options.menu.trigger("showMenu");
				}
			}
		},
		show: function(options) {
			//$.pageload.hide();
			// set height of the page
			this.resizePage();
			// bind resize on DOM change in this element
			this.bindPageResize();
			// if there is a topbar & title change that title
			if(this.options.title){
				this.changeTitle(this.options.title);
			}

			var self = this;
			var $currentPage = $(".currentMobilePage");
			// page exist? remove that page, make place for the new one
			if ($currentPage.length) this.hide(options);
			// no options? give our little guy the animType
			if(!options){
				options = {
					animType : "opacity"
				};
			}
			// this page is now the current page
			this.$el.addClass("currentMobilePage")
				.css("width", Utils.windowWidth());
			// this call bbanimate that take cares of anims troubles
			/*Backbone.bbanimate.page.show({
	            to:this.$el[0],
	            animType : options.animType,
	            onComplete: function() {
					if (options && options.complete) self.successFunc(options.complete);
				}
	        });
			*/
			this.$el.show();
		},
		// If there is a topbar change the title
		changeTitle : function (newTitle) {
			if(this.options.topbar){
				// remove right buttons
				this.options.topbar.trigger("removeActionBtn");
				this.options.topbar.changeTitle(newTitle);
			}
		},
		// this call the callback function in case the apge defines one on show or hide.
		successFunc: function(func) {
			if (func) func();
		},
		hide: function(options) {
			var self = this;
			// no options? give our little guy the animType opacity
			if(!options){
				options = {
					animType : "opacity"
				};
			}
			// hide our menu just in case it's open
			if(this.options.menu) this.options.menu.trigger("hideMenu");
			var $currentPage = $(".currentMobilePage");
			// this call bbanimate that take cares of anims troubles
			Backbone.bbanimate.page.hide({
	            to:$currentPage[0],
	            animType : options.animType,
				onComplete: function() {
					$currentPage.remove();
					if (options && options.complete) self.successFunc(options.complete);
				}
	        });
		}
	});
});