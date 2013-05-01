This is a fork/customization of
[tbranyen](https://github.com/tbranyen)'s brilliant [Backbone
Boilerplate](https://github.com/tbranyen/backbone-boilerplate). All
credit goes to him and the
[contributors](https://github.com/tbranyen/backbone-boilerplate/contributors) to that project.

Bane
====================

This is basically a more lightweight version of Backbone Boilerplate.
My primary use case is rapid prototyping, where the production and
testing tools provided by Backbone Boilerplate aren't really
necessary. However, I still want robust and modular code, so that if
these prototypes *do* need to be adapted for production, it's a smooth
process.

## Changes ##
* [Handlebars](http://handlebarsjs.com/) added as the templating engine
* Testing frameworks removed
* Almond removed
* Build system (grunt) removed
* Added some example code


## Getting started ##

``` bash
$ mkdir myproject && cd myproject
$ git clone --q --depth 0 git@github.com:ftzeng/bane.git .
$ jam upgrade
```

## Documentation ##

View the Backbone Boilerplate documentation here:
[GitHub Wiki](https://github.com/tbranyen/backbone-boilerplate/wiki)

## License ##
Backbone Boilerplate is Copyright (c) 2013 Tim Branyen (@tbranyen)  
Licensed under the MIT license.
