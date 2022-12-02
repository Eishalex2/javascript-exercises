//index starts from 1;
const fibonacci = function(index) {
  let fibArray = [1, 1];
  if (index < 0) return "OOPS";
  for (i = 2; i < index; i++) {
    fibArray[i] = fibArray[i-1] + fibArray[i-2]; 
  }
  return fibArray[fibArray.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
