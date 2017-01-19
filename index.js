function theBeatlesPlay(musicians,instruments){
  var plays = new Array()
  for(var i=0;i<musicians.length;i++){
    plays.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return plays
}

function johnLennonFacts(facts){
  for(var i=0;i<facts.length;i++){
    facts[i] = facts[i] += '!!!'
  }
  return facts
}

function iLoveTheBeatles(n){
  var love = new Array()
  do{
    love.push("I love the Beatles!")
    n += 1
  } while(n<15)
  return love
}