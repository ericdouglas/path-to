var expect = require( 'chai' ).expect;
var path   = require( '../index' );
var path3  = require( '../index' )( 3 );

describe( '#pathTo', function() {
  it( 'create a 5lvl path to app.js file', function() {
    expect( path( 5, 'app' )).to.equal( '../../../../../app' );
  });

  it( 'create a 3lvl path without a file or folder name', function() {
    expect( path( 3 )).to.equal( '../../../' );
  });

  it( 'also create a 3lvl path without a file or folder name', function() {
    expect( path3 ).to.equal( '../../../' );
  });

  it( 'create a 3lvl path with a app.js file name', function() {
    expect( path3 + 'app' ).to.equal( '../../../app' );
  });
});
