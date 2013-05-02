Usage Guide
===========

Here's a guide to help outline exactly how all of this works.


BBBane.ed ("*Backbone Boilerplate Bane edition*") has the following
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