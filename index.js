
function theBeatlesPlay (musicians, instruments) {
  var musiciansPlay = [];
  var i = 0;
  for (i = 0; i < musicians.length; i++) {
    musiciansPlay.push((musicians[i] + " plays " + instruments[i]));
  }
  return musiciansPlay;
}

function johnLennonFacts (facts) {
  var i = 0;
  var excitedFacts = [];
  while (i < facts.length) {
    excitedFacts.push(facts[i] + "!!!");
    i++;
  }
  return excitedFacts;
}

function iLoveTheBeatles (x) {
  var love =[];
  do {
    love.push("I love the Beatles!");
    x++
  } while (x < 15);
  return love;
}