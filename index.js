// add solution here
function theBeatlesPlay(musicians, instruments){
  var emptyArr = []
  for(var i = 0; i < musicians.length; i++){
    emptyArr.push( `${musicians[i]} plays ${instruments[i]}`)
  }

  return emptyArr
}

function johnLennonFacts(facts){
  var emptyArr = []

  for(var i = 0; i < facts.length; i++){
    emptyArr.push(`${facts[i]}!!!`)
  }
  return emptyArr
}

function iLoveTheBeatles(number){
  var emptyArr = []

  do{
    emptyArr.push('I love the Beatles!')
    number++
  }while(number < 15)

  return emptyArr
}
