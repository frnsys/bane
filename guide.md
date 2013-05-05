Usage Guide
===========

Here's a guide to help outline exactly how all of this works.


BBBane.ed (★Backbone Boilerplate Bane edition★) has the following
directory structure, with the example project:
```
├── app
│   ├── app.js
│   ├── config.js
│   ├── main.js
│   ├── router.js
│   ├── img
│   │   └── ... (image assets)
│   ├── modules
│   │   ├── book.js
│   │   └── ... (other modules)
│   ├── styles
│   │   ├── _config.scss
│   │   ├── atomic
│   │   │   └── ... (Atomic files)
│   │   ├── fonts
│   │   │   └── ... (webfonts, including icons)
│   │   └── index.scss
│   └── templates
│       ├── book
│       │   └── ... (templates for book views)
│       ├── main.hbs
│       └── ... (other templates)
├── data
│   ├── books.json
│   └── (other dummy data)
├── favicon.ico
├── index.html
├── package.json
├── source
│   ├── icons
│   │   ├── ... (icon source SVGs)
│   └── images
│				├── ... (image source files)
└── vendor
    ├── jam 
    │   └── ... (jam packages)
    └── js
        └── libs
            └── require.js
```

## Core ##
 
`main.js`  
Here is where the application kicks off. `app.js` and `router.js` are
loaded, and then the Router created in `router.js` is instantiated and
attached to your `app`.  
Backbone's history is setup. In our case, we're using hash urls instead
of the HTML5 history API. Using "true" urls requires some special
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


## Auxiliary ##

`data`  
Place dummy data in here as `json` files. Specify your `collection` urls
to point to the appropriate files here.

`source`  
Place asset source files in here, such as SVGs for building icon fonts,
or PSDs for raster graphic assets.

`vendor`  
Third-party packages are placed in here, such as those installed by Jam
(in `vendor/jam/`), or those you install yourself (in `vendor/js/`, for
example).

`package.json`  
Specify your app's dependencies and other information here.  
This is also where Jam's directories are specified.
