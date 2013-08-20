require.config({
  "deps": ["main"],
  "baseUrl": "app/",
  "paths": {

    /* Libs */
    "jquery": "../assets/js/jquery.min",
    "jqueryHammer": "../assets/js/jquery.hammer.min",
    "underscore": "../assets/js/underscore",
    "backbone": "../assets/js/backbone",
    "bbRouteFilter": "../assets/js/bb-route-filter",
    "greensock" : "../assets/js/greensock-v12-js/src/minified/TweenLite.min",
    "greensockCss" : "../assets/js/greensock-v12-js/src/minified/plugins/CSSPlugin.min",


    /***** COMPONENTS *****/
    "animate_component": "components/bb.animate",
    "menu_component": "components/bb.menu",
    "topbar_component": "components/bb.topbar",
    "popin_component": "components/bb.popin",
    "listView_component": "components/bb.list.view",
    "page_component": "components/bb.page",


    /***** ROUTERS *****/
    "router_main":"router",

    /***** HELPER *******/
    "utils": "helpers/utils",

    /***** VIEWS *******/
    "page_view": "views/page",
    "popin_view": "views/popin",
    "viewMenu_view": "views/menu",
    "viewTopbar_view": "views/topbar",

    
    "use": "../assets/js/use"
  },

  "use": {
    "backbone": {
      "deps": ["use!underscore", "jquery"],
      "attach": "Backbone"
    },

    "underscore": {
      "attach": "_"
    }
  }
});
