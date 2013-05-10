define([
			 // Application.
			 'app',

			 // Modules.
			 'modules/book'
], function(app, Book) {
	var Router = Backbone.Router.extend({
		initialize: function() {
			var collections = {
				books: new Book.Collection()
			}

			// Attach collections to the router
			// i.e. this.books
			_.extend(this, collections);

			// Create main layout (main.jade)
			app.useLayout('main').setViews({
				".books": new Book.Views.List({ books: collections.books });
			}).render();
		},

		routes: {
			'': 'index',
			'book/:slug': 'book'
		},

		index: function() {
			this.books.fetch({ reset: true });
		},

		book: function(slug) {
			this.reset();

			// There is probably a better/proper
			// way to do this.
			var books = this.books;
			books.fetch({
				success: function() {
					var book = books.get(slug);
					app.userLayout("main").setViews({
						".books": new Book.Views.Single({ model: book });
					});
				}
			});
		},

		reset: function() {
			// Reset collections to initial state
			if (this.books.length) {
				this.books.reset();
			}
		}

		// Shortcut for building a url
		go: function() {
			return this.navigate(_.toArray(arguments).join("/"), true);
		}
	});

	return Router;
});
