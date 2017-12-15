function theBeatlesPlay(musicians,instruments){
  var myArray = []
  for (var i=0 ; i<musicians.length ; i++){
    myArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return myArray
}

function johnLennonFacts(myArray){
  var outArray = []
  var i = 0
  while (i < myArray.length) {
    outArray.push(myArray[i]+"!!!")
    i++
  } 
  
  return outArray
}

function iLoveTheBeatles(myNumber){
  var outArray = []
  do {
    outArray.push("I love the Beatles!")
    myNumber++
  } while (myNumber < 15)
  return outArray
}