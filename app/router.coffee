define [
	# Application.
  "app",

	# Modules.
	"modules/book"
],

(app, Book) ->

	# Defining the application router, you can attach sub routers here.
  Router = Backbone.Router.extend
		initialize: ->
			collections =
				books: new Book.Collection()

			# Ensure the router has references to the collections
			# i.e. so we can do this.books
			# to get the collection we just created.
			_.extend(this, collections)

			# Create the main layout from main.hbs
			###
			app.useLayout("main").setViews({
				# Add a Book List view to el of class "books"
				".books": new Book.Views.List({ books: collections.books })
			}).render()
			###

		routes:
      "": "index"
			"book/:slug": "book"

		index: ->
			# Create the main layout from main.hbs
			app.useLayout("main").setViews({
				# Add a Book List view to el of class "books"
				".books": new Book.Views.List({ books: this.books })
			}).render()

			this.books.fetch({reset:true})

		book: (slug) ->
			# Reset the state and render
			this.reset()

			# Fetch the data
			# There is probably a better/proper way to do this
			books = this.books
			books.fetch({
				success: ->
					book = books.get(slug)
					app.useLayout("main").setViews({
						".books": new Book.Views.Single({ model: book })
					}).render()
			})

		reset: ->
			# Reset collections to initial state
			if this.books.length
				this.books.reset()

		# Shortcut for building a url.
    go:  ->
      return this.navigate(_.toArray(arguments).join("/"), true)

  return Router

