(function() {
  require(['app', 'router'], function(app, Router) {
    app.router = new Router();
    /*
    	Trigger the initial route and enable HTML5 History API support,
    	set the root folder to '/' by default.
    	The root folder is specified in `app.coffee`.
    	Disabling this for prototyping. See below.
    */

    Backbone.history.start({
      pushState: false,
      root: app.root
    });
    /*
    	Links that are relative – that is, part of this site,
    	will be navigated through the Backbone router, rather
    	than normal navigation.
    	If the link has a 'data-bypass' attribute, this special
    	behavior will be ignored.
    */

    return $(document).on("click", "a[href]:not([data-bypass])", function(evt) {
      var href, root;

      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + app.root;
      if (href.prop.slice(0, root.length) === root) {
        evt.preventDefault();
      }
      /*
         `Backbone.history.navigate` is sufficient for all Routers and will
         trigger the correct events. The Router's internal `navigate` method
         calls this anyways.  The fragment is sliced from the root.
      */

      return Backbone.history.navigate(href.attr, true);
    });
  });

}).call(this);
