// add solution here
function theBeatlesPlay(musicians, instruments){
  var empty = []
  for(let i = 0; i < musicians.length; i++){
    empty.push(musicians[i] + " plays " + instruments[i])
  }
  return empty
}

function johnLennonFacts(array){
  var empty = []
  let i = 0
 while(i < array.length){
    empty.push(array[i] + "!!!")
    i++
  }
  return empty
}

function iLoveTheBeatles(num){
  var empty = []
  do{
    empty.push("I love the Beatles!")
    num++
  } while (num < 15)
  return empty
}