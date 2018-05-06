function theBeatlesPlay(musicians, instruments) {
  var sentence = [];
  for (let i = 0; i < 4; i++) {
    sentence.push(musicians[i] + " plays " + instruments[i]);
  }
  return sentence;
}

function johnLennonFacts(facts) {
  var johnFacts = [];
  let i = 0;
  while (i < facts.length) {
    johnFacts.push(facts[i] + "!!!");
    i++;
  }
  return johnFacts;
}

function iLoveTheBeatles(number) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return love;
}