function theBeatlesPlay(musicians, instruments){
  var array = []
  
  for (var i = 0; i < musicians.length; i++){
    var temp = `${musicians[i]} plays ${instruments[i]}`
    array.push(temp)
  }
  return array 
}

function johnLennonFacts(array){
  var result = []
  for (var i = 0; i < array.length; i++){
    var temp = array[i] + "!!!"
    result.push(temp)
  }
  return result
}

function iLoveTheBeatles(n){
  var result = []
  do {
    result.push("I love the Beatles!")
    n++
  } while(n < 15)
  return result
}