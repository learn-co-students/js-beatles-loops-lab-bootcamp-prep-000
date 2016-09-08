function theBeatlesPlay(musicians, instruments){
  var newArray = []
  for (var i = 0; i < musicians.length ; i++){
    var name = musicians[i]
    var type = instruments[i]
    var sent = '' + name + ' plays ' + type;
    newArray.push(sent)
  }
  return newArray
}
function johnLennonFacts(fact){
  var i = 0
  while(i < fact.length){
    var sent = fact[i]
    sent = sent + '!!!'
    fact[i] = sent
    i++
  }
  return fact
}

function iLoveTheBeatles(n){
  var newArray = []
  do {
    newArray.push('I love the Beatles!')
    n++
  } while (n < 15);
  return newArray
}
