function johnLennonFacts(array){
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] + "!!!"
  }
  return array
}
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    console.log(`${musicians[i]} plays ${instruments[i]}`)
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
function iLoveTheBeatles(number) {
  var array = []
  if (number < 15){
    for (var i = 0; i < number; i++) {
      array.push("I love the Beatles!")
    }
  }
  array.push("I love the Beatles!")
  return array
}
