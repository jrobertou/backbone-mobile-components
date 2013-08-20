define([
    "namespace",
    
    "jquery",
    "use!backbone",

    "viewMenu_view",
    "viewTopbar_view",
    "page_view"

],
function (Mobile, $, Backbone, Menu, Topbar, Page) {

    var router = Backbone.Router.extend({
        
        routes: {
            "page1" :  "page1",
            "page2" :  "page2",
            "page3" :  "page3",
            "page4" :  "page4",
            "*path" :  "page1"
        },
        initialize: function() {
            var router = this;
            router.menu = new Menu();
            router.topbar = new Topbar({
                menu : router.menu
            });
                router.addBars();
        },

        before: {
            // Using inline filter definition
            '*any': function(fragment, args) {
                router.addBars();
            }
        },
        page1: function(){
            var router = this;
            var page = new Page({
                topbar : router.topbar,
                menu : router.menu,
                title : "Page1",
            }).render();
        },
        page2: function(){
            var router = this;
            var page = new Page({
                topbar : router.topbar,
                menu : router.menu,
                title : "Page2",
            }).render();
        },
        page3: function(){
            var router = this;
            var page = new Page({
                topbar : router.topbar,
                menu : router.menu,
                title : "Page3",
            }).render();
        },
        page4: function(){
            var router = this;
            var page = new Page({
                topbar : router.topbar,
                menu : router.menu,
                title : "Page4",
            }).render();
        },
        addBars : function (title) {
            var router = this;
            $("#overflower")
                    .append(router.menu.render().el)
                    .append(router.topbar.render().el);
        }
    });
    return router;
});