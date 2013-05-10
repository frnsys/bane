(function() {
  define(["app", "modules/book"], function(app, Book) {
    var Router;

    Router = Backbone.Router.extend;
    return {
      initialize: function() {
        var collections;

        collections = {
          books: new Book.Collection()
        };
        return _.extend(this, collections);
        /*
        			app.useLayout("main").setViews({
        				# Add a Book List view to el of class "books"
        				".books": new Book.Views.List({ books: collections.books })
        			}).render()
        */

      },
      routes: {
        "": "index"
      },
      "book/:slug": "book"
    };
  });

  ({
    index: function() {
      app.useLayout("main").setViews({
        ".books": new Book.Views.List({
          books: this.books
        })
      }).render();
      return this.books.fetch({
        reset: true
      });
    },
    book: function(slug) {
      var books;

      this.reset();
      books = this.books;
      return books.fetch({
        success: function() {
          var book;

          book = books.get(slug);
          return app.useLayout("main").setViews({
            ".books": new Book.Views.Single({
              model: book
            })
          }).render();
        }
      });
    },
    reset: function() {
      if (this.books.length) {
        this.books.reset();
        return {
          go: function() {
            return this.navigate(_.toArray(arguments).join("/"), true);
          }
        };
      }
    }
  });

  return Router;

}).call(this);
