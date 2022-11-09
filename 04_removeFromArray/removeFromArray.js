const removeFromArray = function(array, remove, ...removeMore) {
  const initialFilter = array.filter((item) => item !== remove);
  let finalFilter = initialFilter;
  for (const item of removeMore) {
    let index = finalFilter.indexOf(item);
    if (index > -1) {
      finalFilter.splice(index, 1);
    }
  }
  return finalFilter;
};

// Do not edit below this line
module.exports = removeFromArray;
