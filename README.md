# path-to

## Status

[![Build Status](https://travis-ci.org/fth-ship/path-to.svg?branch=master)](https://travis-ci.org/fth-ship/path-to)

![Coverage Status](https://coveralls.io/repos/fth-ship/path-to/badge.png)](https://coveralls.io/r/fth-ship/path-to)

## Description

A simple abstraction to identify the path and request your files and folders in a Node.js project.

## Installation

```sh
npm install path-to --save
```

## Usage

**Without** `path-to` module:

```js

var dep1 = require( '../../../../file' );
var dep2 = require( '../../../../../../folder' );
var dep3 = require( '../../../folder' );
var dep4 = require( '../../../another-folder' );

```

**With** `path-to` module:

```js

var path = require( 'path-to' );

var dep1 = require( path( 4, 'file' ));
var dep2 = require( path( 6, 'folder' ));
var dep3 = require( path( 3, 'folder' ));
var dep4 = require( path( 3, 'another-folder' ));

```

If you want to use just the `../../../` abstraction, you could use the `path-to` in that manner:

```js

var path = require( 'path-to' )( 4 );

var dep1 = require( path + 'file' );
var dep2 = require( path + 'folder' );
var dep4 = require( path + 'another-folder' );

```

## Real Example

You could look at [this](https://github.com/ericdouglas/labs/tree/master/nodejs/practice/006) folder to see a *working* example.

In [app.js](https://github.com/ericdouglas/labs/blob/master/nodejs/practice/006/some/folder/here/app.js) file, we loaded the `path-to` module and used it in two different forms.

## Tests

```sh
npm test
```

## Contributing

* Take care to maintain the existing coding style.
* Add unit tests for any new or changed functionality. 
* Lint and test your code.

## Release History

* 0.1.0 Initial release
