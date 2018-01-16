function theBeatlesPlay(musicians, instruments){
  var emptyArray = []
  
  for(let x =0; x <= musicians.length - 1; x++){
    emptyArray.push(`${musicians[x]} plays ${instruments[x]}`)
  }
  return emptyArray
}

function johnLennonFacts(array){
  var x = array.length-1
  while(x >= 0){
    array[x] += "!!!"
    x--
  }
  return array
}

function iLoveTheBeatles(number){
  var emptyArray = []
  
do{
  emptyArray.push("I love the Beatles!")
  number++
}while(number < 15)

return emptyArray
}