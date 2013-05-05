Usage Guide
===========

Here's a guide to help outline exactly how all of this works.


BBBane.ed (★Backbone Boilerplate Bane edition★) has the following
directory structure, with the example project:
```
├── app
│   ├── app.js
│   ├── config.js
│   ├── img
│   ├── main.js
│   ├── modules
│   │   └── book.js
│   ├── router.js
│   ├── styles
│   │   ├── _config.scss
│   │   ├── atomic
│   │   │   ├── _atomic.scss
│   │   │   ├── core
│   │   │   │   ├── _h5bp.scss
│   │   │   │   ├── _images.scss
│   │   │   │   ├── _lists.scss
│   │   │   │   ├── _mixins.scss
│   │   │   │   ├── _normalize.scss
│   │   │   │   └── _type.scss
│   │   │   └── modules
│   │   │       ├── _geometry.scss
│   │   │       ├── _icons.scss
│   │   │       └── _sticky_footer.scss
│   │   ├── fonts
│   │   │   ├── icons.eot
│   │   │   ├── icons.svg
│   │   │   ├── icons.ttf
│   │   │   └── icons.woff
│   │   └── index.scss
│   └── templates
│       ├── book
│       │   ├── item.hbs
│       │   ├── list.hbs
│       │   └── single.hbs
│       └── main.hbs
├── data
│   └── books.json
├── favicon.ico
├── index.html
├── package.json
├── readme.md
├── source
│   ├── icons
│   │   ├── ... (icon source SVGs)
│   └── images
│   		├── ... (image source files)
└── vendor
    ├── jam 
    │   └── ... (jam packages)
    └── js
        └── libs
            └── require.js
```
 
`main.js`
Here is where the application kicks off. `app.js` and `router.js` are
loaded, and then the Router created in `router.js` is instantiated and
attached to your `app`. 
Backbone's history is setup. In our case, we're using hash URLs instead
of the HTML5 history API. Using "true" URLs requires some special
handling on the server, and in our prototyping use case it's nice if we
can just use a simple HTTP server (see below on how).

This file also specifies a binding for links in the document, hijacking
relative links (i.e. links on the same site) so they use the app's
router instead of their normal behavior.
Specifying a `data-bypass` attribute on the element will override this
binding.

`app.js`
Here is where you can load in any additional JS packages and configure
your `app` object, such as setting what the root url is.
This is also where `LayoutManager` is setup and where template fetching is
handled.

`router.js`
This is where the navigation interaction is handled. You load your `app`
here and your `modules` as well. Routes are created here as well.

`config.js`
This is what RequireJS loads first (as specified in `index.html`) and
loads Jam's RequireJS config (thereby loading your core packages) and
then loading `main.js`.

