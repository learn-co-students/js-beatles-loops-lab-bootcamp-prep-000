function theBeatlesPlay(musician, instrument) {
  var musiciansAndInstruments = [];
  for (var i = 0; i < musician.length; i++) {
    musiciansAndInstruments.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return musiciansAndInstruments;
};

function johnLennonFacts(facts) {
  var shoutedFacts = [];

  var i = 0;
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`);
    i++;
  }
  // return string with !!!
  return shoutedFacts;
};

function iLoveTheBeatles(n) {
  var loveForTheBeatles = [];

  do {
    loveForTheBeatles.push('I love the Beatles!');
    //increment the number passed in as a parameter
    n++;
    // while n is less than 15
  } while (n < 15);

  // return the array with the string
  return loveForTheBeatles;
};
