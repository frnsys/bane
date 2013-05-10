This is a fork/customization of
[tbranyen](https://github.com/tbranyen)'s brilliant [Backbone
Boilerplate](https://github.com/tbranyen/backbone-boilerplate). All
credit goes to him and the
[contributors](https://github.com/tbranyen/backbone-boilerplate/contributors) to that project.

![Bane](http://supermedes.com/assets/bane.jpg)

Bane
====================

This is basically a more "opinionated" version of Backbone Boilerplate,
modified for rapid prototyping.

My primary use case is rapid prototyping, where the production and
testing tools provided by Backbone Boilerplate aren't really
necessary. However, I still want robust and modular code, so that if
these prototypes *do* need to be adapted for production, it's a smooth
process.

Most of the changes are to facilitate the "rapid" aspects of things.
While the boilerplate is beefier in terms of development dependencies (see the
changes below), it's all to make the development process less
frustrating and more efficient.

Jade is added to save time from typing out redundant markup tags.
I've added my own Atomic styling microframework, which is a set of
common stylings I use. I encourage you to assemble something similar
that reflects your own style and swap it in!

## Changes ##
* [Jade](http://jade-lang.com/) added as the templating engine
* [Underscore.string](https://github.com/epeli/underscore.string) added
	to provide some extra string manipulation features
* Added my [Atomic] styling microframework (built with
	[Sass](http://sass-lang.com/))
* Testing frameworks removed
* Almond removed
* Build system ([Grunt](http://gruntjs.com/)) customized
* Added some example code


## Getting started ##

``` bash
$ git clone https://github.com/ftzeng/bane.git && cd bane && ./powerup.sh
```

See the [guide](https://github.com/ftzeng/bane/blob/master/guide.md) for more information.

## Documentation ##

View the Backbone Boilerplate documentation here:
[GitHub Wiki](https://github.com/tbranyen/backbone-boilerplate/wiki)

## License ##
Backbone Boilerplate is Copyright (c) 2013 Tim Branyen (@tbranyen)  
Licensed under the MIT license.
