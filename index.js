function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for ( var i = 0; i < musicians.length; i++) {
    array [i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return array;
}

function johnLennonFacts(facts) {
  var counter = 0;
  var array = [];
  while (counter < facts.length) {
    array[counter] = `${facts[counter]}!!!`;
    counter ++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  var counter = number;
  
  do {
    array [(counter-number)] = "I love the Beatles!";
    counter ++;
  } while (counter < 15)
  return array;
}