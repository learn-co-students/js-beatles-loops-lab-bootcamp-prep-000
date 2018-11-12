function theBeatlesPlay(musicians, instruments) {
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  let counter = [];
	for (var i = 0; i < musicians.length; i++) {
		counter[i] = `${musicians[i]} plays ${instruments[i]}`;
	};
  return counter;
};
theBeatlesPlay();

function johnLennonFacts() {
  let facts = arguments[0];
  let enthusiasticFacts = [];
  let i = 0;
  while (i < facts.length) {
    enthusiasticFacts[i] = `${facts[i]}!!!`;
    i++;
  };
  return enthusiasticFacts;
};
johnLennonFacts();

function iLoveTheBeatles() {
  let i = arguments[0];
  // create var that stores empty array
  let beatlesLove = [];
  // do-while loop adds "I love the Beatles!" to empty array,
  // loop should then increment the number passed in as a parameter
  // loop condition checks parameter num < 15
  // loop contains a number of strings that represent diff btwn input number & 15
  do {
	  beatlesLove = ["I love the Beatles!", ...beatlesLove];
	  i++;
  } while (i < 15);
  // return array with the strings
  return beatlesLove;
};
iLoveTheBeatles();
