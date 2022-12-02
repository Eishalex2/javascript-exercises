const findTheOldest = function(people) {
  const thisYear = new Date().getFullYear();
  const ordered = people.sort((a, b) => 
    ((a.yearOfDeath || thisYear) - a.yearOfBirth) > 
    ((b.yearOfDeath || thisYear) - b.yearOfBirth) ? -1 : 1);
  return ordered[0];
}

// Do not edit below this line
module.exports = findTheOldest;
