function theBeatlesPlay(musicians, instruments) {
  var hello = []
  for (var i=0; i < 4; i++){
    hello.push(`${musicians[i]} plays ${instruments[i]}`)
  } return(hello)
}

function johnLennonFacts(array) {
  var i = 0
  while(i < array.length){
    array[i] = `${array[i]}!!!`
      i++
  } return(array)
}

function iLoveTheBeatles(number){
  var hello = []
  do {
    hello.push(`I love the Beatles!`)
    number++
  } while (number < 15);
  return (hello)
}
