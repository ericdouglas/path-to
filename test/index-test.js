var expect = require( 'chai' ).expect;
var path = require('path');
var pathTo   = require( '../index' );

describe('Module pathTo', function () {
  it('should be create an path resolved with five up levels', function () {
    expect(pathTo(5, 'app')).to.equal(path.resolve('../../../../../app'));
  });

  it('should be return null if the two arguments was not filled', function () {
    expect(pathTo('app')).to.be.a('null');
  });

  it('should be return just the resolved path', function () {
    expect(pathTo(2)).to.be.eql(path.resolve('../../'));
  });
});
