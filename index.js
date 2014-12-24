/*
* Return the correct path to your file or folder informed
*
* @param {Number} level
* @param {String} archive
*/
module.exports = function( level, archive ) {

  var local = new Array( level + 1 ).join( '../' );

  if ( archive ) return local + archive;
  
  return local;

};
