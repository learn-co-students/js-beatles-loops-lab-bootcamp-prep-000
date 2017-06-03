function theBeatlesPlay(musicians,instruments) {
  var play = []
  for (var i = 0; i < musicians.length; i++) {
    play.push(musicians[i]+" plays "+ instruments[i])
  }
  return play
}
function johnLennonFacts(array) {
  var i=0
  var newArray = []
  while (i<array.length) {
    newArray[i]=array[i]+"!!!"
    i+=1
  }
  return newArray
}
function iLoveTheBeatles(number) {
  var empty = []
  do {
    empty.push("I love the Beatles!")
    number+=1
  } while (number<15);
  return empty
}
