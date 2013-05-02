define([
			 "app"
],
function(app) {

	// Create a module based off
	// the app template (in app.js)
	var Book = app.module();

	Book.Model = Backbone.Model.extend({
		idAttribute: "slug",

		defaults: {
			year: "1900"
		},

		initialize: function() {
			this.slugify();
			this.on("change:title", this.slugify);
		},

		slugify: function() {
			this.set("slug", _.slugify( this.get("title") ))
		}
	});

	Book.Collection = Backbone.Collection.extend({
		model: Book.Model,

		// Where to fetch the data from
		url: function() {
			return "/data/books.json";
		},

		// How to handle the fetched data
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

		// The data that gets passed to the view
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

		// Do stuff before the view is rendered
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

		// The data that gets passed to the view
		serialize: function() {
			return function() {
				collection: this.options.books
			};
		},

		// Do stuff before the view is rendered
		beforeRender: function() {
			var view = this;

			// For each book in collection
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
