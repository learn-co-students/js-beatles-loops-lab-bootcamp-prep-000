function theBeatlesPlay(musicians, instuments){
  var newArray=[]
  for (var i=0; i<musicians.length; i++){
    var newString = musicians[i] + " plays "+ instuments[i]
    newArray.push(newString)
  }
  return newArray
}

function johnLennonFacts(array){
  var newArray = []
  var i = array.length-1
  while (i >= 0) {
    console.log(i)
    var newString = array[i] + "!!!"
    newArray.unshift(newString)
    i--
  }
  return newArray
}

function iLoveTheBeatles (num){
  var newArray = []
  
  do {
    newArray.push("I love the Beatles!")
  }
  while (newArray.length <= num && num < 15)
  return newArray
}