// add solution here

var newArray = [];

function theBeatlesPlay(musicians, instruments){
  
  for (var i = 0; i < musicians.length; i++){
      newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts){
  var i = 0
  while ( i < facts.length){
    facts[i] += "!!!"
    i++
  }
  return facts
}
function iLoveTheBeatles(number){
  var array = [];
  
  do{
    array.push("I love the Beatles!")
    number++
  }while (number < 15)
  
  console.log(array)
  return array
}

