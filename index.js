function theBeatlesPlay(musicians, instruments){
  var array =[];
  for (let i = 0; i < musicians.length; i++){
    array.push(musicians[i]+ " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(array){
  var newFacts = [];
  for (let i = 0; i < array.length; i++ ){
    newFacts.push(array[i] + "!!!")
  }
  return newFacts
}

function iLoveTheBeatles(n){
  var array = []
  do {
    array.push("I love the Beatles!")
  } while (n++ && n < 15)
  return array
}
