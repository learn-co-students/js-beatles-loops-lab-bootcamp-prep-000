function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    var string = `${musician} plays ${instrument}`;
    array.push(string);
  }
  return array;
}

function johnLennonFacts(facts){
  var array = [];
  var i = 0;
  var length = facts.length;
  while(i < length) {
    var fact = facts[i];
    var string = `${fact}!!!`;
    array.push(string);
    i++;
  }
  return array;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  }
  while(n < 15);
  return array;;
}
