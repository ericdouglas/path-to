# pathTo

A simple abstraction to identify the path and request your files and folders in a Node.js project.

## Installation

```sh
npm install pathTo --save
```

## Usage

**Without** `pathTo` module:

```js

var dep1 = require( '../../../../file' );
var dep2 = require( '../../../../../../folder' );
var dep3 = require( '../../../folder' );
var dep4 = require( '../../../another-folder' );

```

**With** `pathTo` module:

```js

var path = require( 'pathTo' );

var dep1 = require( path( 4, 'file' ));
var dep2 = require( path( 6, 'folder' ));
var dep3 = require( path( 3, 'folder' ));
var dep4 = require( path( 3, 'another-folder' ));

```

If you want to use just the `../../../` abstraction, you could use the `pathTo` in that manner:

```js

var path = require( 'pathTo' )( 4 );

var dep1 = require( path + 'file' );
var dep2 = require( path + 'folder' );
var dep4 = require( path + another-folder' );

```

## Real Example

You could look at [this](https://github.com/ericdouglas/labs/tree/master/nodejs/practice/006) folder to see a *working* example.

In [app.js](https://github.com/ericdouglas/labs/blob/master/nodejs/practice/006/some/folder/here/app.js) file, we loaded the `path-to` module and used it in two different forms.

## Contributing

* Take care to maintain the existing coding style.
* Add unit tests for any new or changed functionality. 
* Lint and test your code.

## Release History

* 0.1.0 Initial release
