function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < 4; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  };
  return array; // returns the array of new strings
}

function johnLennonFacts(array) {
  var i = 0;
  var facts = [];
  while (i < array.length) {
    facts.push(array[i] + "!!!");
    i++
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
  // adds "I love the Beatles!" to empty array
  // increment the # passed in as a parameter
  // condition of the loop should check that # < 15
  // return array with "I love the Beatles!"
}
