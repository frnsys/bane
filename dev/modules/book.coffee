define [
			 "app"
], (app) ->

	# Create a module based off
	# the app template (in app.js)
	Book = app.module()

	Book.Model = Backbone.Model.extend
		idAttribute: "slug"

		defaults:
			author: ""
			title: ""

		initialize: ->
			this.slugify()
			this.on("change:title", this.slugify)

		slugify: ->
			this.set("slug", _.slugify( this.get("title") ))


	Book.Collection = Backbone.Collection.extend
		model: Book.Model

		# Where to fetch the data from
		url: ->
			return "/data/books.json"

		# How to handle the fetched data
		parse: (obj) ->
			return obj

		initialize: (models, options) ->

	Book.Views.Item = Backbone.View.extend
		template:"book/item"
		tagName:"li"

		# The data that gets passed to the view
		serialize: ->
			# return
			book: this.model.toJSON()

		# Bind some events
		events:
			click: "showBook"

		showBook: (ev) ->
			app.router.go("book", this.model.get("slug"))

		# Do stuff before the view is rendered
		beforeRender: ->
			# If this item has been activated...
			if app.active is this.model
				this.$el.siblings().removeClass("active")
				this.$el.addClass("active")

	Book.Views.List = Backbone.View.extend
		template: "book/list"
		className: "book-list"

		# The data that gets passed to the view
		serialize: ->
			# return
			collection: this.options.books
			count: this.options.books.length

		# Do stuff before the view is rendered
		beforeRender: ->
			 view = this

			# For each book in collection
			this.options.books.each((book) ->

				# Insert a Book item view with book to the ul
				view.insertView("ul", new Book.Views.Item({
					model: book
				}))

			)

		initialize: ->
			# Listen to some events
			this.listenTo(this.options.books, {
				"reset": ->
					this.render()
			})

	Book.Views.Single = Backbone.View.extend
		template: "book/single"
		className: "single-book"
		tagName:"section"

		serialize: ->
			# return
			book: this.model.toJSON()

	# Return the module for AMD compliance
	return Book
