function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for(var i = 0; i < musicians.length; i++){
    emptyArray.push(musicians[i] + " plays " + instruments[i])
  }
return emptyArray
}

function johnLennonFacts(facts) {
var exclamationArray = []
var i = 0
while (i < facts.length){
exclamationArray.push(facts[i] + "!!!")
i++;
  }
  return exclamationArray
}

function iLoveTheBeatles(n) {

  var poop = []

  do {
    n += 1
      poop.push("I love the Beatles!")
  } while (n < 15);

  return poop
}
