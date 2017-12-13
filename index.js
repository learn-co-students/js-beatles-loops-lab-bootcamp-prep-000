function theBeatlesPlay (musicians, instruments) {
  var whoPlaysWhat = []
  for (let i = 0; i < musicians.length; i++ ) {
    var string = `${musicians[i]} plays ${instruments[i]}`
    whoPlaysWhat.push(string)
  }
  return whoPlaysWhat
}
function johnLennonFacts(array) {
  var newArray = []
  var i = 0
  while (i < array.length) {
    newArray.push(array[i] + "!!!")
    i++
  }
  return newArray
}
function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  }
  while (n < 15)
  return array
}