define([
  "jquery",
  "use!underscore",
  "use!backbone"
],

function (Backbone) {
    // Put application wide code here

    return {
        // This is useful when developing if you don't want to use a
        // build process every time you change a template.
        //
        // Delete if you are using a different template loading method.
        
        fetchTemplate: function (path) {
            var JST = window.JST = window.JST || {};
            
            if (!JST[path]) {
                $.ajax({ url: path, async: false }).then(function (contents) {
                    JST[path] = _.template(contents);
                });
            }

            return JST[path];
        },

        // Keep active application instances namespaced under an app object.
        app: _.extend({}, Backbone.Events)
    };
});