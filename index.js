function theBeatlesPlay(musicians, instruments){
  var play = []
  for(let i = 0 ; i < musicians.length ; i++){
    play.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return play
}

function johnLennonFacts(facts){
  let i = 0
  while(i < facts.length){
    facts[i] += "!!!"
    i++; 
  }
  return facts
}

function iLoveTheBeatles(times){
  var arr = []
  do{
    arr.push("I love the Beatles!")
    times++
  }while(times < 15)
  return arr
}