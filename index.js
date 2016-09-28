function theBeatlesPlay(musicians, instruments) {
  var anArray = [];
  for(var i = 0; i < musicians.length; i++) {
  anArray.push(musicians[i] + ' plays ' + instruments[i]);
}
return anArray;
}

function johnLennonFacts(facts) {
  var array = [];
  var counter = 0;
  while(counter < facts.length) {
    array.push(facts[counter] + '!!!');
    ++counter;
  }
  return array;
}

function iLoveTheBeatles(n) {
  var anArray = [];
  do{
    anArray.push('I love the Beatles!')
  }
  while(n++ < 14);
  return anArray;
}
