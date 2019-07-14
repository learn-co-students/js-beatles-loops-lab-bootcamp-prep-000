// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = []
  for(let i = 0; i < musicians.length; i++){
    array[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return array
}

function johnLennonFacts(facts){
  let i = 0
  var bigFacts = []
  while(i < facts.length){
    bigFacts[i] = facts[i] +"!!!"
    i++
  }
  return bigFacts
}

function iLoveTheBeatles(number){
  var newArray = []
  do{
    newArray.push("I love the Beatles!")
    number++
  }while(number < 15)
  return newArray
}