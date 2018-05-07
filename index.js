function theBeatlesPlay(musicians, instruments) {
  let facts = [];
  for (let i = 0; i < musicians.length; i++) {
    facts.push(musicians[i] + ' plays ' + instruments[i]);
  }
  
  return facts;
}

function johnLennonFacts(facts) {
  return facts.map(fact => {
    return fact + '!!!';
  })
}

function iLoveTheBeatles(num) {
  let phrases = [];
  
  do {
    phrases.push("I love the Beatles!");
    num++
  } while (num < 15);
  return phrases;
}