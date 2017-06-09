function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for(var i = 0; i < musicians.length; i++) {
    emptyArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return emptyArray;
}

function johnLennonFacts(array) {
  var counter = 0;
  var facts = [];
  while(counter < array.length) {
    facts.push(array[counter] + '!!!');
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    number++;
  }
  while(number < 15);
  return emptyArray;
}
