function theBeatlesPlay(musicians, instruments){
  var empty = []
  for (var i = 0; i < musicians.length; i++){
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empty
}
function johnLennonFacts(array){
  //var newArray = []
  for (var i = 0; i < array.length; i++){
    array[i] = `${array[i]}!!!`
  }
  return array
}
function iLoveTheBeatles(parameter){
  var newArray = []
  var i = 0
  do {
  newArray.push('I love the Beatles!');
  i++
} while (i <= parameter && parameter < 15);
return newArray
}
