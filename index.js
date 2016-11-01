function theBeatlesPlay(musicians, instruments) {
  var sentence = []
  for(var i = 0; i < musicians.length; i++){
    sentence[i] = musicians[i] + " plays " + instruments[i]
  }
  return sentence
}

function johnLennonFacts(facts){
  var num = 0
  while(num < facts.length){
    facts[num] = facts[num] + "!!!"
    num++
  }
  return facts;
}

function iLoveTheBeatles(num){
  var iLove = []
  do {
    iLove.push('I love the Beatles!')
    num++
  }
  while(num < 15)
  return iLove;
}
