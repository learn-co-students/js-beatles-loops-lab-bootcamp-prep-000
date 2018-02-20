function theBeatlesPlay(musicians, instruments) {
  var musicianPlays = [];
  for(let i = 0; i < musicians.length; i++) {
    var sentence = `${musicians[i]} plays ${instruments[i]}`
    musicianPlays.push(sentence);
  }
  
  return musicianPlays;
}

function johnLennonFacts(facts) {
  var exclamationFacts = [];
  var i = 0;
  while(i < facts.length) {
    var fact = `${facts[i]}!!!`
    exclamationFacts.push(fact);
    i++;
  }
  
  return exclamationFacts;
}

function iLoveTheBeatles(num) {
  var beatleLoves = [];
  do {
    beatleLoves.push("I love the Beatles!");
    num++
  } while (num < 15);
  return beatleLoves;
}