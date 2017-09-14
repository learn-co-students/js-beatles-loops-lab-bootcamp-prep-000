function theBeatlesPlay(musician, instrument) {
  var pairing = [];

  for (var i = 0; i < musician.length; [i++]) {
    pairing.push(musician[i] + ' plays ' + instrument[i]);
  }
  return pairing;
}


function johnLennonFacts(factoid) {
  var facts = [];
  var count = 0;
  while (count < factoid.length) {
    facts.push(factoid[count] + "!!!");
    count++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15) ;
return array;
}
