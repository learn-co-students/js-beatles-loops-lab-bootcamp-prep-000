function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i = 0; i<4; i++){
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array
}

function johnLennonFacts(array){
  for (let i = 0; i<array.length; i++){
    array[i] = array[i] +"!!!"
  }
  return array
}

function iLoveTheBeatles(number){
  var array = []
  do{
    array = [...array, "I love the Beatles!"]
    number++
  } while (number < 15)
  return array
}