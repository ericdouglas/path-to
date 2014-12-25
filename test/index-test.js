var expect = require( 'chai' ).expect;
var path   = require( 'path' );
var pathTo = require( '../index' );

describe( 'Module path-to', function () {
  it( 'should create an path resolved with five up levels', function() {
    expect( pathTo( 5, 'app' )).to.equal( path.resolve( '../../../../../app' ));
  });

  it( 'should return null if the two arguments was not filled', function() {
    expect( pathTo( 'app' )).to.be.a( 'null' );
  });

  it( 'should return just the resolved path', function() {
    expect( pathTo( 2 )).to.be.eql( path.resolve( '../../' ));
  }); 
});
