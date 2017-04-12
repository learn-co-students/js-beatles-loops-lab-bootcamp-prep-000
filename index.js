
function theBeatlesPlay(musicians, instruments){
  var beatles = [];
  for(var i = 0; i < musicians.length ; i++) {
    beatles[i] = (musicians[i] + " plays " + instruments[i])
  }
  return beatles
}

function johnLennonFacts(facts){
  var j = 0
  while(j<facts.length){
    facts[j] = (facts[j] + '!!!')
    j++
  }
  return facts
}

function iLoveTheBeatles(number){
  var love = []
  if (number < 15){
    do{
      love.push('I love the Beatles!')
      number --
    }
    while (number + 1 > 0)
    return love
  }  else{
    love = ['I love the Beatles!']
    return love
  }
}
