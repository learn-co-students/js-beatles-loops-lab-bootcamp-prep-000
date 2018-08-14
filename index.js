function theBeatlesPlay(musicians, instruments) {
  let beatles = [];
  for(let i = 0; i<musicians.length; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles;
}
function johnLennonFacts(facts) {
  let i = 0;
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++;
  }
  return facts;
}
function iLoveTheBeatles(number) {
  let array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while(number < 15);
  return array;
}