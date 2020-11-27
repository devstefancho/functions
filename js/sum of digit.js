// convert number to string and add all digits // example: "201" => 3
function addDigit(num) {
  return num.toString().split('').map(str => parseInt(str)).reduce((acc, el)=> acc+el, 0);
}
