function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + ' plays ' + instruments[i];
    myArray.push(string);
  }
  return myArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var myArray = [];
  do {
    myArray.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return myArray;
}