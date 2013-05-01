define([
  // Application.
  "app",

	// Modules.
	"modules/book"
],

function(app, Book) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
		initialize: function() {
			var collections = {
				books: new Book.Collection()
			}

			// Ensure the router has references to the collections
			_.extend(this, collections);

			app.useLayout("main").setViews({
				".books": new Book.Views.List(collections)
			}).render();
		},

    routes: {
      "": "index",
			"book/:name": "book"
    },

    index: function() {
			// Reset the state and render
			this.reset();

			this.books.fetch();
    },

		book: function(name) {
			// Reset the state and render
			this.reset();

			// Set the book
			this.books.book = name;

			// Fetch the data
			this.books.fetch();
		},

		reset: function() {
			// Reset collections to initial state
			if ( this.books.length ) {
				this.books.reset();
			}

			// Reset active model
			app.active = false;
		}

  });

  return Router;

});
