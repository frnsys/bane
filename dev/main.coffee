require [
	# Application.
	'app',

	# Router.
	'router'
], (app, Router) ->
	# Create our router
	# and attach it to the app.
	app.router = new Router()

	###
	Trigger the initial route and enable HTML5 History API support,
	set the root folder to '/' by default.
	The root folder is specified in `app.coffee`.
	Disabling this for prototyping. See below.
	###
	# Backbone.history.start({ pushState: true, root: app.root })
	
	# Use hash urls for prototyping.
	# This way we can just use a simple HTTP server to run the site.
	Backbone.history.start(
		pushState: false
		root: app.root
	)

	###
	Links that are relative – that is, part of this site,
	will be navigated through the Backbone router, rather
	than normal navigation.
	If the link has a 'data-bypass' attribute, this special
	behavior will be ignored.
	###
	$(document).on "click", "a[href]:not([data-bypass])", (evt) ->
		# Get the absolute anchor href.
		href =
			prop: $(this).prop("href")
			attr: $(this).attr("href")

		# Build the absolute root from app.root (specified in app.js).
		root = location.protocol + "//" + location.host + app.root

		# Check that the absolute root matches the link's root,
		# telling us that it is a relative link.
		if href.prop.slice(0, root.length) is root
			# Stop the default event to ensure the link will not cause a page refresh.
      evt.preventDefault()

			###
      `Backbone.history.navigate` is sufficient for all Routers and will
      trigger the correct events. The Router's internal `navigate` method
      calls this anyways.  The fragment is sliced from the root.
			###
			Backbone.history.navigate(href.attr, true)

