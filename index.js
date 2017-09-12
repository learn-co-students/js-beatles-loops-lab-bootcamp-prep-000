function theBeatlesPlay(musicians, instruments){
  var plays = []
  for(var i=0; i<musicians.length; i++){
    plays.push(`${musicians[i]} plays ${instruments[i]}` )
  }
  return plays
}

function johnLennonFacts(facts){
  for(var i=0; i<facts.length; i++){
    facts[i]=`${facts[i]}!!!`
  }
  return facts
}

function iLoveTheBeatles(number){
  var fangirl = []
  do{
    fangirl.push("I love the Beatles!")
    number++
  }
  while(number<15)
  return fangirl
}
