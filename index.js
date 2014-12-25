/*
* Return the correct path to your file or folder informed
*
* @param {Number} level
* @param {String} archive
*/
function pathToHandler(level, archive) {
  var path = require('path');
  var out = null;
  
  level = level ? new Array(level + 1).join('../') : '../';
  archive = archive || '';
  out = path.resolve(level, archive);
  
  return out
}
module.exports = pathToHandler;
