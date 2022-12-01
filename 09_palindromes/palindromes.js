const palindromes = function (words) {
  let processedWords = words.toLowerCase()
                        .replace(/[!,. ]/g, '');
  return processedWords === processedWords.split('')
                            .reverse()
                            .join('');
};

// Do not edit below this line
module.exports = palindromes;
