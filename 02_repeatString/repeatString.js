const repeatString = function(string, num) {
  let output = '';
  if (num < 0) output = 'ERROR';
  for (i = 1; i <= num; i++) {
    output += string;
  }
  return output;
};

// Do not edit below this line
module.exports = repeatString;
