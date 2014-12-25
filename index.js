/*
* Return the correct path to your file or folder informed
*
* @param {Number} level
* @param {String} archive
*/
function pathToHandler(level, archive) {
  var path = require('path');
  var out = null;
  var args = Array.prototype.slice.call(arguments, []);
  var hasTwoArgs = (args.length === 2);
  var hasFirstArgAsNumber = (args.length === 1 && (typeof(level) === 'number'));

  if (hasTwoArgs || (hasFirstArgAsNumber)) {
    level = level ? new Array(level + 1).join('../') : '../';
    archive = archive || '';
    out = path.resolve(level, archive);
  }
  
  return out
}
module.exports = pathToHandler;
