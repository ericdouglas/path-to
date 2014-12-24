var expect = require( 'chai' ).expect;
var path   = require( '../index' );

describe( '#pathTo', function() {
  it( 'create a 5lvl path to app.js file', function() {
    expect( path( 5, 'app' )).to.equal( '../../../../../app' );
  });

  it( 'create a 3lvl path without a file or folder name', function() {
    expect( path( 3 )).to.equal( '../../../' );
  });
});
