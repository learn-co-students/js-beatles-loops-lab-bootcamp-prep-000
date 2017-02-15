function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlay = [];
  for (let i=0; i < musicians.length; i++) {
    theBeatlesPlay.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return theBeatlesPlay;
}

function johnLennonFacts(facts) {
  let i = 0;
  var jlFacts = new Array ();
  while(i < facts.length) {
    jlFacts[i] = facts[i] + "!!!";
    i++;
  }
  return jlFacts;
}

function iLoveTheBeatles(n) {
  var array = new Array ();
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15)
  return array;
}
