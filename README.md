# path-to

[![Build Status](https://travis-ci.org/thothJS/path-to.svg?branch=master)](https://travis-ci.org/thothJS/path-to)
[![Coverage Status](https://coveralls.io/repos/thothJS/path-to/badge.png)](https://coveralls.io/r/thothJS/path-to)

[![NPM](https://nodei.co/npm/path-to.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/path-to/)

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

## License

The MIT License (MIT)

Copyright (c) 2014-2015 **Eric Douglas**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.