function theBeatlesPlay(musicians, instruments){
  var list = []
  for (var i = 0; i < musicians.length; i++){
    var current_musicians = musicians[i]
    var current_instruments = instruments[i]
    list.push(current_musicians + " plays " + current_instruments)
  }
  return list
}

function johnLennonFacts(array){
  var new_array = []
  var i = 0
  while (new_array.length < array.length){
    new_array.push(array[i] + "!!!")
    i++
  }
  return new_array
}

function iLoveTheBeatles(n){
  var array = []
  do{
    array.push("I love the Beatles!")
    n++
  } while(n < 15)

  return array
}
