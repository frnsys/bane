Usage Guide
===========

Here's a guide to help outline exactly how all of this works.


BBBane.ed ("Backbone Boilerplate Bane edition") has the following
directory structure:
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
│   │   ├── add.svg
│   │   ├── arrow-down.svg
│   │   ├── arrow-up.svg
│   │   ├── check.svg
│   │   ├── close.svg
│   │   ├── info.svg
│   │   ├── lock.svg
│   │   ├── question.svg
│   │   ├── redo.svg
│   │   └── undo.svg
│   └── images
└── vendor
    ├── jam
    │   ├── backbone
    │   │   ├── backbone.js
    │   │   └── package.json
    │   ├── backbone.layoutmanager
    │   │   ├── backbone.layoutmanager.js
    │   │   └── package.json
    │   ├── handlebars
    │   │   ├── handlebars.js
    │   │   └── package.json
    │   ├── jquery
    │   │   ├── dist
    │   │   │   ├── jquery.js
    │   │   │   ├── jquery.min.js
    │   │   │   ├── jquery.min.map
    │   │   │   └── jquery.pre-min.js
    │   │   ├── package.json
    │   │   ├── src
    │   │   │   └── sizzle
    │   │   │       ├── package.json
    │   │   │       └── speed
    │   │   │           └── benchmark.js
    │   │   │               └── package.json
    │   │   └── test
    │   │       └── qunit
    │   │           └── package.json
    │   ├── lodash
    │   │   ├── dist
    │   │   │   ├── lodash.backbone.js
    │   │   │   ├── lodash.backbone.min.js
    │   │   │   ├── lodash.compat.js
    │   │   │   ├── lodash.compat.min.js
    │   │   │   ├── lodash.js
    │   │   │   ├── lodash.legacy.js
    │   │   │   ├── lodash.legacy.min.js
    │   │   │   ├── lodash.min.js
    │   │   │   ├── lodash.mobile.js
    │   │   │   ├── lodash.mobile.min.js
    │   │   │   ├── lodash.underscore.js
    │   │   │   └── lodash.underscore.min.js
    │   │   ├── lodash.js
    │   │   └── package.json
    │   ├── require.config.js
    │   ├── require.js
    │   ├── underscore
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── package.json
    │   │   └── underscore.js
    │   └── underscore.string
    │       ├── README.markdown
    │       ├── lib
    │       │   └── underscore.string.js
    │       └── package.json
    └── js
        └── libs
            └── require.js
 ```