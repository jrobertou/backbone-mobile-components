require([
  "namespace",

  // Libs
  "jquery",
  "use!backbone",

  "jqueryHammer",
  "greensock",
  "greensockCss",

  "animate_component",
  "menu_component",
  "topbar_component",
  "popin_component",
  "listView_component",
  "page_component",
  // Dependances
  "router_main",

  // Components
  /*"animate_component",
  "menu_component",
  "topbar_component",
  "popin_component",
  "listView_component",*/
  ],
function (Mobile, $, Backbone, jqueryHammer, greensock, greensockCss, animate_component, menu_component, topbar_component, popin_component, listView_component, page_component, Router) {

    var app = Mobile.app;

    // Treat the jQuery ready function as the entry point to the application.
    // Inside this function, kick-off all initialization, everything up to this
    // point should be definitions.
    $(function () {
        // Define your master router on the application namespace and trigger all
        // navigation from this instance.
        app.router = new Router();

        //console.log('initialise route');
        Backbone.history.start({pushState: false});
        // Trigger the initial route and enable HTML5 History API support
    });

    // All navigation that is relative should be passed through the navigate
    // method, to be processed by the router.  If the link has a data-bypass
    // attribute, bypass the delegation completely.
    $(document).on("click", "a:not([data-bypass])", function (evt) {
        // Get the anchor href and protcol
        var href = $(this).attr("href");
        var protocol = this.protocol + "//";
        // alert("here!!!!#@$#@$");
        // Ensure the protocol is not part of URL, meaning its relative.
        if (href !== undefined && href.slice(0, protocol.length) !== protocol && href.indexOf("javascript:") !== 0) {
            // Stop the default event to ensure the link will not cause a page
            // refresh.
            evt.preventDefault();

            // `Backbone.history.navigate` is sufficient for all Routers and will
            // trigger the correct events.  The Router's internal `navigate` method
            // calls this anyways.
            Backbone.history.navigate(href, true);
        }
    });

});
