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
