function theBeatlesPlay(musicians, instruments){
  var result = new Array();
    for (let i = 0; i < musicians.length; i++){
      var newString = musicians[i] + " plays " + instruments[i]
      result.push(newString)
    }
  return result
}

function johnLennonFacts(array){
  var i = 0
  var result = new Array();
  while (i < array.length){
    result.push(array[i] + "!!!")
    i++
  }
  return result
}

function iLoveTheBeatles(n){
  var result = new Array();
  do {
    result.push("I love the Beatles!")
    n++
  } while (n < 15)

  return result
}
