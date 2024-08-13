module.exports = function reverse (n) {
  let dataString = n.toString();
  dataString = dataString.charAt(0) === '-' ? dataString.slice(1) : dataString;
  dataString = dataString.slice(-1) === '0' ? dataString.slice(0, -1) : dataString;

  const numberReverse = Number(dataString.split('').reverse().join(''));
  return (numberReverse)
}
