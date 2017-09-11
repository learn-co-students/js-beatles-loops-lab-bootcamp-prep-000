function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(var i=0; i<musicians.length; i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`
    array.push(string)

  }
  return array
}

function iLoveTheBeatles(num) {
  var array = []
  for(var i=0; i<num+1; i++) {
    var string = "I love the Beatles!"
    array.push(string)
  }
  return array
}

function johnLennonFacts(array) {
  for(var i=0; i<array.length; i++){
    array[i] += ('!!!')
  }
  return array
}

function iLoveTheBeatles(num) {
  var array = []
  var string = "I love the Beatles!"
  do{
    array.push(string)
    num++
  } while (num<15)
  return array
}
