//1
function theBeatlesPlay(musicians, instruments) {
  var allBeatles = [];
  for (var i=0; i < musicians.length; i++) {
    allBeatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return allBeatles;
}

//2
function johnLennonFacts(facts) {
  var newArray = [];
  var i = 0;
  while (i < facts.length) {
    newArray.push(`${facts[i]}!!!`);
      i++;
  }
  return newArray;
}

//3
function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while ( number < 15);
  return array;
}
