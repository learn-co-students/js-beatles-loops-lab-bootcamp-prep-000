function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var array = [];

  for (var i = 0; i < arrayMusicians.length; i++) {
    var person = arrayMusicians[i];
    array.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var array = [];
  let i = 0;

  while ( i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++
  }
  return array;
}

function iLoveTheBeatles(num) {
  var array = [];

  do {
    array.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return array;
}
