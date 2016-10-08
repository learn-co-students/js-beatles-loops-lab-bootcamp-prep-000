function theBeatlesPlay (person, instruments){
  var sent = []
  for (var i = 0 ; i < person.length ; i ++){
    sent[i] = `${person[i]} plays ${instruments[i]}`
  }
  return sent
}
function johnLennonFacts (array){
  var i = 0
  while(i < array.length){
    array[i] = array[i] + "!!!"
    i++
  }
return array
}

function iLoveTheBeatles (num){
  var arr = []
  var i = 0
  do{
    arr[i] = "I love the Beatles!"
    i ++
    num++
  }while(num < 15)
  return arr
}
