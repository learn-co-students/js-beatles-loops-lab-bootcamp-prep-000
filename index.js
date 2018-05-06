function theBeatlesPlay(musicians, instruments) {
  let phrases = [];
  for (let i = 0; i < musicians.length; i++) {
    phrases.push(musicians[i] + " plays " + instruments[i]);
  }
  return phrases;
}

function johnLennonFacts(facts){
    let newFacts = [];
    let i = 0
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number){
  let array = []
  do {
    array.push("I love the Beatles!")
    ++number
  } while (number < 15)
  return array;
}
