function theBeatlesPlay(musicians, instruments) {
  var facts = new Array();

  for (var i = 0; i < musicians.length; i++) {
    facts.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return facts;
}

function johnLennonFacts(facts) {
  var counter = 0;

  while (counter < facts.length) {
    facts[counter] += "!!!";

    counter++;
  }

  return facts;
}

function iLoveTheBeatles(num) {
  var howMuch = new Array();
  
  do {
    howMuch.push("I love the Beatles!");
  } while (++num < 15);

  return howMuch;
}