function theBeatlesPlay(musicians, instruments) {
  var paired = [];
  for (let i = 0; musicians.length > i; i++) {
    paired.push(musicians[i] + " plays " + instruments[i]);
  }
  return paired;
}

function johnLennonFacts(array) {
  var facts = [];
  var i = 0;
  while (array.length > i) {
    facts.push(array[i] + "!!!");
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    number++;
  }
  while(number < 15); 
  return love;
}