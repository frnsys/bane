define([
			 "app"
],
function(app) {
	var Book = app.module();

	Book.Model = Backbone.Model.extend({
		defaults: function() {
			return {
				book: {}
			};
		}
	});

	Book.Collection = Backbone.Collection.extend({
		model: Book.Model,

		// Where to get the data
		url: function() {
			return "/books.json";
		},

		// How to handle the data
		parse: function(obj) {
			return obj;
		},

		initialize: function(models, options) {
			if (options) {
				//this.bar = options.bar;
			}
		}
	});

	Book.Views.Item = Backbone.View.extend({
		template:"book/item",
		tagName:"li",
		serialize: function() {
			return {
				model: this.model.attributes
			};
		},

		// Bind some events
		events: {
			click: "myFunc"
		},

		myFunc: function(ev) {
			// do stuff
			// Make this the active model
			app.active = this.model;

			// Render
			this.render();
		},

		// Do some stuff before render
		beforeRender: function() {
			// If this item has been activated...
			if ( app.active === this.model ) {
				this.$el.siblings().removeClass("active");
				this.$el.addClass("active");
			}
		}
	});

	Book.Views.List = Backbone.View.extend({
		template: "book/list",
		className: "book-class",

		serialize: function() {
			return function() {
				collection: this.options.books
			};
		},

		beforeRender: function() {
			// For each book in collection
			var view = this;
			this.options.books.each(function(book) {
				// Insert a Book item view with book to the ul
				view.insertView("ul", new Book.Views.Item({
					model: book
				}));

			});
		},

		initialize: function() {
			// Listen to some events
			this.listenTo(this.options.books, {
				"reset": function() {
					this.render();
				}
			});
		}
	});

	// Return the module for AMD compliance
	return Book;
});
