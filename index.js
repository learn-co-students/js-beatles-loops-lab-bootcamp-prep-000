//create a function theBeatlesPlay
function theBeatlesPlay(musicians, instruments) {
  //create an empty array that stores musicans and intruments
  var musiciansAndInstruments = [];
  //loop over array of musicians
  for(var i = 0; i < musicians.length; i++) {
    //loop over first index of musicians and first index of instruments
    //Add string to the empty array
    musiciansAndInstruments.push(musicians[i] + " plays " + instruments[i]);
  }
  return musiciansAndInstruments;
};


function johnLennonFacts(facts) {
  //create an empty array that accepts facts
  var shoutedFacts = [];

  var i = 0; //start from index 0, you always need a counter
  while(i < facts.length) {
    //add "!!!" to end to facts
    shoutedFacts.push(facts[i] + "!!!")
    i++ // counting UP
  }
  //return array of strings with exclamation points
  return shoutedFacts;
};

function iLoveTheBeatles(n) {
  //var that stores an empty array
  var beatlesLove = [];
  //do-while loop
  do {
    beatlesLove.push("I love the Beatles!")
    n++
  } while (n < 15);
  return beatlesLove;
};
