function theBeatlesPlay(musicians, instruments) {
  var beatle = [];
  for (var i = 0; i < musicians.length; i++){
    beatle.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return beatle
}

function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length){
    results.push(facts[count] + '!!!')
    count++
  }
  return results
}

function iLoveTheBeatles(num) {
  var array = [];
  do { 
    array.push("I love the Beatles!");
    num++;
  } while (num < 15); 
    return array
}

