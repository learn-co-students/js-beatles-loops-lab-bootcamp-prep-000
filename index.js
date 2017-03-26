function theBeatlesPlay(musicians, instruments){
  var plays = []
  for (let i = 0; i <= musicians.length - 1; i++){
    plays.push(musicians[i] + ` plays ${instruments[i]}`)
  }
  return plays
}

function johnLennonFacts(facts){
  var lennonFacts = []
  
  while (facts.length > 0){
    lennonFacts.push(facts[0] + "!!!")
    facts.shift()
  }
  return lennonFacts
}

function iLoveTheBeatles(number){
  var love = []

  do{
    love.push("I love the Beatles!")
    ++ number
    
  } while (number < 15)
  
  return love
}