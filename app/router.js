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

			// Create the main layout from main.hbs
			app.useLayout("main").setViews({
				// Add a Book List view to el of class "books"
				".books": new Book.Views.List(collections)
			}).render();
		},

    routes: {
      "": "index",
			"book/:slug": "book"
    },

    index: function() {
			this.books.fetch({reset:true});
    },

		book: function(slug) {
			console.log("single view");

			// Reset the state and render
			this.reset();

			// Fetch the data
			var books = this.books;
			books.fetch({
				reset:true,
				success: function() {
					var book = books.get(slug);
					console.log(book);
				}
			});
		},

		reset: function() {
			// Reset collections to initial state
			if ( this.books.length ) {
				this.books.reset();
			}
		}

  });

  return Router;

});
