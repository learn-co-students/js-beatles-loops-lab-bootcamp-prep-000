function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array
}

function johnLennonFacts(newFacts){
  for (var i = 0; i < newFacts.length; i++){
    newFacts[i] = newFacts[i] + '!!!'  
  }
  return newFacts
}

function iLoveTheBeatles(number){
  var array = []
  do {
    array.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return array
}