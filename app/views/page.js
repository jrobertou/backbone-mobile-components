define([
    "namespace",
    
    "jquery",
    "use!backbone",
    "popin_view"
],
function (Mobile, $, Backbone, Popin) {
	
    //Backbone.MobilePageView = new MobilePageView();
	var Page = Backbone.MobilePageView.extend({
		el: "",
        template: "/bbbmobile/app/templates/page.html",
		events:{
			"show" : "show"
		},
		className:"pageLists pageContent",
		initialize : function  () {
			this.render();
		},
		render: function(data) {
			var self = this;

			var tpl = Mobile.fetchTemplate(this.template),
			tpl = tpl({data:null});

			$(".currentMobilePage").html(tpl);
			self.show();

			Mobile.app.router.topbar.trigger("loadActionBtn", {
	            icon : "<span class='icon_plus_'>a</span>",
	            action : function () {
	                self.addPopin();
	            }
	        });
			return this;
		},
		addPopin : function () {
			var popup = new Popin({
	            content : _.template($("#popin_tpl").html())
	        }).render();
		}
	});
	return Page;
});