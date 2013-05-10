(function() {
  define(["app"], function(app) {
    var Book;

    Book = app.module();
    Book.Model = Backbone.Model.extend({
      idAttribute: "slug",
      defaults: {
        author: "",
        title: ""
      },
      initialize: function() {
        this.slugify();
        return this.on("change:title", this.slugify);
      },
      slugify: function() {
        return this.set("slug", _.slugify(this.get("title")));
      }
    });
    Book.Collection = Backbone.Collection.extend({
      model: Book.Model,
      url: function() {
        return "/data/books.json";
      },
      parse: function(obj) {
        return obj;
      },
      initialize: function(models, options) {}
    });
    Book.Views.Item = Backbone.View.extend({
      template: "book/item",
      tagName: "li",
      serialize: function() {
        return {
          book: this.model.toJSON()
        };
      },
      events: {
        click: "showBook"
      },
      showBook: function(ev) {
        return app.router.go("book", this.model.get("slug"));
      },
      beforeRender: function() {
        if (app.active === this.model) {
          this.$el.siblings().removeClass("active");
          return this.$el.addClass("active");
        }
      }
    });
    Book.Views.List = Backbone.View.extend({
      template: "book/list",
      className: "book-list",
      serialize: function() {
        return {
          collection: this.options.books,
          count: this.options.books.length
        };
      },
      beforeRender: function() {
        var view;

        return view = this;
      }
    }, this.options.books.each(function(book) {
      return view.insertView("ul", new Book.Views.Item({
        model: book
      }));
    }), {
      initialize: function() {
        return this.listenTo(this.options.books, {
          "reset": function() {
            return this.render();
          }
        });
      }
    });
    Book.Views.Single = Backbone.View.extend({
      template: "book/single",
      className: "single-book",
      tagName: "section",
      serialize: function() {
        return {
          book: this.model.toJSON()
        };
      }
    });
    return Book;
  });

}).call(this);
