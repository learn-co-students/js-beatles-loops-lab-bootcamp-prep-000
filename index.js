function theBeatlesPlay(musicians, instruments){
  var play = []
  for (var i = 0; i < musicians.length; i++){
    play.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return play
}

function johnLennonFacts(fact){
  var i = 0
  var factsList = []
  while (i < fact.length){
    factsList.push(`${fact[i]}!!!`)
    i++
  }
  return factsList
}

function iLoveTheBeatles(num){
  var list = []
  
  function incrementVariable(){
    num++
    return num
  }
  
  do{
    list.push(`I love the Beatles!`)
  }while(incrementVariable() < 15)
  return list
}