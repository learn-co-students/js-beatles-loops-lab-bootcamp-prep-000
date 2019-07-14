// add solution here
function theBeatlesPlay(musArray,instArray){
  var array =[]
  for (var counter = 0 ; counter < musArray.length ;counter++){
   array.push( musArray[counter] + " plays "+instArray[counter])
  }
  return array
}

function johnLennonFacts(array){
 var index = 0
  while (index<array.length){
   array[index] = array[index] + "!!!"
   index = index+1
  }
  return array
}

function iLoveTheBeatles(num){
  var array = []
  if (num > 15){
    return "I love the Beatles!"
  }
  do {
    array.push("I love the Beatles!")
    num = num+1
  }while (num<15)
  return array
}