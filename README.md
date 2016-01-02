Webpack to Bower library example
================================

This project serves as an example of how to create a library using webpack and babel
that can be used by a "legacy" bower application using a `<script>` tag.

All the code for the library resides in the src directory. The index.js file is
the library entry point, and defines the exported symbols (default and only export).

Features
========

- JavaScript 6 with babel ES2015 preset
- Webpack buid with source maps
- Bower file

Usage
-----

If you have a bower application, this is what you must do:

```bash
$ git clone https://github.com/cangussu/webpack2bower.git
$ cd webpack2bower
$ bower link
$ cd /legacy-application
$ bower link webpack2bower
```

Add the following line to bower.json dependency list:

`"webpack2bower": "*"`

In your code:

```javascript
  var _42 = new webpack2bower.Lib42();
  _42.about();
```

Of course, don't forget to rename webpack2bower to the real thing :)

Dependencies
============

This example has two dependencies, just to show how to use an external
library and an embedded one.

immutable-js: external dependency, and is included in the bower.json file
              so that the legacy bower application can handle it.

redux: embedded within this library, opaque to the user of the library


TODO
====

- add minification
- add unit testing example/triggers
- support a linter, static checker, etc.