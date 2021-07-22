
exports.min = function min (array) {
  if (!Array.isArray(array)||array.length===0) {
    return 0;
  }
  let arrayTest = array.slice();
  arrayTest.sort((a, b) => a - b);
  return arrayTest[0];
}

exports.max = function max (array) {
  if (!Array.isArray(array)||array.length===0) {
    return 0
  }
  let arrayTest = array.slice();
  arrayTest.sort((a, b) => b - a);
  return arrayTest[0];
}

exports.avg = function avg (array) {
  if (!Array.isArray(array)||array.length===0) {
    return 0
  }
  let arrayTest = array.slice();
  let sum = 0;
  for (let i = 0; i < arrayTest.length; i++) {
    sum += arrayTest[i]
  }
  return sum / arrayTest.length;

}
