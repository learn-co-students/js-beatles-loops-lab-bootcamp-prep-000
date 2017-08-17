function theBeatlesPlay(musicians, instruments) {
  var play = [];

  for(var i = 0; i < musicians.length; i++) {
    play.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return play;
}

function johnLennonFacts(facts) {

var i = 0;
var modFacts = [];

  while(i < facts.length) {
    modFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return modFacts;
}

function iLoveTheBeatles(number) {
  var combinedStrings = [];

  do {
    combinedStrings.push('I love the Beatles!')
    number++;
  } while(number < 15);

  return combinedStrings;

}
