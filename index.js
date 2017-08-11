function theBeatlesPlay (musicians, instruments) {
  var beatlesPlay = [];
  for (var i = 0; i < musicians.length; i++){
    beatlesPlay[i] = (musicians[i] + ' plays ' + instruments[i])
  }
  return beatlesPlay
}

function johnLennonFacts (facts) {
  var i = 0
  while (i < facts.length){
  facts[i] = facts[i] + '!!!';
  i++;
  }
  return facts
}

function iLoveTheBeatles (number){
  var beatlelove = []
  do {
    beatlelove.push('I love the Beatles!')
    number++}
  while (number < 15);

  return beatlelove
}
