function theBeatlesPlay(musicians, instraments) {
  var musicianPlays = [];
  for (var i = 0; i < musicians.length; ++i) {
    musicianPlays.push(`${musicians[i]} plays ${instraments[i]}`);
  }
  return musicianPlays;
}

function johnLennonFacts(facts) {
  var index = 0;
  var factsStrings = [];
  while (index < facts.length) {
    factsStrings.push(facts[index] + "!!!");
    index += 1;
  } 
  return factsStrings;
}

function iLoveTheBeatles(number) {
  var stringArray = [];
  do {
    number++;
    stringArray.push("I love the Beatles!");
  }while (number < 15);
  return stringArray;
}